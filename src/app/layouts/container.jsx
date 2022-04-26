import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../components/page/mainPage";
import LoginPage from "../components/page/loginPage/loginPage";
import SearchPage from "../components/page/searchPage/searchPage";
import RequestPage from "../components/page/requestPage";
import PaymentPage from "../components/page/paymentPage/paymentPage";
import ContactsPage from "../components/page/contactsPage/contactsPage";
import VacanciesPage from "../components/page/vacancies/vacanciesPage";
import AboutPage from "../components/page/aboutPage/aboutPage";

const Container = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/login/:type?" component={LoginPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/request" component={RequestPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/vacancies" component={VacanciesPage} />
            <Route path="/about" component={AboutPage} />
        </Switch>
    );
};

export default Container;
