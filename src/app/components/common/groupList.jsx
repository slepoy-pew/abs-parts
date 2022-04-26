import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    onItemSelect,
    selectedItem,
    valueProperty,
    contentProperty
}) => {
    if (!Array.isArray(items)) {
        return (
            <ul className="brand_list">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            "brand_items" +
                            (items[item] === selectedItem
                                ? " brand_active"
                                : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        );
    }
    return (
        <ul>
            {items.map((item) => (
                <li
                    key={items[valueProperty]}
                    className={
                        "brand_items" +
                        (item === selectedItem ? " brand_active" : "")
                    }
                    onClick={() => onItemSelect(item)}
                >
                    {items[contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired
};

export default GroupList;
