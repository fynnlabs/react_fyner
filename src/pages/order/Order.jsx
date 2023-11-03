import React, {useState} from 'react';
import FilterBtns from "../../components/filterBtns/FilterBtns";
import "./order.css";
import Items from "../../components/items/Items";
import axios from "axios";

const Order = () => {
    const [showCart, setShowcart] = useState(false);
    const headline = "Order";
    const shoppingCartHeadline = "Warenkorb";
    const orderBtnText = "Jetzt Bestellen";
    const [itemsInCart, setItemsInCart] = useState(0);
    const shoppingCartPlaceholder = "Noch keine Einträge im Warenkorb"
    const [dataArray, setDataArray] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [clonedDataArray, setClonedDataArray] = useState([])

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

    //renders the products
    const renderProducts = async (data) => {
        if (typeof data === 'string') {
            try {
                const result = await axios.get(data);
                setDataArray(result.data.products);
                setClonedDataArray(result.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else if (Array.isArray(data)) {
            setDataArray(data);
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
                    <FilterBtns  clonedDataArray={clonedDataArray} renderProducts={renderProducts} dataArray={dataArray} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
                </div>
                <Items addItemToCart={addItemToCart} renderProducts={renderProducts} dataArray={dataArray}/> {/* Pass addToCart as a prop */}
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