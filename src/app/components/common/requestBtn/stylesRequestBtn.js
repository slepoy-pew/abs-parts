import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRequestLink = styled(Link)`
    /* margin-left: 16rem; */

    /* padding: 2rem 3rem; */
    background: var(--colorMainBtn);
    border-radius: 5px;
    font-size: 1.2rem;
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
export default StyledRequestLink;
