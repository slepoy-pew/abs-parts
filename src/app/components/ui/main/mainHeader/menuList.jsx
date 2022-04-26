import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { StyledMenuContentList } from "../../../page/mainPage/stylesMainPage/stylesHeader";

const MenuList = ({ active, itemLinks }) => {
    return (
        <StyledMenuContentList active={active}>
            {itemLinks.map((item, index) => (
                <div
                    className={active ? "listItem active" : "listItem"}
                    key={item.id + index}
                >
                    <Link
                        to={item.path}
                        className={
                            active ? `${item.class} linkActive` : item.class
                        }
                    >
                        {item.name}
                    </Link>
                </div>
            ))}
        </StyledMenuContentList>
    );
};

MenuList.propTypes = {
    active: PropTypes.bool.isRequired,
    itemLinks: PropTypes.array.isRequired
};

export default MenuList;
