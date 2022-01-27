import React from 'react';
import logo from '../logo.svg';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"

const NavBar = ({marca, s1, s2, s3}) => {
    return (
        <div className="nav">
            <Link to="/">
                <div className="logo">
                    <h1>{marca}</h1>
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div className="secciones">
                <ul>
                    <li><Link to="/">{s1}</Link></li>
                    <li><Link to="/categoria/remeras">{s2}</Link></li>
                    <li><Link to="/categoria/camperas">{s3}</Link></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar
