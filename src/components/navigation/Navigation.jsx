import './navigation.css'
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";


export default function Navigation() {
    //variables
    /**
     * useState = get(Value of variable) / set(set new value of variable)
     */
    const [isNavOpen, setIsNavOpen] = useState(false)
    const ourProductLabel = 'Our Products'
    const orderLabel = 'Order'
    const aboutUsLabel = 'About us'
    const nameLabel = "Fyner"
    const hamburgerLength = [1,2,3]
    const [ifScrolled, setIfScrolled] = useState('')

    // useEffects
    /**
     * reactive functions
     * will either get triggered on page load or when dependency is met
     */

    // normal functions
    const toggleNavigation = () => {
        setIsNavOpen((prev) => !prev)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
                if (window.scrollY < 15) {
                    setIfScrolled('');
                } else {
                    setIfScrolled('nav__background');
                }
            });
        }, [])


    return (
        <div className={isNavOpen ? 'nav__wrapper nav__background' : `nav__wrapper ${ifScrolled}`} id="navigation">
            <nav className="navigation">
                <Link className="navigation__logo" to="/home">
                    {nameLabel}
                </Link>
                <div className="navigation__links" onClick={toggleNavigation}>
                    <div className="hamburger__menu" id="hamburgerMenu">
                        { hamburgerLength.map((index) => (
                            <div key={index} className="bar"></div>
                            ))
                        }
                    </div>
                    { isNavOpen &&
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

