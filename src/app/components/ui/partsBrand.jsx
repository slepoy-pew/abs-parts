import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import GroupList from "../common/groupList";

const PartsBrand = ({ onItemSelect, selectedItem, onClearFilter }) => {
    const [autoBrands, setBrands] = useState();

    useEffect(() => {
        api.autoBrands.fetchAll().then((data) => setBrands(data));
    }, []);

    return (
        <>
            {autoBrands && (
                <>
                    <GroupList
                        items={autoBrands}
                        onItemSelect={onItemSelect}
                        selectedItem={selectedItem}
                    />
                    <button
                        className="brand_clear_btn"
                        onClick={() => onClearFilter()}
                    >
                        ОЧИСТИТЬ
                    </button>
                </>
            )}
        </>
    );
};

PartsBrand.propTypes = {
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object,
    onClearFilter: PropTypes.func
};

export default PartsBrand;
