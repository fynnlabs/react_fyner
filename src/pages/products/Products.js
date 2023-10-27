import React, {useEffect, useState} from 'react';
import "./products.css"

const Products = () => {
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                console.log('data' , data)
                setDataArray(data)
            })
    }, []);

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
            {/* here the on the page wanted products get added via Js */
                dataArray.map((products)=>(
                    <div className="imagetext__wrapper">
                        <img src={products.thumbnail} alt="" className="left__image"></img>
                        <div className="headDesWrapper">
                            <div className="text__headline">
                                {products.title}
                                <div className="price__color">{`$${products.price}`}</div>
                            </div>
                            <div className="text__description">{products.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
</div>
    );
};

export default Products;