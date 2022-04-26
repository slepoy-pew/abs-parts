import styled from "styled-components";
import imageSearch from "../../../assets/imageSearch.jpg";

const StyledSearchPage = styled.div`
    background-image: url(${imageSearch});
    object-fit: cover;
    height: 100vh;

    .page_elements {
        /* height: 100vh; */
    }

    .elements_grid {
        width: 58rem;
        margin: 0 auto;
        /* padding-top: 1rem; */
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

    /* ====== BUTTON-BACK ====== */
    .back_to_main {
        display: flex;
        justify-content: center;
    }
    .back_btn {
        border: none;
        cursor: pointer;
        padding: 1rem 1.5rem;
        margin: 2rem 0 0;
        font-size: 1.1rem;
    }
`;
export default StyledSearchPage;
