import React from 'react';
import "./style.css"

const FilterBtns = ({clonedDataArray, setDataArray }) => {
    const filterBtns = ["All", "Smartphones", "Laptops", "Fragrances", "Skincare", "Groceries", "Home-Decoration"];

    //filters the products
    const filterBtnClick = (category) => {
        let categoryCompare = category.toLowerCase();
        categoryCompare === 'all' ? setDataArray(clonedDataArray) : setDataArray(clonedDataArray.filter(product => product.category === categoryCompare));
        window.scrollTo(0, 0);
    }

    return (
        <section className="main__btn" id="mainBtn">
            {filterBtns.map((btnName) => (
                <div className="all__btn" key={btnName} onClick={() => filterBtnClick(btnName)}>
                    {btnName}
                </div>
            ))}
        </section>
    );
};

export default FilterBtns;
