import axios from "axios";
import React, { useEffect, useState } from 'react';
import './products.css';
import FilterBtns from "../../components/filterBtns/FilterBtns";

const Products = () => {
    const [dataArray, setDataArray] = useState([]); // Initialize as an empty array
    const [clonedDataArray, setClonedDataArray] = useState([])
    const headline = "Our Products"

    useEffect(() => {
        loadProducts('https://dummyjson.com/products');
    }, []);

    const loadProducts = async (data) => {
        try {
            const result = await axios.get(data);
            setDataArray(result.data.products);
            setClonedDataArray(result.data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="content__wrapper">
            <div className="header__wrapper">
                <header className="header">
                    {headline}
                </header>
                <div className="underline"></div>
                <FilterBtns clonedDataArray={clonedDataArray} setDataArray={setDataArray}/>
            </div>
            <div className="products__wrapper">
                <div className="products" id="products">
                    {dataArray.map((product) => (
                        <div className="imagetext__wrapper" key={product.id}>
                            <img src={product.thumbnail} alt="" className="left__image" />
                            <div className="headDesWrapper">
                                <div className="text__headline">
                                    {product.title}
                                    <div className="price__color">{`$${product.price}`}</div>
                                </div>
                                <div className="text__description">{product.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;