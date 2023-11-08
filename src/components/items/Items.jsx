import './style.css';
import {useLocation} from "react-router-dom";

const Items = ({ addItemToCart, dataArray }) => {
    const plus = "+";
    const pathName = useLocation();

    return (
        <div className="products__wrapper">
            <div className="products" id="products">
                {pathName.pathname === "/orders" ? dataArray.map((product) => (
                    <div className="imagetext__wrapper" key={product.id}>
                        <div className="textWrapper">
                            <div className="text__headline">
                                {product.title}
                            </div>
                            <div className="text__description">{product.description}</div>
                        </div>
                        <img src={product.thumbnail} alt="" className="image" />
                        <div className="pricePlusWrapper">
                            <div className="price price__color">{`$${product.price}`}</div>
                            <div className="plus" onClick={() => addItemToCart(product)}> {plus}</div> {/* Call addToCart when the plus button is clicked */}
                        </div>
                    </div>
                )) : dataArray.map((product) => (
                    <div className="imagetext__wrapper" key={product.id}>
                        <div className="textWrapper">
                            <div className="text__headline">
                                {product.title}
                                <div className="price">{`$${product.price}`}</div>
                            </div>
                            <div className="text__description">{product.description}</div>
                        </div>
                        <img src={product.thumbnail} alt="" className="image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Items;
