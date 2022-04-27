import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "../common/pagination";
import PartsTable from "./partsTable";
import { paginate } from "../../utils/paginate";
import PartsBrand from "./partsBrand";
import _ from "lodash";

const SearchElements = ({ parts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [numberSearch, setNumberSearch] = useState("");
    const [selectedBrand, setSelectedBrand] = useState();
    const [sortBy, setSortBy] = useState({ path: "number", order: "asc" });
    const pageSize = 5;

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedBrand, numberSearch]);

    const handleNumberSearch = ({ target }) => {
        setSelectedBrand(undefined);
        setNumberSearch(target.value);
    };

    const handleBrandsSelect = (item) => {
        if (numberSearch !== "") setNumberSearch("");
        setSelectedBrand(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (parts) {
        const brandsFiltered = numberSearch
            ? parts.filter((part) =>
                part.number
                    .toUpperCase()
                    .indexOf(numberSearch.toUpperCase()) !== -1
            )
            : selectedBrand
    		? parts.filter ((part) =>
                JSON.stringify(part.brand) ===
                JSON.stringify(selectedBrand)
            )
            : parts
		;

        const count = brandsFiltered.length;

        const partsSorted = _.orderBy(
            brandsFiltered,
            [sortBy.path],
            [sortBy.order]
        );
        const partsCrop = paginate(partsSorted, currentPage, pageSize);

        const clearFilter = () => {
            setSelectedBrand();
        };

        return (
            <div className="search_elements">
                <div className="element filter_brand">
                    <PartsBrand
                        onItemSelect={handleBrandsSelect}
                        selectedItem={selectedBrand}
                        onClearFilter={clearFilter}
                    />
                </div>

                <div className="element input_field">
                    <input
                        type="text"
                        name="numberSearch"
                        placeholder="Введите номер детали..."
                        onChange={handleNumberSearch}
                        value={numberSearch}
                    />
                </div>

                <div className="element table_parts">
                    <PartsTable
                        parts={partsCrop}
                        onSort={handleSort}
                        selectedSort={sortBy}
                    />
                </div>

                <div className="element paginate">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        );
    } else {
        return "loading...";
    }
};

SearchElements.propTypes = {
    parts: PropTypes.array.isRequired
};

export default SearchElements;
