import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
    :root {
        --colorMainBtn: #053781;
        /* --colorContentBtn: #053781; */

		--colorText: #b1b1be;
		--colorTextHover: #CCCCD9;
		/* --colorTextHover: #DDDDEC; */
        --colorTextActive: #8B8B95;

        --fontSizeButtonText: 1.3rem;
        /* font-size: calc(0.5em + lvw); */
        font-size: 1rem;
        font-family: sans-serif;
        box-sizing: border-box;
		max-width: 100vw;
		min-height: 100vh;
    }
    *,
    ::before,
    ::after {
        box-sizing: inherit;
    }
    body {
        /* max-width: 100vw; */
		/* min-height: 100vh; */
		/* max-height: 100vh; */
		margin: 0;
		padding: 0;
        background-color: #000;
		/* background: var(--colorBody1); */
		/* background: var(--colorBody2); */
    }
`;
export default StyleGlobal;
