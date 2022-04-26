import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMainContent = styled.div`
    display: grid;
    grid-template: 2fr / 1fr;
    place-items: center;
    /* margin: 6rem 0 1rem; */
    padding: 6rem 0 1rem;

    /* border-top: 1px solid yellowgreen; */

    @media (max-width: 1370px) {
        /* margin: 4.5rem 0 0; */
        padding: 3.5rem 0 0;
    }
`;

export const StyledText = styled.div`
    padding: 0 0 3rem;
    display: grid;
    grid-template: 4fr / 1fr;

    .line {
        color: #f49612;
        /* color: #04c3c1; */

        /* color: #f4b846; */

        /* color: #dfddfb; */
        letter-spacing: 0.2rem;
        word-spacing: 0.3rem;
        line-height: 3rem;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: center;
        text-shadow: blue 1px 1px 5px;
    }
    @media (max-width: 1370px) {
        .line {
            font-size: 1.1rem;
            line-height: 2.2rem;
        }
    }

    .first {
        /* color: #05f6f3; */
        /* color: #5beff2; */
        /* color: #f4b846; */
        color: #f49612;
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }
    @media (max-width: 1370px) {
        .first {
            font-size: 1.4rem;
        }
    }

    .second {
    }
    .third {
    }

    .fourth {
        /* color: #f49612; */
    }

    .fifth {
    }
    .sixth {
        font-size: 1.8rem;
        margin-top: 1rem;
    }
    @media (max-width: 1370px) {
        .sixth {
            font-size: 1.4rem;
        }
    }

    /* filter: 
        drop-shadow(-3px -3px 2px rgba(255,255,255,0.3))
        drop-shadow(5px 5px 5px rgba(0,0,0,0.2))
        drop-shadow(15px 15px 15px rgba(0,0,0,0.2))
        rgba(9,3,70,0.6)
    ; */
`;

export const StyledLinks = styled.div`
    /* margin: 7rem 0 2rem; */
    padding: 7rem 0 1rem;

    @media (max-width: 1370px) {
        padding: 2rem 0 1rem;
    }
`;

export const StyledSearchLink = styled(Link)`
    margin-right: 17rem;

    padding: 2rem 2rem;
    background: var(--colorMainBtn);
    border-radius: 5px;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: var(--colorText);
    position: relative;
    transition-duration: 1s;
    top: 0;
    /* box-shadow:
        0px 1px 30px rgba(255,255,255,1),
        inset 8px 8px 20px rgba(255,255,255,0.2),
        inset -8px -8px 20px rgba(255,255,255,0.2)
    ; */

    /* &:hover {
        box-shadow: 0px 1px 10px rgba(255,255,255,1);
        color: var(--colorTextHover);
        top: 2px;
    } */

    @media (max-width: 1370px) {
        margin-right: 10rem;
        padding: 1rem 2rem;
        font-size: 1.3rem;
    }
`;

export const StyledRequestLink = styled(Link)`
    margin-left: 16rem;

    padding: 2rem 3rem;
    background: var(--colorMainBtn);
    border-radius: 5px;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: var(--colorText);
    position: relative;
    transition-duration: 1s;
    top: 0;
    /* box-shadow:
        0px 1px 30px rgba(255,255,255,1),
        inset 8px 8px 20px rgba(255,255,255,0.2),
        inset -8px -8px 20px rgba(255,255,255,0.2)
    ; */

    /* &:hover {
        box-shadow: 0px 1px 10px rgba(255,255,255,1);
        color: var(--colorTextHover);
        top: 2px;
    } */

    @media (max-width: 1370px) {
        margin-left: 10rem;
        padding: 1rem 2.6rem;
        font-size: 1.3rem;
    }
`;
