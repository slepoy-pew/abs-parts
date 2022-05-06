import React from "react";
import CallOrderBtn from "../../../common/callOrderBtn/callOrderBtn";
import BurgerMenuBtn from "./burgerMenuBtn";
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
