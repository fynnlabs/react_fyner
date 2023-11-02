import React, {useEffect, useState} from 'react';
import axios from "axios";
import FilterBtns from "../../components/filterBtns/FilterBtns";
import "./order.css"

const Order = () => {
    const [dataArray, setDataArray] = useState([]); // Initialize as an empty array
    const headline = "Order"

    useEffect(() => {
        renderProducts();
    }, []);

    const renderProducts = async () => {
        try {
            const result = await axios.get('https://dummyjson.com/products');
            setDataArray(result.data.products); // Set the state to the 'products' array
        } catch (error) {
            console.error('Error fetching data:', error);
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
            <div className="products__wrapper">
                <div className="products" id="products">
                    {dataArray.map((product) => (
                        <div className="imagetext__wrapper" key={product.id}>
                            <div className="textWrapper">
                                <div className="text__headline">
                                    {product.title}
                                </div>
                                <div className="text__description">{product.description}</div>
                            </div>
                            <img src={product.thumbnail} alt="" className="left__image" />
                            <div className="pricePlusWrapper">
                                <div className="price price__color">{`$${product.price}`}</div>
                                <div className="plus">+</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shoppingCart" id="shoppingCart">
                Warenkorb (0)
            </div>
            <div className="blend__background" id="backgroundPop"></div>
            <section className="shoppingCartPop" id="shoppingCartPop">
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