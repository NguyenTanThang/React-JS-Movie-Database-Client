import React, { Component } from 'react';
import StripeApp from "../components/stripe/StripeApp";
import Navbar from "../components/partials/Navbar";

class StripePayPage extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <StripeApp/>
            </>
        )
    }
}

export default StripePayPage;
