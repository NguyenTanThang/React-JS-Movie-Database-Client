import axios from "axios";
import {
    MAIN_PROXY_URL
} from "../config/config";
import {
    message
} from "antd";

const MOMOS_URL = `${MAIN_PROXY_URL}/momos`;

export const getPayURL = async (customerID, amount) => {
    try {
        const res = await axios.get(`${MOMOS_URL}/amount/${amount}/customerID/${customerID}`);

        const payURL = res.data.payUrl;

        return payURL;
    } catch (error) {
        message.error(error.message, 5);
    }
}