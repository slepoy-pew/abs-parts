import React from "react";
import { useHistory } from "react-router-dom";
import StyledBackButton from "./stylesBackButton";


const BackButton = () => {
    const history = useHistory();
    const handleBack = () => history.replace("/");

    return (
		<StyledBackButton onClick={() => handleBack()}>
            НА ГЛАВНУЮ
		</StyledBackButton>
    );
};

export default BackButton;
