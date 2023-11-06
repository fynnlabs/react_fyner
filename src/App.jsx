import React from 'react';
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Order from "./pages/order/Order";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import About from "./pages/aboutUs/About";

const App = () => {
    return (
        <div id="root">
            <Navigation />
            <Routes>
                <Route index element={<Home />} />
                <Route path="orders" element={<Order />} />
                <Route path="products" element={<Products />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};


export default App;