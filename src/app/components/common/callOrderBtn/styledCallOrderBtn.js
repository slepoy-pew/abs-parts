import styled from "styled-components";

const StyledCallOrderBtn = styled.button`
    height: 100%;
    /* margin: 0 auto; */
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
export default StyledCallOrderBtn;
