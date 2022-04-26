import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
    max-height: 6rem;

    /* border-bottom: 1px solid yellowgreen; */

    .nav_menu {
        height: 100%;
        padding-top: 2rem;
        display: grid;
        grid-template:
            auto
            / minmax(6rem, auto) 1fr minmax(6rem, auto);

        /* @media (max-width: 1370px) {
		    padding-top: 2rem;
	    } */
    }

    /* @media (max-width: 1370px) {
		max-height: 6rem;
	} */
`;

export const StyledBurgerBtn = styled.div`
    display: flex;
    background: var(--colorMainBtn);
    margin: 0 1rem 0 7rem;
    padding: 0.9rem 1.7rem 0.8rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    position: relative;
    transition-duration: 1s;
    top: 0;
    /* box-shadow:
        0px 1px 30px rgba(255,255,255,1),
        inset 8px 8px 20px rgba(255,255,255,0.2),
        inset -8px -8px 20px rgba(255,255,255,0.2)
    ; */

    &:hover {
        box-shadow: 0px 1px 10px rgba(255, 255, 255, 1);
        top: 2px;
    }

    @media (max-width: 1370px) {
        width: auto;
        height: 2.2rem;
        padding: 0;
        border-radius: 0;
    }
`;

export const StyledBurger = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
        width: 1.5rem;
        height: 0.25rem;
        background-color: ${({ active }) =>
        active ? "var(--colorTextActive)" : "var(--colorText)"};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ active }) =>
        active ? "rotate(45deg)" : "rotate(0)"};
        }
        &:nth-child(2) {
            transform: ${({ active }) =>
        active ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ active }) => (active ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ active }) =>
        active ? "rotate(-45deg)" : "rotate(0)"};
        }

        &:hover {
            background-color: var(--colorTextHover);
        }

        @media (max-width: 1370px) {
            width: 1.2rem;
            height: 0.2rem;
        }
    }

    @media (max-width: 1370px) {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

export const StyledBurgerText = styled.div`
    height: 1.3rem;
    font-size: var(--fontSizeButtonText);
    letter-spacing: 0.2rem;
    font-weight: bold;
    margin-left: 0.2rem;
    color: ${({ active }) =>
        active ? "var(--colorTextActive)" : "var(--colorText)"};
    &:hover {
        color: var(--colorTextHover);
    }

    @media (max-width: 1370px) {
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        letter-spacing: 0.2rem;
    }
`;

export const StyledMenuWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 4.4rem;
    left: 0;
    transform: ${({ active }) =>
        active ? "translateX(0)" : "translateX(-127%)"};
    /* transition: transform 0.7s ease-in-out; */
`;

export const StyledBlur = styled.div`
    width: 100vw;
    height: 100vh;
    left: 27%;
    backdrop-filter: blur(2px);
    position: absolute;
`;

export const StyledMenuContentList = styled.div`
    width: 27%;
    height: 100%;

    /* display: flex;
    flex-direction: column;
    align-items: center; */

    .listItem {
        /* width: 35rem; */
        /* width: auto; */
        /* height: 100%; */
        height: auto;
        /* border: 1px solid blue; */
        border-radius: 5px;
        margin: 0.5rem;
        padding: 1rem;
        text-align: center;
        background: var(--colorButton2);
        cursor: pointer;
        opacity: 0;
        /*Элемент полностью прозрачный (невидимый)*/

        .link {
            /* width: 100%; */
            font-size: 0.8rem;
            font-weight: bold;
            text-decoration: none;
            color: var(--colorTextActive);
        }
        .linkActive {
            /* padding: 0 5rem; */
            /* max-width: 100%; */
            /* width: 45rem; */
            transition: 2s;
            animation: showLink 2s 1;
            animation-fill-mode: forwards;
            animation-delay: 0.1s;
        }
        @keyframes showLink {
            0% {
                font-size: 0.9rem;
                color: var(--colorTextActive);
            }
            100% {
                /* width: 25rem; */
                font-size: 1.1rem;
                color: var(--colorText);
            }
        }
    }

    .active {
        transition: 2s; /*Скорость перехода состояния элемента*/
        animation: showActive 2s 1; /* Указываем название анимации, её время и количество повторов*/
        animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
        animation-delay: 0.1s; /* Задержка перед началом */
    }
    @keyframes showActive {
        0% {
            opacity: 0;
            box-shadow: 0px 1px 15px rgba(255, 255, 255, 0.3),
                inset 5px 5px 20px rgba(255, 255, 255, 0.2),
                inset -10px -10px 20px rgba(255, 255, 255, 0.2);
        }
        50% {
            opacity: 0.5;
            box-shadow: 0px 1px 15px rgba(255, 255, 255, 0.4),
                inset 5px 5px 20px rgba(255, 255, 255, 0.3),
                inset -10px -10px 20px rgba(255, 255, 255, 0.3);
        }
        100% {
            opacity: 1;
            box-shadow: 0px 1px 15px rgba(255, 255, 255, 0.5),
                inset 5px 5px 20px rgba(255, 255, 255, 0.4),
                inset -10px -10px 20px rgba(255, 255, 255, 0.4);
        }
    }
`;

export const StyledCallBtn = styled.button`
    height: 100%;
    margin: 0 auto;
    padding: 0 1.9rem;
    color: var(--colorText);
    background: var(--colorMainBtn);
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    transition-duration: 1s;
    top: 0;
    /* box-shadow:
        0px 1px 30px rgba(255,255,255,1),
        inset 8px 8px 20px rgba(255,255,255,0.2),
        inset -8px -8px 20px rgba(255,255,255,0.2)
    ; */

    &:hover {
        top: 2px;
        color: var(--colorTextHover);
        box-shadow: 0px 1px 10px rgba(255, 255, 255, 1);
    }

    @media (max-width: 1370px) {
        width: auto;
        height: 2.2rem;
        border-radius: 0;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        letter-spacing: 0.1rem;
    }

    .call-btn__text {
        letter-spacing: 0.1rem;
        padding-left: 1.5rem;
    }
`;

export const StyledLoginBtn = styled(Link)`
    margin: 0 7rem 0 1rem;
    // padding: 1rem 2.5rem 0.8rem;
    padding: 0.9rem 2rem 0.8rem;
    background: var(--colorMainBtn);
    border-radius: 5px;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
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

    &:hover {
        box-shadow: 0px 1px 10px rgba(255, 255, 255, 1);
        color: var(--colorTextHover);
        top: 2px;
    }

    @media (max-width: 1370px) {
        width: auto;
        height: 2.2rem;
        border-radius: 0;
        font-size: 1.2rem;
        padding: 0.5rem 1rem 0.5rem 1.4rem;
        letter-spacing: 0.2rem;
    }
`;
