import axios from "axios";
import React, { useEffect, useState } from 'react';
import './products.css';
import FilterBtns from "../../components/filterBtns/FilterBtns";
import Items from "../../components/items/Items";

const Products = () => {
    const [dataArray, setDataArray] = useState([]); // Initialize as an empty array
    const [clonedDataArray, setClonedDataArray] = useState([])
    const headline = "Our Products"

    useEffect(() => {
        loadProducts();
        window.scrollTo(0 ,0)
    }, []);

    const loadProducts = async () => {
        try {
            const result = await axios.get('https://dummyjson.com/products');
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
           <Items dataArray={dataArray}/>
        </div>
    );
};

export default Products;