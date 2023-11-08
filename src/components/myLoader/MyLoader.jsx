import React from 'react';
import './style.css'

const MyLoader = () => {
    const testArray = [1,2,3,4,5,6,7];

    return (
        testArray.map(() => (
            <div className="skeleton__wrapper">
                <div className="skeleton__image" ></div>
                <div className="skeleton__textWrapper">
                    <div className="skeleton__header"></div>
                    <div className="skeleton__description"></div>
                </div>
            </div>))
    );
};

export default MyLoader;