import React from 'react';
import "./filterBtns.css"

const FilterBtns = ({ clonedDataArray, filteredProducts, setFilteredProducts,renderProducts }) => {
    const filterBtns = ["All", "Smartphones", "Laptops", "Fragrances", "Skincare", "Groceries", "Home-Decoration"];

    //filters the products
    const filterBtnClick = (category) => {
        let categoryCompare = category.toLowerCase();
        categoryCompare === 'all' ? setFilteredProducts(clonedDataArray) : setFilteredProducts(clonedDataArray.filter(product => product.category === categoryCompare));

        renderProducts(filteredProducts);
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
