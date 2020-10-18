import React, { Component } from 'react';
import {menuNav} from "../../config/jqueryCode";
import {Link} from "react-router-dom";

export default class Navbar extends Component {

    componentDidMount() {
        menuNav();
    }

    render() {
        return (
	<header className="header">
    <div className="header__wrap">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header__content">

                        <Link to="/" className="header__logo">
                            <h1><span>{"LET'S"}</span>FLIX</h1>
                        </Link>

                        <ul className="header__nav">
                            <li className="header__nav-item">
                                <Link to="/" className="header__nav-link">Home</Link>
                            </li>

                            <li className="header__nav-item">
                                <Link to="/browse" className="header__nav-link">Browse</Link>
                            </li>

                            <li className="header__nav-item">
                                <Link to="/pricing" className="header__nav-link">Pricing Plan</Link>
                            </li>

                            <li className="header__nav-item">
                                <Link to="/help" className="header__nav-link">Help</Link>
                            </li>

                        </ul>

                        <div className="header__auth">
                            <Link to="/sign-in" className="header__sign-in">
                                <i className="fas fa-sign-in-alt"></i>
                                <span>sign in</span>
                            </Link>

                        </div>

                        <button className="header__btn" type="button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</header>
        )
    }
}
