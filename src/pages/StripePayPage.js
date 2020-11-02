import React, { Component } from 'react';
import StripeApp from "../components/stripe/StripeApp";
import Navbar from "../components/partials/Navbar";
import {getSubStatus} from "../requests/authRequests";

class StripePayPage extends Component {

    async componentDidMount() {
        const subStatus = await getSubStatus();
        if (subStatus !== "active") {
            this.props.history.push("/pricing");
        }
    }

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
