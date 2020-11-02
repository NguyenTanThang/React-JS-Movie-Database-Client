import React, { Component } from 'react';
import {getPayURL} from "../requests/momoRequests";

class MomoPaymentPage extends Component {

    async componentDidMount() {
        const customerID = localStorage.getItem("userID")
        const amount = localStorage.getItem("amount")
        const payUrl = await getPayURL(customerID, amount);
        window.location = payUrl;
    }

    render() {
        return (
            <></>
        )
    }
}

export default MomoPaymentPage;
