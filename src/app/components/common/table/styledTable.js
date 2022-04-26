import styled from "styled-components";

const StyledTable = styled.div`
    /* height: 100%;
	background: var(--colorBody5); */

    .table_blur {
        background: #f5ffff;
        border-collapse: collapse;
        text-align: left;
    }
    .table_blur th {
        border-top: 1px solid #777777;
        border-bottom: 1px solid #777777;
        box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
        background: linear-gradient(#9595b6, #5a567f);
        color: white;
        padding: 10px 15px;
        position: relative;
    }
    .table_blur th:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 25%;
        height: 25%;
        width: 100%;
        background: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.08)
        );
    }
    .table_blur tr:nth-child(odd) {
        background: #ebf3f9;
    }
    .table_blur th:first-child {
        border-left: 1px solid #777777;
        border-bottom: 1px solid #777777;
        box-shadow: inset 1px 1px 0 #999999, inset 0 -1px 0 #999999;
    }
    .table_blur th:last-child {
        border-right: 1px solid #777777;
        border-bottom: 1px solid #777777;
        box-shadow: inset -1px 1px 0 #999999, inset 0 -1px 0 #999999;
    }
    .table_blur td {
        border: 1px solid #e3eef7;
        padding: 10px 15px;
        position: relative;
        transition: all 0.5s ease;
    }
    .table_blur tbody:hover td {
        color: transparent;
        text-shadow: 0 0 3px #a09f9d;
    }
    .table_blur tbody:hover tr:hover td {
        color: #444444;
        text-shadow: none;
    }
`;
export default StyledTable;
