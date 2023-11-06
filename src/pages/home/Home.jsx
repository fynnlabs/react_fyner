import React, {useEffect} from 'react';
import './home.css'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0 ,0)
    }, []);

    return (
        <div className="content__wrapper">
        <div className="content">
            <div className="image__background">
                <a className="cta__btn" href="">
                    View Products
                </a>
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