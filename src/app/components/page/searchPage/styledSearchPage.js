import styled from "styled-components";
import bgImage from "../../../assets/bg_image.jpg";

const StyledSearchPage = styled.div`
    background-image: url(${bgImage});
    /* object-fit: cover; */
    /* height: 100vh; */

    .search_container {
        min-height: 100vh;
        padding: 5rem;
    }
    @media (max-width: 1370px) {
        .search_container {
            padding: 3.5rem;
        }
    }

    .search {
        border-radius: 6px;
		background: linear-gradient(
            135deg,
            rgba(235,237,244, 0.3) 0%,
            rgba(172,192,241, 0.3) 25%,
            rgba(172,192,241, 0.4) 50%,
            rgba(144,172,241, 0.3) 75%,
            rgba(96,129,201, 0.4) 100%
        );
    }

	.searchText-one {
		display: grid;
    	grid-template: 3fr / 1fr;
		padding: 2.5rem 0 1.5rem;
	}
	.line-one {
        color: #f49612;
        letter-spacing: 0.1rem;
        line-height: 2rem;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
        text-shadow: blue 1px 1px 5px;
    }
    @media (max-width: 1370px) {
        .line-one {
            font-size: 1.1rem;
            line-height: 2.2rem;
        }
    }

	.searchText-two {
		display: grid;
    	grid-template: 3fr / 1fr;
		padding: 1.5rem 0 2rem;
	}
	.line-two {
        color: #f49612;
        letter-spacing: 0.1rem;
        /* word-spacing: 0.1rem; */
        line-height: 2rem;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
        text-shadow: blue 1px 1px 5px;
    }
    @media (max-width: 1370px) {
        .line-two {
            font-size: 1.1rem;
            line-height: 2.2rem;
        }
    }

    .search_elements {
        width: 58rem;
        margin: 0 auto;
        border: 1px solid orangered;

        display: grid;
        grid-template-columns: 10rem 1fr;
        grid-template-rows: auto 18rem 1fr;
        grid-template-areas:
            "brand field"
            "brand parts"
            "brand paginate";
    }

    .element {
        padding: 1rem;
    }

    /* ====== BRAND ====== */
    .filter_brand {
        grid-area: brand;

        border: 1px solid white;
    }
    .brand_list {
        padding: 6.6rem 0 0 0;
        margin: 0 0 0.5rem 0;
    }
    .brand_items {
        list-style-type: none;
        cursor: pointer;
        user-select: none;
        text-align: center;
        margin: 0 0 0.5rem 0;
        padding: 0.8rem 0;
        font-size: 1.1rem;

        border: 1px solid red;
    }
    .brand_active {
        background-color: white;
    }
    .brand_clear_btn {
        cursor: pointer;
        width: 100%;
        padding: 0.9rem 0;
        border: none;
        font-size: 1.1rem;
    }

    /* ====== FIELD ====== */
    .input_field {
        grid-area: field;
        border: 1px solid yellow;
    }
    .input_field input {
        display: block;
        width: 100%;
        height: calc(2.25rem + 2px);
        padding: 0.375rem 0.75rem;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #bdbdbd;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    /* ====== PARTS ====== */
    .table_parts {
        grid-area: parts;
        border: 1px solid red;
    }
    .table_blur {
        background: #f5ffff;
        border-collapse: collapse;
        text-align: center;
        /* min-width: 47rem; */
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
    .table_blur th:first-child {
        width: 10rem;
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
        cursor: pointer;
    }
    .table_blur tbody:hover td {
        color: transparent;
        text-shadow: 0 0 3px #a09f9d;
    }
    .table_blur tbody:hover tr:hover td {
        color: #444444;
        text-shadow: none;
    }

    /* ====== PAGINATE ====== */
    .paginate {
        grid-area: paginate;

        border: 1px solid green;
    }
    .paginate_list {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    .paginate_items {
        list-style-type: none;
    }
    .painate_btn {
        border: none;
        font-size: 1.5rem;
        margin-left: 0.5rem;
        cursor: pointer;
    }

    /* ====== ICONS-SORTED ====== */
    .triangle {
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        cursor: pointer;
    }
    .up {
        border-bottom: 14px solid green;
    }
    .down {
        border-top: 14px solid green;
    }

	.search-buttons {
		min-height: 4rem;
		padding: 0 3rem 0;
		display: grid;
		grid-template: 1fr / 1fr 1fr 1fr;
		/* grid-template:
            auto
            / minmax(6rem, auto) 1fr minmax(6rem, auto); */
	}
`;

export default StyledSearchPage;
