import React from "react";
import "./PopUp.css";
import closePopUpIcon from "../../assets/images/icons/cross-icon.png";

const PopUp = (props) => {

    const handleClosePopUpButtonClick = () => {
        console.log("Close Pop Up Button CLicked");

        props.handleCloseButtonClick();
    };

    return <>
        <div className="pop-up-container min-h-full max-h-full overflow-y-scroll main-container-gradient">
            <div className="pop-up-content w-full min-h-screen bg-[#080916eb] rounded-4xl p-4">

                <div className="pop-up-close flex flex-row pe-4">
                    <div onClick={() => {
                        handleClosePopUpButtonClick();
                    }}
                        className="cursor-pointer text-white font-bold flex items-center justify-center p-4 border border-1 border-[#8e99a363] rounded-full">
                        <img className="w-8 object-cover" src={closePopUpIcon} alt="close pop up icon" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center m-4 p-2 text-white">
                    {props.children}

                </div>
            </div>
        </div>
    </>;
};


export default PopUp;