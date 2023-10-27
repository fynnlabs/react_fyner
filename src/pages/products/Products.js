import React from 'react';
import "./products.css"

const Products = () => {

    return (
        <div className="content__wrapper">
        <div className="header__wrapper">
        <header className="header">
            Our Products
        </header>
        <div className="underline"></div>
        <section className="main__btn" id="mainBtn">
            {/* here Btns get added via Js */}
        </section>
    </div>
    <div className="products__wrapper">
        <div className="products" id="products">
            {/* here the on the page wanted products get added via Js */}
        </div>
    </div>
</div>
    );
};

export default Products;