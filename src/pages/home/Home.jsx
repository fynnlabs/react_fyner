import React, {useEffect} from 'react';
import './home.css'
import {Link} from "react-router-dom";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0 ,0)
    }, []);

    return (
        <div className="content__wrapper">
        <div className="content">
            <div className="image__background">
                <Link className="cta__btn" to="/products">
                    View Products
                </Link>
            </div>
            <div className="catchy__text">
                Welcome to the Fyner!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, cumque eligendi esse laudantium magnam
                molestiae perspiciatis quibusdam rerum suscipit. Sapiente.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
        </div>
</div>
    );
};

export default Home;