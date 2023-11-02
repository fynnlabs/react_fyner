import React from 'react';
import "./filterBtns.css"

const FilterBtns = () => {
    const filterBtns = ["All", "Smartphones", "Laptops", "Fragrances", "Skincare", "Groceries", "Home-Decoration"]

    return (
        <section className="main__btn" id="mainBtn">
        {filterBtns.map((btnNames) =>(
            <div className="all__btn">{btnNames}</div>
        ))}
        </section>
    );
};

export default FilterBtns;