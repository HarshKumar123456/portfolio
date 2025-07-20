import React from "react";
import AnimatedMenu from "../AnimatedMenu/AnimatedMenu";

const Layout = (props) => {
    return <>
        <AnimatedMenu />
        <div className="h-screen flex items-center justify-center p-4">
            <div className="main-container-gradient h-full w-full py-14 px-2 md:ps-4 md:pe-12 py-4 rounded-3xl">
            {props.children}
            </div>
        </div>
    </>;
};

export default Layout;