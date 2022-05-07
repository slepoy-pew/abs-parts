import React from "react";
import StyledCallOrderBtn from "./styledCallOrderBtn";

const CallOrderBtn = () => {
    return (
        <StyledCallOrderBtn>
            <span className="call-btn__phone">8 (800) 888 88 88</span>
            <span className="call-btn__text">ЗАКАЗАТЬ ЗВОНОК</span>
        </StyledCallOrderBtn>
    );
};

export default CallOrderBtn;
