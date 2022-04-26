import React from "react";
import { StyledMainPage } from "./stylesMainPage/stylesMainPage";
import MainContent from "../../ui/main/mainContent/mainContent";
import MainFooter from "../../ui/main/mainFooter/mainFooter";
import MainHeader from "../../ui/main/mainHeader/mainHeader";

const MainPage = () => {
    return (
        <StyledMainPage>
            <div className="main_container">
                <div className="main">
                    <MainHeader />
                    <MainContent />
                    <MainFooter />
                </div>
            </div>
        </StyledMainPage>
    );
};

export default MainPage;
