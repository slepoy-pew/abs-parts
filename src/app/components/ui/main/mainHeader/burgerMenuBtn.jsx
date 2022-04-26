import React, { useState } from "react";
import { StyledBurgerBtn } from "../../../page/mainPage/stylesMainPage/stylesHeader";
// import { StyledBurger } from "../../../page/mainPage/stylesMainPage/stylesHeader";
import { StyledBurgerText } from "../../../page/mainPage/stylesMainPage/stylesHeader";
import Menu from "./menu";

const BurgerMenuBtn = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <StyledBurgerBtn onClick={() => setActive(!active)}>
                {/* <StyledBurger active={active}>
                    <div />
                    <div />
                    <div />
                </StyledBurger> */}
                <StyledBurgerText active={active}>МЕНЮ</StyledBurgerText>
            </StyledBurgerBtn>
            <Menu active={active} setActive={setActive} />
        </>
    );
};

export default BurgerMenuBtn;
