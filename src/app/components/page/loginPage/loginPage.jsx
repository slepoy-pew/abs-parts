import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LogInForm from "../../ui/logInForm";
import RegisterForm from "../../ui/registerForm";
import { StyledLoginPage } from "./stylesLoginPage/stylesLoginPage";

const LoginPage = () => {
    const { type } = useParams();

    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <StyledLoginPage>
			<div className="login_container">
				<div className="login">
					{formType === "register" ? (
						<>
							<h2>Registr</h2>
							<RegisterForm />
							<p>
								Already have account?
								<a onClick={toggleFormType}>Sign IN</a>
							</p>
						</>
					) : (
						<>
							<h2>Login</h2>
							<LogInForm />
							<p>
								Dont have account?
								<a onClick={toggleFormType}>Sign UP</a>
							</p>
						</>
					)}
				</div>
			</div>
        </StyledLoginPage>
    );
};

export default LoginPage;
