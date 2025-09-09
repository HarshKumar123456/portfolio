import React, { useEffect, useState } from "react";
import "./MoveSofaGame.css";
import Layout from "../../Layout/Layout";
import levels from "./MoveSofaGameLevels.js";
import PopUp from "../../PopUp/PopUp.jsx";
import settingsIcon from "../../../assets/images/icons/settings-icon.png";
import { findPossibleMovesForSofa } from "./MoveSofaGameHelperFunctions.js";
import { useNavigate } from "react-router-dom";
import clickAudio from "../../../assets/audio/click.wav";
import winningAudio from "../../../assets/audio/winning-sound.wav";
import pushingSofaAudio from "../../../assets/audio/pushing-sofa-sound.wav";
import gameStartAudio from "../../../assets/audio/woosh.mp3";


const MoveSofaGame = () => {
    const navigate = useNavigate();
    const [gameSpeed, setGameSpeed] = useState(500); // Represents Milliseconds

    const sleep = async (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };

    const playSound = (src) => {
        const sound = new Audio(src);
        sound.currentTime = 0;
        sound.volume = 0.5; // If Volume change feature is introduced then do it from here
        sound.play();
    };


    const [showMenuPopUp, setShowMenuPopUp] = useState(false);
    const [showLevelsMenuPopUp, setShowLevelsMenuPopUp] = useState(false);
    const [showHelpPopUp, setShowHelpPopUp] = useState(false);
    const [showGameWonPopUp, setShowGameWonPopUp] = useState(false);

    const [gameLevels, setGameLevels] = useState(
        [
            {
                number: 0,
                state: "passedBest",
            },
            {
                number: 1,
                state: "passed",
            },
            {
                number: 2,
                state: "attempting",
            },
            {
                number: 3,
                state: "locked",
            },
        ]
    );


    const [gamePossibleMoves, setGamePossibleMoves] = useState([
        {
            type: 'forward',
            displayText: 'F',
            isPossible: true,
            afterMoveSofaPosition: {
                startCoordinate: {
                    row: 0,
                    col: 1,
                },
                endCoordinate: {
                    row: 0,
                    col: 3,
                },
                orientation: 'hse',
            },
        },
        {
            type: 'backward',
            displayText: 'B',
            isPossible: false,
            afterMoveSofaPosition: {
                startCoordinate: {
                    row: 0,
                    col: -1,
                },
                endCoordinate: {
                    row: 0,
                    col: 1,
                },
                orientation: 'hse',
            },
        },
        {
            type: 'up',
            displayText: 'U',
            isPossible: false,
            afterMoveSofaPosition: {
                startCoordinate: {
                    row: -1,
                    col: 0,
                },
                endCoordinate: {
                    row: -1,
                    col: 1,
                },
                orientation: 'hse',
            },
        },
        {
            type: 'down',
            displayText: 'D',
            isPossible: false,
            afterMoveSofaPosition: {
                startCoordinate: {
                    row: 1,
                    col: 0,
                },
                endCoordinate: {
                    row: 1,
                    col: 1,
                },
                orientation: 'hse',
            },
        },


        {
            type: 'rdl',
            displayText: 'RDL',
            isPossible: false,
            afterMoveSofaPosition: {
                startCoordinate: {
                    row: 0,
                    col: 0,
                },
                endCoordinate: {
                    row: 1,
                    col: 0,
                },
                orientation: 'vse',
            },
        },
        {
            type: 'rdr',
            displayText: 'RDR',
            isPossible: false,
            afterMoveSofaPosition: {
                startCoordinate: {
                    row: 1,
                    col: 1,
                },
                endCoordinate: {
                    row: 0,
                    col: 1,
                },
                orientation: 'ves',
            },
        },
        {
            type: 'rul',
            displayText: 'RUL',
            isPossible: false,
            afterMoveSofaPosition: {
                startCoordinate: {
                    row: 0,
                    col: 0,
                },
                endCoordinate: {
                    row: 0,
                    col: -1,
                },
                orientation: 'ves',
            },
        },
        {
            type: 'rur',
            displayText: 'RUR',
            isPossible: false,
            afterMoveSofaPosition: {
                startCoordinate: {
                    row: -1,
                    col: 1,
                },
                endCoordinate: {
                    row: 0,
                    col: 1,
                },
                orientation: 'vse',
            },
        },
    ]);

    const toggleShowMenuPopUpInVisible = () => {
        playSound(clickAudio);
        console.log("Setting Pop Up InVisible....");

        setShowMenuPopUp((prev) => !prev);
    };


    const toggleShowLevelsMenuPopUpInVisible = () => {
        playSound(clickAudio);

        console.log("Setting Pop Up InVisible....");

        setShowLevelsMenuPopUp((prev) => !prev);
    };

    const toggleShowHelpPopUp = () => {
        playSound(clickAudio);
        
        setShowHelpPopUp(prev => !prev);
    };
    
    const toggleShowGameWonPopUp = () => {
        playSound(clickAudio);

        setShowGameWonPopUp((prev) => !prev);
    }

    const [gameGrid, setGameGrid] = useState([
        ['s', 's', '0', 'H'],
        ['S', 'S', '0', '0'],
    ]);

    const [sofaStartPosition, setSofaStartPosition] = useState({
        startCoordinate: {
            row: 0,
            col: 0,
        },
        endCoordinate: {
            row: 0,
            col: 1,
        },
        orientation: 'hse',
    });

    const [sofaDestinationPosition, setSofaDestinationPosition] = useState({
        startCoordinate: {
            row: 0,
            col: 0,
        },
        endCoordinate: {
            row: 0,
            col: 1,
        },
        orientation: 'hse',
    });

    const [sofaCurrentPosition, setSofaCurrentPosition] = useState({
        startCoordinate: {
            row: 1,
            col: 2,
        },
        endCoordinate: {
            row: 1,
            col: 3,
        },
        orientation: 'hse',
    });

    const [gameLevelInfo, setGameLevelInfo] = useState({
        number: '0',
        sofa: {
            startCoordinate: {
                row: 0,
                col: 0,
            },
            endCoordinate: {
                row: 0,
                col: 1,
            },
            orientation: 'hse',
        },
        grid: [
            ['s', 's', '0', '0', '0'],
            ['0', 'H', '0', '0', 'H'],
            ['0', 'H', '0', 'H', 'H'],
            ['0', 'H', '0', '0', 'H'],
            ['0', '0', '0', 'S', 'S'],
        ],
        minMoves: 8,
    });

    const [gameLevelPassed, setGameLevelPassed] = useState(false);
    const [moves, setMoves] = useState({
        lastMoveType: 'forward',
        sofaPrevPosition: {
            startCoordinate: {
                row: 0,
                col: 0,
            },
            endCoordinate: {
                row: 0,
                col: 1,
            },
            orientation: 'hse',
        },
        totalMoves: 0,
    });


    const fetchGrid = async () => {
        playSound(gameStartAudio);

        console.log("Fetching Game Grid on Load....... Starting");


        let levelNumber;

        let savedGameInfo = localStorage.getItem("moveSofaGameInfo");
        console.log(savedGameInfo);

        savedGameInfo = JSON.parse(savedGameInfo);
        if (savedGameInfo === null || savedGameInfo === undefined) {
            levelNumber = (await startGame()).number;
        }
        else {
            // Considering That we saves passed levels into the array of level info's object
            /** 
             * Level Info Object will look like
                {
                    number: gameLevelInfo.number,
                    state: moves.totalMoves > gameLevelInfo.minMoves ? "passed" : "passedBest",
                }
            */

            let levelObject = savedGameInfo.find(level => level.state === "attempting");
            levelNumber = levelObject ? levelObject.number : 0;
        }

        console.log("Fetching Game Grid on Load....... for level ", levelNumber);

        await moveToNewLevel(levelNumber);

    };

    const resetGameToIntialStates = async () => {
        setGameGrid((prev) => {
            return [
                ['s', 's', '0', 'H'],
                ['S', 'S', '0', '0'],
            ];
        });

        setGameLevelInfo((prev) => {
            return {
                number: '0',
                sofa: {
                    startCoordinate: {
                        row: 0,
                        col: 0,
                    },
                    endCoordinate: {
                        row: 0,
                        col: 1,
                    },
                    orientation: 'hse',
                },
                grid: [
                    ['s', 's', '0', '0', '0'],
                    ['0', 'H', '0', '0', 'H'],
                    ['0', 'H', '0', 'H', 'H'],
                    ['0', 'H', '0', '0', 'H'],
                    ['0', '0', '0', 'S', 'S'],
                ],
                minMoves: 8,
            };
        });

        setGameLevelPassed((prev) => {
            return false;
        });


        setMoves((prev) => {
            return {
                lastMoveType: 'forward',
                totalMoves: 0,
            };
        });

        // Closing All Pop Ups
        setShowMenuPopUp((prev) => {
            return false;
        });

        setShowLevelsMenuPopUp((prev) => {
            return false;
        });

        setShowHelpPopUp((prev) => {
            return false;
        });

        setShowGameWonPopUp((prev) => {
            return false;
        })

    };

    const getLevelInfo = async (levelNumber) => {
        // Make Sure Level Getting is done properly as our code is getting levels from hardcoded levels as of now 
        let levelInfo = await levels[levelNumber]; // Await is here for just demonstration purpose assuming level info is coming up from API

        return levelInfo;
    };

    // Move To new Level
    const moveToNewLevel = async (levelNumber) => {
        playSound(gameStartAudio);

        await resetGameToIntialStates();

        let prevMoveSofaInfo = localStorage.getItem("moveSofaGameInfo");
        prevMoveSofaInfo = JSON.parse(prevMoveSofaInfo);

        let newMoveSofaInfo = prevMoveSofaInfo.map((levelInfo) => {
            // If Already Passed Level Then Put it as it is
            if (levelInfo.number === levelNumber && levelInfo.state === "locked") {

                return {
                    number: levelNumber,
                    state: "attempting",
                };
            }

            return levelInfo;
        });

        saveLevelsInfoToLocalStorage(newMoveSofaInfo);

        let levelInfo = await getLevelInfo(levelNumber % prevMoveSofaInfo.length);
        let newGrid = levelInfo.grid;

        // Find Sofa Details
        let sofaInfo = levelInfo.sofa;

        let newMoves = {
            lastMoveType: 'forward',
            sofaPrevPosition: sofaInfo,
            totalMoves: 0,
        };


        console.log("From the MoveToNewLevel() going to find possible moves: ", newGrid);

        let newPossibleMoves = await findPossibleMovesForSofa(newGrid, sofaInfo);

        // Find Sofa Destination Info
        let newSofaDestination = {
            startCoordinate: {
                row: -1,
                col: -1,
            },
            endCoordinate: {
                row: -1,
                col: -1,
            },
        };
        let startingCoordinate = {
            row: 0,
            col: 0,
        };
        let endingCoordinate = {
            row: 0,
            col: 0,
        };



        for (let row = 0; row < newGrid.length; row++) {
            for (let col = 0; col < newGrid[0].length; col++) {
                if (newGrid[row][col] === 'S') {
                    // Either Sofa will be s then s means ss
                    // Or Sofa will be s down s means s
                    //                                s

                    startingCoordinate.row = row;
                    startingCoordinate.col = col;

                    if (newGrid[row][col + 1] === 'S') {
                        endingCoordinate.row = row;
                        endingCoordinate.col = col + 1;
                    }
                    else if (newGrid[row + 1][col] === 'S') {
                        endingCoordinate.row = row + 1;
                        endingCoordinate.col = col;
                    }
                    else {
                        // Depicting Invalid Input Test Case For ss type sofa
                        endingCoordinate.row = -1;
                        endingCoordinate.col = -1;
                    }

                    newSofaDestination.startCoordinate = startingCoordinate;
                    newSofaDestination.endCoordinate = endingCoordinate;

                    break;
                }
            }

            if (newSofaDestination.startCoordinate.row !== -1) {
                break;
            }
        }

        setSofaStartPosition(sofaInfo);
        setSofaDestinationPosition(newSofaDestination);
        setGameLevelInfo(levelInfo);
        setGameGrid(newGrid);
        setGameLevelPassed(false);
        setMoves(newMoves);
        setSofaCurrentPosition(sofaInfo);
        setGamePossibleMoves(newPossibleMoves);

        console.log("At the Starting Got Possible Moves: ", newPossibleMoves);

    };


    const startGame = async () => {
        // In the starting put all levels as locked
        const allLevels = await levels;

        let newMoveSofaGameInfo = allLevels.map((level) => {
            return {
                number: level.number,
                state: "locked",
            }
        });
        newMoveSofaGameInfo[0].state = "attempting";

        saveLevelsInfoToLocalStorage(newMoveSofaGameInfo);

        const startingLevelInfo = await getLevelInfo(0);
        return startingLevelInfo;
    };


    const restartGame = async (levelNumber) => {
        console.log("Restarting level................");
        await sleep(gameSpeed / 4);

        // Complete It
        await moveToNewLevel(levelNumber);
    };


    const moveSofa = async (moveType) => {
        playSound(pushingSofaAudio);
        
        console.log("Clicked on the move type ", moveType);

        const totalMovesTaken = moves.totalMoves + 1;
        const moveName = moveType;
        const beforeTakingMoveSofaPosition = sofaCurrentPosition;
        const afterTakingMoveSofaPosition = gamePossibleMoves.find((possibleMove) => possibleMove.type === moveName).afterMoveSofaPosition;

        setGamePossibleMoves((prev) => {
            let newPossibleMoves = prev.map((move) => {
                return {
                    ...move, isPossible: false,
                };
            });

            return newPossibleMoves;
        });


        console.log("Got The afterTakingMoveSofaPosition position for sofa: ", afterTakingMoveSofaPosition);


        // Take Move
        setMoves((prev) => {
            let newMoves = prev;
            newMoves.lastMoveType = moveName;
            newMoves.totalMoves = totalMovesTaken;
            newMoves.sofaPrevPosition = beforeTakingMoveSofaPosition;

            return newMoves;
        });

        console.log("Setted moves: ", moves);


        setSofaCurrentPosition((prev) => {

            let newSofaCurrentPosition = prev;
            newSofaCurrentPosition = afterTakingMoveSofaPosition;
            console.log("Got The After Move position for sofa: ", newSofaCurrentPosition);


            return newSofaCurrentPosition;
        });

        console.log("Setted Sofa Current Position: ", sofaCurrentPosition);



        // Check If Reached Destination
        let isSofaMoved = false;
        console.log("Checking If Passed Level or Not: ", sofaStartPosition);
        console.log(sofaDestinationPosition);
        console.log("Sofa Current position is:", sofaCurrentPosition);



        if (
            (
                afterTakingMoveSofaPosition.startCoordinate.row === sofaDestinationPosition.startCoordinate.row

                && afterTakingMoveSofaPosition.startCoordinate.col === sofaDestinationPosition.startCoordinate.col

                && afterTakingMoveSofaPosition.endCoordinate.row === sofaDestinationPosition.endCoordinate.row

                && afterTakingMoveSofaPosition.endCoordinate.col === sofaDestinationPosition.endCoordinate.col)

            ||

            (afterTakingMoveSofaPosition.startCoordinate.row === sofaDestinationPosition.endCoordinate.row

                && afterTakingMoveSofaPosition.startCoordinate.col === sofaDestinationPosition.endCoordinate.col

                && afterTakingMoveSofaPosition.endCoordinate.row === sofaDestinationPosition.startCoordinate.row

                && afterTakingMoveSofaPosition.endCoordinate.col === sofaDestinationPosition.startCoordinate.col)

        ) {
            isSofaMoved = true;
        }

        // Wait For Move Animation to complete
        await sleep(gameSpeed / 2);


        console.log("After Sleep got Here....");


        console.log("Checking for if level passed....");
        if (isSofaMoved === true) {

            setGameLevelPassed((prev) => {
                let newGameLevelPassed = prev;
                newGameLevelPassed = isSofaMoved;
                return newGameLevelPassed;
            });

            // If Passed Level Then Return
            return;
        }

        let newPossibleMoves = await findPossibleMovesForSofa(gameGrid, afterTakingMoveSofaPosition);

        // If Not Passed Level then find possible moves for Sofa Current Position
        setGamePossibleMoves((prev) => {
            let newGamePossibleMoves = prev;
            newGamePossibleMoves = newPossibleMoves;
            return newGamePossibleMoves;
        });
    };

    const saveLevelsInfoToLocalStorage = async (newMoveSofaGameInfo) => {
        // Update Game Levels
        setGameLevels(newMoveSofaGameInfo);

        newMoveSofaGameInfo = JSON.stringify(newMoveSofaGameInfo);

        localStorage.setItem("moveSofaGameInfo", newMoveSofaGameInfo);
    };

    useEffect(() => {

        const saveGame = async () => {
            // Get Saved Levels from the Local Storage
            let savedMoveSofaGameInfo = localStorage.getItem("moveSofaGameInfo");
            savedMoveSofaGameInfo = JSON.parse(savedMoveSofaGameInfo);

            // Update with current level details
            let newMoveSofaGameInfo = savedMoveSofaGameInfo.map((levelInfo) => {
                if (levelInfo.number === gameLevelInfo.number && levelInfo.state !== "passedBest") {
                    return {
                        number: gameLevelInfo.number,
                        state: moves.totalMoves > gameLevelInfo.minMoves ? "passed" : "passedBest",
                    }
                }

                return levelInfo;
            });

            console.log("Setting Games Levels as: ", newMoveSofaGameInfo);

            saveLevelsInfoToLocalStorage(newMoveSofaGameInfo);

            playSound(winningAudio);
            // Show Game Passed Pop Up
            setShowGameWonPopUp((prev) => {
                return true;
            })

        };

        if (gameLevelPassed === true) {
            saveGame();
        }

    }, [gameLevelPassed]);

    useEffect(() => {
        fetchGrid();
    }, []);


    return <>
        <Layout>
            {/* Menu Pop Up - Starts Here */}
            {
                showMenuPopUp ? <>
                    <PopUp
                        handleCloseButtonClick={toggleShowMenuPopUpInVisible}
                    >
                        <div className="w-full flex flex-col items-center gap-4 text-white">
                            <ul id="move-sofa-game-menu" className="w-full flex flex-col gap-8">
                                <li className="move-sofa-menu-item" onClick={() => {
                                    restartGame(gameLevelInfo.number);
                                }}>
                                    Restart
                                </li>
                                <li
                                    onClick={() => {
                                        toggleShowLevelsMenuPopUpInVisible();
                                    }}
                                    className="move-sofa-menu-item">Levels</li>
                                <li
                                    onClick={() => {
                                        toggleShowHelpPopUp();
                                    }}
                                    className="move-sofa-menu-item">Help</li>
                                <li
                                    onClick={() => {
                                        playSound(clickAudio);
                                        setTimeout(() => {
                                            navigate("/games");
                                        }, gameSpeed / 4);
                                    }}
                                    className="move-sofa-menu-item">Quit</li>
                            </ul>
                        </div>
                    </PopUp>
                </> : <></>
            }
            {/* Menu Pop Up - Ends Here */}

            {/* Levels Menu Pop Up - Starts Here */}
            {
                showLevelsMenuPopUp ? <>
                    <PopUp
                        handleCloseButtonClick={toggleShowLevelsMenuPopUpInVisible}
                    >
                        <div className="w-full flex flex-row flex-wrap gap-8 text-white">
                            {gameLevels ? gameLevels.map((level, levelIndex) => {
                                return <div
                                    key={`move-sofa-game-level-${levelIndex}`}
                                    onClick={() => {
                                        if (level.state !== "locked") {
                                            setTimeout(() => {
                                                moveToNewLevel(level.number);
                                            }, gameSpeed / 4);
                                        }
                                    }}
                                    className={`move-sofa-game-level-${level.state} cursor-pointer flex items-center justify-center rounded-full w-24 h-24`}>
                                    <div className="w-full h-full flex items-center justify-center text-lg">
                                        {level.number}
                                    </div>
                                </div>
                            }) : <>
                                <div className="text-xl">No Levels</div>
                            </>}
                        </div>
                    </PopUp>
                </> : <></>
            }
            {/* Levels Menu Pop Up - Ends Here */}


            {/* Help Pop Up - Starts Here */}
            {showHelpPopUp ? <>
                <PopUp
                    handleCloseButtonClick={toggleShowHelpPopUp}
                >
                    <div className="w-full flex flex-col gap-4 text-white">
                        <h2 className="text-4xl md:text-7xl font-bold text-center">
                            How To Play?
                        </h2>

                        <p className="text-lg md:text-2xl">
                            Hi Super Intelligent Friend 👋.
                            <br />
                            <br />
                            Your'e Given a Configuration of House where Sofa is Accidently Misplaced. Please help me to move Sofa to the Correct Destination.
                        </p>

                        <div id="move-sofa-game-controls-help-container" className="flex flex-col gap-4 max-w-fit text-white">

                            <h2 className="text-2xl md:text-4xl font-bold text-center my-4">
                                Sofa Can Take Moves:
                            </h2>

                            <div className="move-sofa-game-control-move-help">
                                <div className="move-sofa-game-control-button">F</div>
                                <div className="text-lg md:text-2xl">Forward</div>
                            </div>

                            <div className="move-sofa-game-control-move-help">
                                <div className="move-sofa-game-control-button">B</div>
                                <div className="text-lg md:text-2xl">Backward</div>
                            </div>

                            <div className="move-sofa-game-control-move-help">
                                <div className="move-sofa-game-control-button">U</div>
                                <div className="text-lg md:text-2xl">Up</div>
                            </div>

                            <div className="move-sofa-game-control-move-help">
                                <div className="move-sofa-game-control-button">D</div>
                                <div className="text-lg md:text-2xl">Down</div>
                            </div>

                            <div className="move-sofa-game-control-move-help">
                                <div className="move-sofa-game-control-button">RDL</div>
                                <div className="text-lg md:text-2xl">Rotate Down Left</div>
                            </div>

                            <div className="move-sofa-game-control-move-help">
                                <div className="move-sofa-game-control-button">RDR</div>
                                <div className="text-lg md:text-2xl">Rotate Down Right</div>
                            </div>

                            <div className="move-sofa-game-control-move-help">
                                <div className="move-sofa-game-control-button">RUL</div>
                                <div className="text-lg md:text-2xl">Rotate Up Left</div>
                            </div>

                            <div className="move-sofa-game-control-move-help">
                                <div className="move-sofa-game-control-button">RUR</div>
                                <div className="text-lg md:text-2xl">Rotate Up Right</div>
                            </div>

                        </div>
                    </div>
                </PopUp>
            </> : <></>}
            {/* Help Pop Up - Ends Here */}

            {/* Game Won Pop Up - Starts Here */}
            {
                showGameWonPopUp ? <>
                    <PopUp
                        handleCloseButtonClick={toggleShowGameWonPopUp}
                    >
                        <div className="w-full flex flex-col gap-4 text-white">
                            <h2 className="text-4xl md:text-7xl font-bold text-center">
                                Congrats! 🎉
                                <br />
                                <br />
                            </h2>

                            <h3 className="text-3xl md:text-6xl">
                                You {`${moves.totalMoves > gameLevelInfo.minMoves ? "Passed" : "Best Passed"}`} Level Successfully 🥳
                            </h3>

                            <p className="text-lg md:text-2xl">
                                You took {moves.totalMoves} Moves and Our solution takes {gameLevelInfo.minMoves} Moves.
                                <br />
                                <br />
                            </p>

                            <div className="move-sofa-game-won-pop-up-controls flex flex-row flex-nowrap justify-between">
                                <button
                                    onClick={() => {
                                        restartGame(gameLevelInfo.number);
                                    }}
                                    className="cursor-pointer px-8 py-4 text-xl md:text-3xl font-semibold border border-1 border-[#2b7ec7cb] rounded-xl hover:bg-[#2b7ec7cb] hover:text-black">
                                    Restart
                                </button>

                                <button
                                    onClick={() => {
                                        moveToNewLevel(gameLevelInfo.number + 1);
                                    }}
                                    className="cursor-pointer px-8 py-4 text-xl md:text-3xl font-semibold border border-1 border-[#8cfc42d5] rounded-xl hover:bg-[#8cfc42d5] hover:text-black">
                                    Next
                                </button>
                            </div>

                        </div>
                    </PopUp>
                </> : <></>
            }
            {/* Game Won Pop Up - Ends Here */}



            <div id="move-sofa-game-settings-container" className="text-white relative flex flex-row justify-between">
                <div className="hidden">
                </div>

                <div className="text-2xl font-semibold absolute bottom-0 left-0 mb-8">
                    Level {gameLevelInfo.number}
                </div>

                <div onClick={() => {
                    toggleShowMenuPopUpInVisible();
                }} id="move-sofa-game-settings" className="cursor-pointer absolute bottom-0 right-0">
                    <img src={settingsIcon} alt="settings icon" className="w-8" />
                </div>
            </div>

            <div id="move-sofa-game-container" className="w-full h-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 gap-4 md:grid-cols-2">


                <div id="move-sofa-game-grid-container" className="overflow-scroll relative flex flex-col items-center justify-center">


                    {/* Game Grid Mask - Starts Here */}
                    {gameGrid ?
                        <div id="move-sofa-game-grid-mask" className="border border-4 border-transparent rouneded-xl absolute top-0 left-0 z-[10000] min-w-fit max-w-fit">

                            {gameGrid.map((gameRow, gameRowIndex) => {
                                return <div
                                    key={`move-sofa-game-grid-mask-row-${gameRowIndex}`}
                                    id={`move-sofa-game-grid-mask-row-${gameRowIndex}`}
                                    style={{
                                        display: "grid",
                                        gridTemplateRows: "1fr",
                                        gridTemplateColumns: `repeat(${gameGrid[gameRowIndex].length}, 1fr)`,
                                    }}>
                                    {gameRow.map((gameElement, gameElementIndex) => {
                                        let keyString = `move-sofa-game-grid-mask-row-${gameRowIndex}-col-${gameElementIndex}`;
                                        let classString;

                                        let row = gameRowIndex;
                                        let col = gameElementIndex;

                                        let playerStartedMovingSofa = moves.totalMoves > 0 ? true : false;

                                        if (playerStartedMovingSofa === true && row === moves.sofaPrevPosition.startCoordinate.row && col === moves.sofaPrevPosition.startCoordinate.col) {
                                            classString = `cell move-sofa-game-sofa-container ${moves.sofaPrevPosition.orientation}-move-${moves.lastMoveType}`;
                                        }
                                        else {
                                            classString = `cell`;
                                        }

                                        return <div key={keyString}
                                            className={classString}
                                        >
                                            {((playerStartedMovingSofa === true && row === moves.sofaPrevPosition.startCoordinate.row && col === moves.sofaPrevPosition.startCoordinate.col)) ?
                                                <>
                                                    <div className="cell move-sofa-game-sofa-start-container"></div>
                                                    <div className="cell move-sofa-game-sofa-end-container"></div>
                                                </>
                                                : <></>}
                                        </div>
                                    })}
                                </div>
                            })}
                        </div>
                        : <></>}
                    {/* Game Grid Mask - Ends Here */}


                    {/* Game Grid - Starts Here */}
                    {
                        gameGrid ?
                            <div id="move-sofa-game-grid" className="border border-4 border-[#FF6900] rounded-xl absolute top-0 left-0 max-w-fit m-auto" >
                                {gameGrid.map((gameRow, gameRowIndex) => {
                                    return <div
                                        key={`move-sofa-game-grid-row-${gameRowIndex}`}
                                        id={`move-sofa-game-grid-row-${gameRowIndex}`}
                                        style={{
                                            display: "grid",
                                            gridTemplateRows: "1fr",
                                            gridTemplateColumns: `repeat(${gameGrid[gameRowIndex].length}, 1fr)`,
                                        }}>
                                        {gameRow.map((gameElement, gameElementIndex) => {
                                            let keyString = `move-sofa-game-grid-row-${gameRowIndex}-col-${gameElementIndex}`;
                                            let classString;

                                            let row = gameRowIndex;
                                            let col = gameElementIndex;

                                            let playerStartedMovingSofa = moves.totalMoves > 0 ? true : false;

                                            if (row === sofaStartPosition.startCoordinate.row && col === sofaStartPosition.startCoordinate.col) {
                                                classString = `cell move-sofa-game-sofa-container opacity-[0.8] ${sofaStartPosition.orientation}`;
                                            }
                                            else if (playerStartedMovingSofa === true && row === sofaCurrentPosition.startCoordinate.row && col === sofaCurrentPosition.startCoordinate.col) {
                                                classString = `cell move-sofa-game-sofa-container opacity-[0.4] ${sofaCurrentPosition.orientation}`;
                                            }
                                            else if (gameElement === 'S') {
                                                classString = `cell move-sofa-game-sofa-desired-place-cell`;
                                            }
                                            else if (gameElement === 'H') {
                                                classString = `cell move-sofa-game-house-things-cell`;
                                            }
                                            else {
                                                classString = `cell move-sofa-game-empty-cell`;
                                            }

                                            return <div key={keyString}
                                                className={classString}
                                            >
                                                {(row === sofaStartPosition.startCoordinate.row && col === sofaStartPosition.startCoordinate.col) || (playerStartedMovingSofa === true && row === sofaCurrentPosition.startCoordinate.row && col === sofaCurrentPosition.startCoordinate.col) ?
                                                    <>
                                                        <div className="cell move-sofa-game-sofa-start-container"></div>
                                                        <div className="cell move-sofa-game-sofa-end-container"></div>
                                                    </>
                                                    : <></>}
                                            </div>
                                        })}
                                    </div>
                                })}
                            </div>
                            :
                            <></>
                    }
                    {/* Game Grid - Ends Here */}


                </div>


                <div id="move-sofa-game-controls-container" className="max-w-fit m-auto text-white">

                    {gamePossibleMoves ? <>
                        {gamePossibleMoves.map(({ type, displayText, isPossible }, possibleMoveIndex) => {
                            return <div
                                key={possibleMoveIndex}
                                id={`move-sofa-game-control-button-${type}`}
                                onClick={() => {
                                    if (isPossible === true) {
                                        moveSofa(`${type}`)
                                    }
                                }}
                                className={`move-sofa-game-control-button ${isPossible === true ? "opacity-[1]" : "opacity-[0.2]"}`}
                            >
                                {displayText}
                            </div>

                        })}
                    </> : <></>}
                </div>

            </div>
        </Layout>
    </>;
};

export default MoveSofaGame;