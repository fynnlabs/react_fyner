import React, {useEffect, useState} from 'react';
import FilterBtns from "../../components/filterBtns/FilterBtns";
import "./order.css";
import Items from "../../components/items/Items";
import axios from "axios";

const Order = () => {
    const [showCart, setShowcart] = useState(false);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [dataArray, setDataArray] = useState([]);
    const [clonedDataArray, setClonedDataArray] = useState([])
    const headline = "Order";
    const shoppingCartHeadline = "Warenkorb";
    const orderBtnText = "Jetzt Bestellen";
    const shoppingCartPlaceholder = "Noch keine Einträge im Warenkorb"

    let shoppingCartItems = [];
    let cartItems = []
    let clonedProduct

    //toggles the shoppingCart
    const showShoppingCart = () => {
        setShowcart(!showCart);
    }

    //adds items to shoppingCart
    const addItemToCart = (product) => {
        setItemsInCart(itemsInCart + 1);
        cartItems = shoppingCartItems.find(item => item.id === product.id);
        if (cartItems) {
            cartItems.quantity +=1
        } else {
            clonedProduct = {...product, quantity: 1};
            shoppingCartItems.push(clonedProduct);
        }
    }

    //loads the products
    const loadProducts = async () => {
            try {
                const result = await axios.get('https://dummyjson.com/products');
                setDataArray(result.data.products);
                setClonedDataArray(result.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div>
            <div className="content__wrapper">
                <div className="header__wrapper">
                    <header className="header">
                        {headline}
                    </header>
                    <div className="underline"></div>
                    <FilterBtns clonedDataArray={clonedDataArray} setDataArray={setDataArray}/>
                </div>
                <Items addItemToCart={addItemToCart} dataArray={dataArray}/>
                <div className="shoppingCart" id="shoppingCart" onClick={showShoppingCart}>
                    {`Warenkorb (${itemsInCart})`}
                </div>
            <div className={showCart ? "blend__background" : ""} id="backgroundPop" onClick={showShoppingCart}></div>
            <section className={showCart ? "shoppingCartPop" : ""} id="shoppingCartPop">
                <div className="shoppingCartPop__header">{showCart ? shoppingCartHeadline : ""}</div>
                <div className="shoppingCartPop__content" id="shoppingCartPopContent">
                    {itemsInCart === 0 && shoppingCartItems.length === 0 && showCart ? shoppingCartPlaceholder : shoppingCartItems.map((product) => (
                        <div className="shoppingCartItem__wrapper" key={product.id}>
                            <div className="shoppingCartItem__name">{product.title} {product.quantity}</div>
                            <div className="shoppingCartItem__price">{product.price * product.quantity}</div>
                        </div>
                    ))
                    }
                </div>
                <div className="shoppingCartPop__orderBtn" id="shoppingCartPopOrderBtn">{showCart ? orderBtnText : ""}</div>
            </section>
        </div>
            </div>
    );
};

export default Order;