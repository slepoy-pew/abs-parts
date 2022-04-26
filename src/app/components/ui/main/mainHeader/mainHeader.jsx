import React from "react";
import { StyledHeader } from "../../../page/mainPage/stylesMainPage/stylesHeader";
import NavMenu from "./navMenu";

const MainHeader = () => {
    return (
        <StyledHeader>
            <NavMenu />
        </StyledHeader>
    );
};

export default MainHeader;
