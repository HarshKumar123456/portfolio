import React from "react";
import Layout from "../components/Layout/Layout";

import upiIcon from "../assets/images/icons/upi-icon.png";
import githubIcon from "../assets/images/icons/github-icon.png";
import buyMeACoffeeIcon from "../assets/images/icons/buy-me-a-coffee-icon.png";
import patreonIcon from "../assets/images/icons/patreon-icon.png";

import placeholderImage from "../assets/images/placeholderImage.png";
import { Link } from "react-router-dom";

const SponsorMe = () => {

    return <>
        <Layout>
            <div className="p-4 rounded-3xl flex flex-col items-center text-white">
                <div className="w-full text-white flex flex-col gap-2">

                    <h1 className="text-4xl lg:text-7xl font-bold">
                        Thanks a lot!
                    </h1>
                    <h2 className="text-2xl lg:text-4xl">
                        Thank you so much for Sponsoring My Work
                    </h2>

                </div>

                <p className="mt-8 lg:mt-16 text-white text-xl lg:text-2xl font-semibold">
                    You can choose the below methods for Sponsoring my work
                </p>

                <div className="mt-8 lg:mt-16 px-4 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-8">




                    <a href="upi://pay?pa=7275589766@kotak811">
                        <div className="flex flex-row gap-4 items-center">

                            <img src={upiIcon} alt="icon" className="object-cover bg-white rounded-md w-8 lg:w-16" />
                            <h2 className="text-xl lg:text-4xl">
                                UPI No. : 7275589766
                            </h2>
                        </div>
                    </a>




                    <a href="https://github.com/sponsors/HarshKumar123456">
                        <div className="flex flex-row gap-4 items-center">

                            <img src={githubIcon} alt="icon" className="object-cover bg-white rounded-md w-8 lg:w-16" />
                            <h2 className="text-xl lg:text-4xl">
                                /harshkumar123456
                            </h2>

                        </div>
                    </a>





                    <a href="https://buymeacoffee.com/harshku007">
                        <div className="flex flex-row gap-4 items-center">

                            <img src={buyMeACoffeeIcon} alt="icon" className="object-cover bg-white rounded-md w-8 lg:w-16" />
                            <h2 className="text-xl lg:text-4xl">
                                /harshku007
                            </h2>
                        </div>
                    </a>




                    <a href="https://www.patreon.com/c/harshku007/membership">
                        <div className="flex flex-row gap-4 items-center">

                            <img src={patreonIcon} alt="icon" className="object-cover bg-white rounded-md w-8 lg:w-16" />
                            <h2 className="text-xl lg:text-4xl">
                                /harshku007
                            </h2>
                        </div>
                    </a>



                </div>


                <p className="mt-16 lg:mt-24 text-white text-xl">
                    Have something to discuss ? Connect @  <a href="mailto:harshkumar92200@gmail.com" className="text-decoration-underline text-blue-400">
                        harshkumar92200@gmail.com
                    </a>
                </p>
            </div>

        </Layout>
    </>;
};


export default SponsorMe;