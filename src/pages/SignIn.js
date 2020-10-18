import React, { Component } from 'react';
import {sectionBG} from "../config/jqueryCode";
import sectionBgImage from "../images/section.jpg";
import {Link} from "react-router-dom";

export default class SignIn extends Component {

    componentDidMount() {
        sectionBG()
    }

    render() {
        return (
            <div className="sign section--bg" data-bg={sectionBgImage}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <form action="#" className="sign__form">
                                <Link to="/" className="sign__logo">
                                    <h1><span>{"LET'S"}</span>FLIX</h1>
                                </Link>

                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="Email"/>
                                </div>

                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="Password"/>
                                </div>

                                <button className="sign__btn" type="button">Sign in</button>

                                <span className="sign__text">{"Don't"} have an account? <Link to="/sign-up">Sign up!</Link></span>

                                <span className="sign__text">
                                    <Link to="/forgot-password">Forgot password?</Link>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
