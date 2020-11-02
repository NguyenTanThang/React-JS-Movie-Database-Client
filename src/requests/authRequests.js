import axios from "axios";
import {
    MAIN_PROXY_URL
} from "../config/config";
import {
    message
} from "antd";

const USER_URL = `${MAIN_PROXY_URL}/customers`;
const SUB_URL = `${MAIN_PROXY_URL}/subscriptions`;
const CUSTOMER_URL = `${MAIN_PROXY_URL}/customers`;

export const getAuthStatus = async () => {
    try {
        const customerID = localStorage.getItem("userID");

        if (!customerID) {
            return false;
        }

        const res = await axios.get(`${CUSTOMER_URL}/${customerID}`);

        const {success} = res.data;
        const user = res.data.data;

        if (!success) {
            return false;
        }

        if (!user) {
            return false;
        }

        return true;
    } catch (error) {
        message.error(error.message, 5);
    }
}

export const getSubStatus = async () => {
    try {
        const customerID = localStorage.getItem("userID");
        const res = await axios.get(`${SUB_URL}/status/customerID/${customerID}`);

        const {success} = res.data;
        const resMessage = res.data.message;

        if (!success) {
            return message.error(resMessage, 5);
        }

        const status = res.data.data;

        console.log(status);

        return status;
    } catch (error) {
        message.error(error.message, 5);
    }
}

export const logout = () => {
    localStorage.clear();
}

export const setCurrentUser = (user) => {
    localStorage.setItem("userID", user.customerItem._id);
}

export const signup = async (newUser) => {
    try {
        const {username, email, password} = newUser;
        const res = await axios.post(`${USER_URL}/signup`, {
            username, email, password
        });

        const {success} = res.data;
        const resMessage = res.data.message;

        if (!success) {
            return message.error(resMessage, 5);
        }

        const data = res.data;

        console.log(data);

        message.success("Please go to the email to validate the new account to login", 5);

        return data;
    } catch (error) {
        message.error(error.message, 5);
    }
}

export const login = async (currentUser) => {
    try {
        const {email, password} = currentUser;

        const res = await axios.post(`${USER_URL}/login`, {
            email, password
        });

        const {success} = res.data;
        const resMessage = res.data.message;

        if (!success) {
            return message.error(resMessage, 5);
        }

        const data = res.data;
        const user = res.data.data;

        console.log(data);

        message.success("Successfully logged in", 5);
        setCurrentUser(user);

        return data;
    } catch (error) {
        message.error(error.message, 5);
    }
}