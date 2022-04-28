import styled from "styled-components";
import imageLog from "../../../../assets/imageLog.jpg";

export const StyledLoginPage = styled.div`
	background-image: url(${imageLog});

	.login_container {
        min-height: 100vh;
        padding: 5rem;
    }
    @media (max-width: 1370px) {
        .login_container {
            padding: 3.5rem;
        }
    }

    .login {
        border-radius: 6px;

        background: linear-gradient(
            90deg,
            rgba(6, 83, 242, 0.2) 0%,
            rgba(22, 53, 125, 0.4) 25%,
            rgba(15, 34, 89, 0.6) 50%,
            rgba(22, 53, 125, 0.4) 75%,
            rgba(6, 83, 242, 0.2) 100%
        );
    }


	/* ====== REGISTR FORM ====== */
	form {
		max-width: 500px;
		margin: 0 auto;
	}

	h1 {
		font-weight: 100;
		color: white;
		text-align: center;
		padding-bottom: 10px;
		border-bottom: 1px solid rgb(79, 98, 148);
	}

	.form {
		background: #0e101c;
		max-width: 400px;
		margin: 0 auto;
	}

	p {
		color: #bf1650;
	}

	p::before {
		display: inline;
		content: "⚠ ";
	}

	input {
		display: block;
		box-sizing: border-box;
		width: 100%;
		border-radius: 4px;
		border: 1px solid white;
		padding: 10px 15px;
		margin-bottom: 10px;
		font-size: 14px;
	}

	label {
		line-height: 2;
		text-align: left;
		display: block;
		margin-bottom: 13px;
		margin-top: 20px;
		color: white;
		font-size: 14px;
		font-weight: 200;
	}

	button[type="submit"],
	input[type="submit"] {
		background: #ec5990;
		color: white;
		text-transform: uppercase;
		border: none;
		margin-top: 40px;
		padding: 20px;
		font-size: 16px;
		font-weight: 100;
		letter-spacing: 10px;
	}

	button[type="submit"]:hover,
	input[type="submit"]:hover {
		background: #bf1650;
	}

	button[type="submit"]:active,
	input[type="button"]:active,
	input[type="submit"]:active {
		transition: 0.3s all;
		transform: translateY(3px);
		border: 1px solid transparent;
		opacity: 0.8;
	}

	input:disabled {
		opacity: 0.4;
	}

	input[type="button"]:hover {
		transition: 0.3s all;
	}

	button[type="submit"],
	input[type="button"],
	input[type="submit"] {
		-webkit-appearance: none;
	}

	.App {
		max-width: 600px;
		margin: 0 auto;
	}

	button[type="button"] {
		display: block;
		appearance: none;
		background: #333;
		color: white;
		border: none;
		text-transform: uppercase;
		padding: 10px 20px;
		border-radius: 4px;
	}

	pre {
		color: white;
	}

	hr {
		margin-top: 30px;
	}

	button {
		display: block;
		appearance: none;
		margin-top: 40px;
		border: 1px solid #333;
		margin-bottom: 20px;
		text-transform: uppercase;
		padding: 10px 20px;
		border-radius: 4px;
	}
`;
