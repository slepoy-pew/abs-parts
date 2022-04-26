import React, { useState, useEffect } from "react";
import StyledSearchPage from "./stylesSearchPage";
import api from "../../../api";
import SearchElements from "../../ui/searchElements";
import BackButton from "../../common/backButton";

const SearchPage = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        setParts(api.autoParts.fetchAll());
    }, []);

    return (
        <StyledSearchPage>
            <SearchElements parts={parts} />
            <BackButton />
        </StyledSearchPage>
    );
};

export default SearchPage;
