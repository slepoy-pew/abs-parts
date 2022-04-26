import React from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ data, columns, onSort, selectedSort }) => {
    return (
        <table className="table_blur">
            <TableHeader {...{ columns, onSort, selectedSort }} />
            <TableBody {...{ data, columns }} />
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.object,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    children: PropTypes.array
};

export default Table;

/*
	<table className="table">
		{children || (
			<>
				<TableHeader {...{ columns }} />
				<TableBody {...{ data, columns }} />
			</>
		)}
	</table>
*/
