import React, {useState} from 'react';
import FilterBtns from "../../components/filterBtns/FilterBtns";
import "./order.css"
import Items from "../../components/items/Items";

const Order = () => {
    const [showCart, setShowcart] = useState(false)
    const headline = "Order"

    const showShoppingCart = () => {
        setShowcart(!showCart)
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
            <Items />
            <div className="shoppingCart" id="shoppingCart" onClick={showShoppingCart}>
                Warenkorb (0)
            </div>
            <div className={showCart ? "blend__background" : ""} id="backgroundPop" onClick={showShoppingCart}></div>
            <section className={showCart ? "shoppingCartPop" : ""} id="shoppingCartPop">
                <div className="shoppingCartPop__header">Warenkorb</div>
                <div className="shoppingCartPop__content" id="shoppingCartPopContent">
                </div>
                <div className="shoppingCartPop__orderBtn" id="shoppingCartPopOrderBtn">Jetzt Bestellen</div>
            </section>
        </div>
            </div>
    );
};

export default Order;