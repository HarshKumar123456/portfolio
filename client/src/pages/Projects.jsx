import React from "react";
import Layout from "../components/Layout/Layout";

import upiIcon from "../assets/images/icons/upi-icon.png";
import githubIcon from "../assets/images/icons/github-icon.png";
import internetIcon from "../assets/images/icons/internet-icon.png";
import buyMeACoffeeIcon from "../assets/images/icons/buy-me-a-coffee-icon.png";
import patreonIcon from "../assets/images/icons/patreon-icon.png";

import allSparkLandingPagePhoto from "../assets/images/allspark-landing-page.png";
import yumrecipeLandingPagePhoto from "../assets/images/yumrecipe-landing-page.png"

import placeholderImage from "../assets/images/placeholderImage.png";
import { Link } from "react-router-dom";

const Projects = () => {

    return <>
        <Layout>
            <div className="p-4 rounded-3xl flex flex-col items-center text-white">
                <div className="w-full text-white flex flex-col gap-2">

                    <h1 className="text-2xl lg:text-4xl font-bold">
                        Projects
                    </h1>

                </div>

                <div className="mt-8 lg:mt-16 px-4 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* AllSpark Project Details - Starts Here */}
                    <div className="transition-all duration-[0.4s] ease-in-out p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">

                        <div className="">

                            <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 border border-white/10">
                                <img
                                    className="object-cover w-full"
                                    src={allSparkLandingPagePhoto}
                                />
                            </div>
                            <h3 className="text-2xl font-bold">
                                AllSpark
                            </h3>
                            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                An Open Source, Self Hostable Online Coding Platform
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    MongoDB
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    Express.js
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    React.js
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    Node.js
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    WebSockets
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    Docker
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    Redis
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    Kafka
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    Git
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    GitHub
                                </span>

                            </div>

                        </div>



                        <div className="mt-8 lg:mt-16 grid grid-cols-2 gap-4">

                            <a href="https://github.com/HarshKumar123456/all-spark" target="blank" className="flex flex-row gap-4 items-center justify-center bg-white transition-all duration-[0.4s] ease-in-out hover:scale-[1.02] active:scale-[0.8] text-black rounded-xl px-2 py-4">

                                <img src={githubIcon} alt="github icon links to project repository" className="object-cover w-4 lg:w-8 rounded-full" />

                                <h3 className="text-base lg:text-xl font-semibold">
                                    View Code
                                </h3>

                            </a>

                            <a href="https://all-spark.dev" target="blank" className="flex flex-row gap-4 items-center justify-center bg-white transition-all duration-[0.4s] ease-in-out hover:scale-[1.02] active:scale-[0.8] text-black rounded-xl px-2 py-4">

                                <img src={internetIcon} alt="github icon links to project repository" className="object-cover w-4 lg:w-8 rounded-full" />

                                <h3 className="text-base lg:text-xl font-semibold">
                                    View Live
                                </h3>

                            </a>

                        </div>

                    </div>
                    {/* AllSpark Project Details - Ends Here */}


                    {/* YumRecipe Project Details - Starts Here */}
                    <div className="transition-all duration-[0.4s] ease-in-out p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">

                        <div className="">
                            <div className="w-full h-52 rounded-xl overflow-hidden mb-4 border border-white/10">
                                <img
                                    className="object-cover w-full"
                                    src={yumrecipeLandingPagePhoto}
                                />
                            </div>
                            <h3 className="text-2xl font-bold">
                                Yum Recipe
                            </h3>
                            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                A Recipe sharing Platform
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    MongoDB
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    Express.js
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    React.js
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    Node.js
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    Git
                                </span>
                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                    GitHub
                                </span>

                            </div>
                        </div>


                        <div className="mt-8 lg:mt-16 grid grid-cols-2 gap-4">

                            <a href="https://github.com/HarshKumar123456/yumrecipe" target="blank" className="flex flex-row gap-4 items-center justify-center bg-white transition-all duration-[0.4s] ease-in-out hover:scale-[1.02] active:scale-[0.8] text-black rounded-xl px-2 py-4">

                                <img src={githubIcon} alt="github icon links to project repository" className="object-cover w-4 lg:w-8 rounded-full" />

                                <h3 className="text-base lg:text-xl font-semibold">
                                    View Code
                                </h3>

                            </a>

                            <a href="https://yumrecipe-alpha.vercel.app" target="blank" className="flex flex-row gap-4 items-center justify-center bg-white transition-all duration-[0.4s] ease-in-out hover:scale-[1.02] active:scale-[0.8] text-black rounded-xl px-2 py-4">

                                <img src={internetIcon} alt="github icon links to project repository" className="object-cover w-4 lg:w-8 rounded-full" />

                                <h3 className="text-base lg:text-xl font-semibold">
                                    View Live
                                </h3>

                            </a>

                        </div>

                    </div>
                    {/* YumRecipe Project Details - Ends Here */}


                </div>


            </div>


        </Layout>
    </>;
};


export default Projects;