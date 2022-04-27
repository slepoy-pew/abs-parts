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
        </StyledLoginPage>
    );
};

export default LoginPage;
