import './style.css';
import { v4 as uuidv4 } from 'uuid';

const MyLoader = () => {
    const timesMyLoader = [1,2,3,4,5,6,7];

    return (
        timesMyLoader.map(() => (
            <div key={uuidv4()} className="wrapper">
                <div className="skeleton__wrapper">
                    <div  className="product__skeletonWrapper">
                        <div className="skeleton__image" />
                        <div className="skeleton__textWrapper">
                            <div className="skeleton__header" />
                            <div className="skeleton__description" />
                        </div>
                    </div>
                </div>
            </div>

            ))
    );
};

export default MyLoader;