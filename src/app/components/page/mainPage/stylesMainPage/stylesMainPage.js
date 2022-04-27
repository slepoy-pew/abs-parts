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
            / 1fr
		;

		background: linear-gradient(
			90deg, 
			rgba(228,232,241,0.2) 0%,
			rgba(40,72,149,0.4) 25%,
			rgba(3,25,78,0.4) 50%,
			rgba(40,72,149,0.4) 75%,
			rgba(228,232,241,0.2) 100%
		);
    }
`;
