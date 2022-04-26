import React from "react";
import { StyledCallBtn } from "../../../page/mainPage/stylesMainPage/stylesHeader";

const CallOrderBtn = () => {
    return (
        <StyledCallBtn>
            <span className="call-btn__phone">8 (800) 888 88 88</span>
            <span className="call-btn__text">ЗАКАЗАТЬ ЗВОНОК</span>
        </StyledCallBtn>
    );
};

export default CallOrderBtn;
