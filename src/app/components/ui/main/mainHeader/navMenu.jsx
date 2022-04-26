import React from "react";
import BurgerMenuBtn from "./burgerMenuBtn";
import CallOrderBtn from "./callOrderBtn";
import LoginBtn from "./loginBtn";

const NavMenu = () => {
    return (
        <div className="nav_menu">
            <BurgerMenuBtn />

            <CallOrderBtn />

            <LoginBtn />
        </div>
    );
};

export default NavMenu;
