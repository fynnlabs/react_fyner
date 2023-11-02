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
    const shoppingCartPlaceholder = "Noch keine Einträge im Warenkorb"
    let shoppingCartItems = [];
    let cartItems = []
    let clonedProduct

    const showShoppingCart = () => {
        setShowcart(!showCart);
    }

    const increaseCartCount = (product) => {
        setItemsInCart(itemsInCart + 1);

        cartItems = shoppingCartItems.find(item => item.id === product.id);
        if (cartItems) {
            cartItems.quantity +=1
        } else {
            clonedProduct = {...product, quantity: 1};
            shoppingCartItems.push(clonedProduct);
        }
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
                    {itemsInCart === 0 && shoppingCartItems.length === 0 ? shoppingCartPlaceholder : null}
                </div>
                <div className="shoppingCartPop__orderBtn" id="shoppingCartPopOrderBtn">{showCart ? orderBtnText : ""}</div>
            </section>
        </div>
            </div>
    );
};

export default Order;