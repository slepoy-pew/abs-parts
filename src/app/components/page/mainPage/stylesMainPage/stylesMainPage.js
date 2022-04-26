import styled from "styled-components";
import imageMain from "../../../../assets/imageMain.jpg";

export const StyledMainPage = styled.div`
    background-image: url(${imageMain});

    /* @media (max-width: 1370px) {
        object-fit: cover;
    } */

    .main_container {
        min-height: 100vh;
        padding: 5rem;
    }
    @media (max-width: 1370px) {
        .main_container {
            padding: 3.5rem;
        }
    }

    .main {
        border-radius: 6px;

        display: grid;
        grid-template:
            minmax(2rem, auto) 1fr minmax(2rem, auto)
            / 1fr;

        /* background-color: rgba(21, 1, 88, 0.3); */
        /* background-color: rgba(66,213,242,0.2); */

        background: linear-gradient(
            90deg,
            rgba(6, 83, 242, 0.2) 0%,
            rgba(22, 53, 125, 0.4) 25%,
            rgba(15, 34, 89, 0.6) 50%,
            rgba(22, 53, 125, 0.4) 75%,
            rgba(6, 83, 242, 0.2) 100%
        );

        /* background: linear-gradient(
            180deg,
            rgba(225,236,242,0.2) 0%,
            rgba(184,227,241,0.2) 25%,
            rgba(142,216,241,0.2) 50%,
            rgba(102,203,241,0.2) 75%,
            rgba(66,213,242,0.2) 100%
        ); */
    }
`;
// rgba(9,3,100,0.6) 75%,
