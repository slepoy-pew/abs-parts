import React from "react";
import { StyledMainContent } from "../../../page/mainPage/stylesMainPage/stylesContent";
import { StyledText } from "../../../page/mainPage/stylesMainPage/stylesContent";
import { StyledLinks } from "../../../page/mainPage/stylesMainPage/stylesContent";
import { StyledSearchLink } from "../../../page/mainPage/stylesMainPage/stylesContent";
import { StyledRequestLink } from "../../../page/mainPage/stylesMainPage/stylesContent";

const MainContent = () => {
    return (
        <StyledMainContent>
            <StyledText>
                <span className="line first">
                    Добро пожаловать в интернет магазин ABS-PARTS.
                </span>
                <span className="line second">
                    Мы занимаемся продажей новых, оригинальных автозапчастей на
                    такие марки как:
                </span>
                <span className="line third">TOYOTA, MITSUBISHI, SUBARU.</span>
                <span className="line fourth">
                    У нас большой ассортимент оригинальных автозапчастей, гибкая
                    ценовая политика,
                </span>
                <span className="line fifth">честные сроки поставки.</span>
                <span className="line sixth">
                    Обращайтесь, будем рады Вам помочь!!!
                </span>
            </StyledText>

            <StyledLinks>
                <StyledSearchLink to="/search">
                    ПОИСК ПО НОМЕРУ
                </StyledSearchLink>
                <StyledRequestLink to="/request">
                    ЗАПРОС ПО VIN
                </StyledRequestLink>
            </StyledLinks>
        </StyledMainContent>
    );
};

export default MainContent;
