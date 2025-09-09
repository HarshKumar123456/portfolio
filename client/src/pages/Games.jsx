import React from "react";
import Layout from "../components/Layout/Layout";

import placeholderImage from "../assets/images/placeholderImage.png";
import moveSofaGameIcon from "../assets/images/icons/move-sofa-game-icon.png";
import { Link } from "react-router-dom";

const Games = () => {

    const games = [
        {
            id: "moveSofaGame",
            title: "Move Sofa Game",
            imageURL: moveSofaGameIcon,
            gameURL: "/games/move-sofa-game",
        },

        
    ];


    return <>
        <Layout>
            <div className="p-4 rounded-3xl flex items-center justify-center">
                <div className="main-container-gradient p-4 rounded-3xl">

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-32 p-8 text-white text-center">

                        {games?.map(({ id, title, imageURL, gameURL }) => {
                            return <Link to={gameURL} key={id}>

                                <div className="img-and-text w-16 h-16 md:w-32 md:h-32 flex flex-col items-center justify-center">
                                    <img src={imageURL} alt="" className="w-16 h-16 md:w-32 md:h-32 object-contain" />

                                    <h2 className="text-lg mt-4 font-bold">{title}</h2>

                                </div>
                            </Link>;
                        })}

                    </div>

                </div>
            </div>

        </Layout>
    </>;
};


export default Games;