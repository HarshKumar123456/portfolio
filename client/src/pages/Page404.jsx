import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import clickSound from "../assets/audio/woosh.mp3";


const Page404 = () => {

    const navigate = useNavigate();

    const playSound = (src) => {
        const sound = new Audio(src);
        sound.currentTime = 0;
        sound.volume = 0.5; // If Volume change feature is introduced then do it from here
        sound.play();
    };

    const handleBackToHomeClick = (soundSrc) => {
        playSound(soundSrc);
        setTimeout(() => {
            navigate("/");
        }, 800); // Delay to allow audio to play
    };


    return <>
        <Layout>

            <div className="w-full h-full flex flex-col justify-center items-center text-white text-center text-xl font-bold ">
                <h1 className="text-5xl font-bold">404</h1>
                <p className="">
                    Page Not Found
                </p>
                <button className="cursor-pointer mt-8 px-8 py-2 border border-1 border-[red] hover:bg-[#555e69] active:bg-[#363c43] rounded-full" onClick={() => {
                    handleBackToHomeClick(clickSound);
                }}>
                    Go to Home
                </button>
            </div>

        </Layout>
    </>;
};

export default Page404;