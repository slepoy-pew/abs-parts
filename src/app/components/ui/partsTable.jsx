import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
// import api from "../../api"
import Table from "../common/table/table";

const PartsTable = ({ parts, onSort, selectedSort }) => {
    console.log(parts);
    // const handleReserve = (userId) => {
    // 	console.log(userId);
    // 	// setUsers(users.filter((user) => user._id !== userId));
    // }

    const columns = {
        number: { path: "number", name: "НОМЕР ДЕТАЛИ" },
        name: { path: "name", name: "НАЗВАНИЕ ДЕТАЛИ" },
        brand: { path: "brand.name", name: "ПРОИЗВОДИТЕЛЬ" },
        price: { path: "price", name: "ЦЕНА" }
        // reserve: {
        // 	component: (part) => (
        // 		<button
        //             onClick={() => handleReserve(part._id)}
        //             className=""
        //         >
        //             РЕЗЕРВ
        //         </button>
        // 	)
        // }
    };

    return (
        <Table
            data={parts}
            columns={columns}
            onSort={onSort}
            selectedSort={selectedSort}
        />
    );
};

PartsTable.propTypes = {
    parts: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default PartsTable;
