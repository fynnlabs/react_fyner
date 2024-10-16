import './style.css'
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

export default function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [ifScrolled, setIfScrolled] = useState('');
    const [isItDesktop, setIsItDesktop] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const ourProductLabel = 'Our Products';
    const orderLabel = 'Order';
    const aboutUsLabel = 'About us';
    const nameLabel = "Fyner";
    const hamburgerLength = [1,2,3];


    //checks if window is desktop or mobile size
    useEffect( () => {
        window.addEventListener('resize', () =>{
            setWindowWidth(window.innerWidth);
        });
        window.addEventListener('load', () =>{
            setWindowWidth(window.innerWidth);
            if (windowWidth > 640){
                setIsItDesktop(true);
            } else {
                setIsItDesktop(false);
            }
        })
    }, [windowWidth]);

    useEffect(() => {
        if (windowWidth > 640){
            setIsItDesktop(true);
        } else {
            setIsItDesktop(false);
        }
    }, [windowWidth]);

    //when site is scrolled adds background to the navBar
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setIfScrolled('');
            } else {
                setIfScrolled('nav__background');
            }
        });
    }, []);


    const toggleNavigation = () => {
        setIsNavOpen((prev) => !prev);
    };

    return (
        <div className={isNavOpen ? 'nav__wrapper nav__background' : `nav__wrapper ${ifScrolled}`} id="navigation">
            <nav className="navigation">
                <Link className="navigation__logo" to="/">
                    {nameLabel}
                </Link>
                <div className="navigation__links" onClick={isItDesktop ? null  : toggleNavigation}>
                    <div className="hamburger__menu" id="hamburgerMenu">
                        { hamburgerLength.map((index) => (
                            <div key={index} className="bar"></div>
                            ))
                        }
                    </div>
                    {(isNavOpen || isItDesktop)&&
                        <ul className="link__list show" id="linkList">
                            <li className="link">
                                <NavLink className={({ isActive}) =>
                                isActive ? "link__active": "link__inactive"
                                } to="/products">{ourProductLabel}</NavLink>
                            </li>
                            <li className="link">
                                <NavLink className={({ isActive}) =>
                                    isActive ? "link__active": "link__inactive"
                                } to="/orders">{orderLabel}</NavLink>
                            </li>
                            <li className="link">
                                <NavLink className={({ isActive}) =>
                                    isActive ? "link__active": "link__inactive"
                                } to="/about">{aboutUsLabel}</NavLink>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
        </div>
    )
}