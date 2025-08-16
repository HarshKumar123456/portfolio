import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import placeholderImage from "../../../assets/images/placeholderImage.png";
import popBoxMusic from "../../../assets/audio/bubble-wrap-pop.mp3";
import restartMusic from "../../../assets/audio/tile-break.mp3";

import "./NimGame.css";

const NimGame = () => {

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    // First of All Make An Array Which maintains boxes needed to pop on clicking refresh or Start of the button 
    const [gameArrayBoxes, setGameArrayBoxes] = useState([
        {
            id: 1,
            popped: false,
        },
    ]);

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [dialogText, setDialogText] = useState("Starting Game....");
    const [passButtonActive, setPassButtonActive] = useState(false);
    const [isUserTurn, setIsUserTurn] = useState(false);

    const playSound = (src) => {
        const sound = new Audio(src);
        sound.currentTime = 0;
        sound.volume = 0.5;
        sound.play();
    };


    const showRestartingGameAndDisablePassButton = () => {
        setDialogText("Restarting Game....");
        setPassButtonActive(!passButtonActive);
    };


    const popBox = async (boxIndex) => {

        const newGameArrayBoxes = gameArrayBoxes.map((box, index) => {
            if (index === boxIndex) {
                playSound(popBoxMusic);
                console.log("Popped Box number", boxIndex);

                return {
                    ...box,
                    popped: true
                };
            }

            return box;
        });

        // setGameArrayBoxes((prev) => {
        //     const newArray = prev;
        //     if (newArray[boxIndex].popped === false) {
        //         playSound(popBoxMusic);
        //         console.log("Popped Box number", boxIndex);

        //        newArray[boxIndex].popped = true;
        //     }

        //     return newArray;
        // });

        setGameArrayBoxes(newGameArrayBoxes);

        // await sleep(10);
    };

    // Complete this function
    const popAvailableBoxesOneByOne = async () => {
        let gameStarted = JSON.parse(localStorage.getItem("isGameStartedAtFirstTime"));
        console.log("Inside One by one pop......", gameStarted, " and ", isGameStarted);


        // words.filter((word) => word.length > 6);
        while (gameStarted === false) {
            console.log("I am in loop and this is: ", gameStarted, " and ", JSON.parse(localStorage.getItem("isGameStartedAtFirstTime")));

            // await sleep(2000); // pauses for 2 seconds

            let randomBoxIndex = gameArrayBoxes.findIndex(item => item.popped === false);
            popBox(randomBoxIndex);
            console.log("After 0.2s ");
            gameStarted = JSON.parse(localStorage.getItem("isGameStartedAtFirstTime"));
            console.log("Updated and now is: ", gameStarted, " and ", JSON.parse(localStorage.getItem("isGameStartedAtFirstTime")));

        }

    };

    const randomlyChooseWhoPlayFirst = () => {
        const randomNumber = Math.round(400 * Math.random() * 1000 * Math.random());

        if (randomNumber % 2 === 0) {
            setIsUserTurn(true);
            setDialogText("Your Turn");
        }
        else {
            console.log("Random Number is: ", randomNumber);
            setDialogText("Computer's Turn");
            setIsUserTurn(false);
        }
    };


    const populateArray = async () => {
        const randomNumber = Math.round(50 * Math.random());
        const numberOfBoxes = (randomNumber > 10) ? randomNumber : 10;

        let gameArray = [];
        for (let index = 0; index < numberOfBoxes; index++) {

            gameArray.push({
                id: `box-${index}`,
                popped: false,
            });
        }

        return gameArray;
    };

    const startGame = async () => {

        console.log("Bro I am in StartGame().........");


        const isGameStartedAtFirstTime = JSON.parse(localStorage.getItem("isGameStartedAtFirstTime"));
        console.log(isGameStartedAtFirstTime);
        let game = JSON.parse(localStorage.getItem("gameArray"));
        console.log(game);



        if (isGameStartedAtFirstTime === true) {
            // Get The Saved Game Array And Show to user
            const savedGame = JSON.parse(localStorage.getItem("gameArray"));
            const userChance = JSON.parse(localStorage.getItem("isUserTurn"));

            console.log("Saved Game and userchance: ", savedGame, userChance);


            setIsUserTurn(userChance);
            setGameArrayBoxes(savedGame);
            setIsGameStarted(true);
            if (userChance === true) {
                setDialogText("Your Turn");
            }
            else {
                setDialogText("Computer's Turn");
            }
        }
        else {
            console.log("Inside else of StartGame()");

            setDialogText("Starting Game....");
            const gameArray = await populateArray();

            setDialogText("Game Started....");

            setTimeout(() => {

                setGameArrayBoxes(gameArray);
                setIsGameStarted(true);
                randomlyChooseWhoPlayFirst();

            }, 2000);

            // localStorage.setItem("isGameStartedAtFirstTime", JSON.stringify(true));
            // localStorage.setItem("gameArray", JSON.stringify(gameArray));
            // localStorage.setItem("isUserTurn", JSON.stringify(isUserTurn));
        }


    };




    const restartGame = async () => {
        // const newGameArrayBoxes = await populateArray(); // This will assign new Array and return the new array with unpopped state
        // setGameArrayBoxes(newGameArrayBoxes);
        // randomlyChooseWhoPlayFirst();

        setIsGameStarted(false);
        localStorage.setItem("isGameStartedAtFirstTime", JSON.stringify(false));

        // setTimeout(() => {
        //     console.log("After 0.5s ", isGameStarted);
        //     popAvailableBoxesOneByOne();

        // }, 500);

        const currentStateOfBoxes = gameArrayBoxes;

        for (let index = 0; index < currentStateOfBoxes.length; index++) {
           await popBox(index);
           await sleep(100);
        }

        await sleep(4000);


        setTimeout(() => {
            console.log("After 4s");
            startGame();

        }, 4000);
    };

    const handleRestartButtonClick = async () => {
        playSound(restartMusic);
        showRestartingGameAndDisablePassButton();

        restartGame();
    };


    const saveGame = () => {
        console.log("Saving the Game...........");

        localStorage.setItem("gameArray", JSON.stringify(gameArrayBoxes));
        localStorage.setItem("isGameStartedAtFirstTime", JSON.stringify(isGameStarted));
        localStorage.setItem("isUserTurn", JSON.stringify(isUserTurn));
    };


    // Store the array to the localhost storage so that user can access his/her saved game 
    // After creating array update the state 
    // Handle Click on the box pop it update the state of array
    // Save the Updated state to the localhost 
    // Check Winner and declare Winner by a Pop Up And give option to restart or go back to main game menu 
    // If no winner then pass chance to computer
    // Before Passing chance to computer let the popped boxes out of the display and un-popped boxes to come up so that user don't need to scroll
    // Let the Computer run its chance
    // Handle Click from the computer on the boxes pop it update the state of array 
    // Save the Updated state to the localhost 
    // Check Winner and declare Winner by a Pop Up And give option to restart or go back to main game menu 
    // If no winner then pass chance to user

    const handleGameBoxClick = (boxIndex, { id, popped }) => {
        if (popped === true) {
            return;
        }

        if (popped === false) {
            popBox(boxIndex);
            return;
        }

        console.log("Something wrong with this box state: ", id, popped);

    };


    useEffect(() => {
        // Initially Restart The Game

        // const isGameStartedAtFirstTime = JSON.parse(localStorage.getItem("isGameStartedAtFirstTime"));
        // console.log("Bhai in Use effect ", isGameStartedAtFirstTime);

        // if (isGameStartedAtFirstTime === null || isGameStartedAtFirstTime === false) {
        // }

        const init = async () => {
            await startGame();
        };

        init();
    }, []);


    useEffect(() => {

        // As soon as Game Array Box changes start saving the state currently in the localstorage
        if (isGameStarted === true) {
            saveGame();
        }

    }, [gameArrayBoxes, isUserTurn]);

    return <>
        <Layout>
            <div className="controls-bar absolute top-0 w-[90%] md:w-[94%] text-white flex justify-between items-center">

                <div className="title-box">
                    <h1 className="text-4xl font-bold">
                        Nim Game
                    </h1>
                </div>


                <div className="exit-box flex gap-4">
                    <img className="w-10 h-10" src={placeholderImage} alt="Restart Icon" onClick={handleRestartButtonClick} />
                    <img className="w-10 h-10" src={placeholderImage} alt="Exit Icon" />
                </div>

            </div>

            <div className="playground p-4 relative text-white rounded-xl border border-2 border-red-400 h-full">
                {/* Here We will put restart button and all */}
                <div className="whos-chance-box">
                    <p className="text-center text-lg font-semibold tracking-widest">
                        {dialogText}
                    </p>
                </div>

                <div className="help-box w-full absolute left-2 top-4 flex justify-between border border-2 border-violet-400">
                    <div className="score-info-box flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <div className="high-score text-center px-4">
                            <h2 className="text-lg font-bold">
                                High Score
                            </h2>
                            <p className="text-lg">
                                2400
                            </p>
                        </div>

                        <div className="score text-center px-4">
                            <h2 className="text-lg font-bold">
                                Score
                            </h2>
                            <p className="text-lg">
                                2400
                            </p>
                        </div>
                    </div>

                    <img className="w-16 h-16 rounded-full" src={placeholderImage} alt="help ball" />

                </div>

                <div className="main-playground h-full my-8 pt-16 border border-2 border-green-400 ">
                    <div className="h-full w-full p-4">
                        <div id="nim-game-box-container" className="h-fit w-full flex flex-wrap items-center justify-center gap-4">
                            {gameArrayBoxes && gameArrayBoxes.map((item, index) => {
                                return <div
                                    key={item.id}
                                    popped={`${item.popped}`}
                                    onClick={() => {
                                        handleGameBoxClick(index, item);
                                    }}
                                    className="nim-game-box bg-red-400 rounded-lg h-16 lg:h-32 w-16 lg:w-32">
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="high-score-help-score-box flex justify-between">

            </div>

        </Layout>
    </>;
};

export default NimGame;