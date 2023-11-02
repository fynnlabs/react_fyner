import React, {useEffect, useState} from 'react';
import axios from "axios";
import './items.css'

const Items = () => {
    const [dataArray, setDataArray] = useState([]); // Initialize as an empty array

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
    );
};

export default Items;