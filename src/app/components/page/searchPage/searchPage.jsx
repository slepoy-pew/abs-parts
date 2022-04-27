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
        	<div className="search_container">
                <div className="search">
                    <SearchElements parts={parts} />
                    <BackButton />
                </div>
            </div>
        </StyledSearchPage>
    );
};

export default SearchPage;
