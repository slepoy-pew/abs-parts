import React from "react";
import { useHistory } from "react-router-dom";

const BackButton = () => {
    const history = useHistory();
    const handleBack = () => history.replace("/");

    return (
        <div className="back_to_main">
            <button className="back_btn" onClick={() => handleBack()}>
                НА ГЛАВНУЮ
            </button>
        </div>
    );
};

export default BackButton;
