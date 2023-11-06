import './items.css';

const Items = ({ addItemToCart, dataArray }) => { // Receive addToCart as a prop
    const plus = "+";

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
                            <div className="plus" onClick={() => addItemToCart(product)}> {plus}</div> {/* Call addToCart when the plus button is clicked */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Items;
