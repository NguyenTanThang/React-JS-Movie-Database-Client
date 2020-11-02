import React, { Component } from 'react';
import {getPayURL} from "../requests/momoRequests";
import {getSubStatus} from "../requests/authRequests";

class MomoPaymentPage extends Component {

    async componentDidMount() {
        const subStatus = await getSubStatus();
        if (subStatus === "active") {
            this.props.history.push("/");
        }
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
