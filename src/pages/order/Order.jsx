import React, { useState } from 'react';
import FilterBtns from "../../components/filterBtns/FilterBtns";
import "./order.css";
import Items from "../../components/items/Items";

const Order = () => {
    const [showCart, setShowcart] = useState(false);
    const headline = "Order";
    const shoppingCartHeadline = "Warenkorb";
    const orderBtnText = "Jetzt Bestellen";
    const [itemsInCart, setItemsInCart] = useState(0);

    const showShoppingCart = () => {
        setShowcart(!showCart);
    }

    const increaseCartCount = () => {
        setItemsInCart(itemsInCart + 1);
    }

    return (
        <div>
            <div className="content__wrapper">
                <div className="header__wrapper">
                    <header className="header">
                        {headline}
                    </header>
                    <div className="underline"></div>
                    <FilterBtns />
                </div>
                <Items increaseCartCount={increaseCartCount} /> {/* Pass addToCart as a prop */}
                <div className="shoppingCart" id="shoppingCart" onClick={showShoppingCart}>
                    {`Warenkorb (${itemsInCart})`}
                </div>
            <div className={showCart ? "blend__background" : ""} id="backgroundPop" onClick={showShoppingCart}></div>
            <section className={showCart ? "shoppingCartPop" : ""} id="shoppingCartPop">
                <div className="shoppingCartPop__header">{showCart ? shoppingCartHeadline : ""}</div>
                <div className="shoppingCartPop__content" id="shoppingCartPopContent">
                </div>
                <div className="shoppingCartPop__orderBtn" id="shoppingCartPopOrderBtn">{showCart ? orderBtnText : ""}</div>
            </section>
        </div>
            </div>
    );
};

export default Order;