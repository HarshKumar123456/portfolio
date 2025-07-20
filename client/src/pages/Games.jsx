import React from "react";
import Layout from "../components/Layout/Layout";

import placeholderImage from "../assets/images/placeholderImage.png";

const Games = () => {

    return <>
        <Layout>
            <div className="p-4 rounded-3xl flex items-center justify-center">
                <div className="main-container-gradient p-4 rounded-3xl">

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-32 p-8 text-white text-center">
                        
                        <div className="img-and-text flex flex-col items-center justify-center">
                            <img src={placeholderImage} alt="" className="w-16 md:w-32" />

                            <h2 className="text-lg">Nim Game</h2>
                            
                        </div>

                        <div className="img-and-text flex flex-col items-center justify-center">
                            <img src={placeholderImage} alt="" className="w-16 md:w-32" />

                            <h2 className="text-lg">Snake Game</h2>
                            
                        </div>

                        

                        
                    </div>
                    
                </div>
            </div>

        </Layout>
    </>;
};


export default Games;