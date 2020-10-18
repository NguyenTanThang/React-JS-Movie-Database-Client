import axios from "axios";
import {MAIN_PROXY_URL} from "../config/config";
import {message} from "antd";
import {
    GET_ALL_SERIES,
} from "./types";   

const SERIES_URL = `${MAIN_PROXY_URL}/series`;

export const getAllSeries = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(SERIES_URL);
    
            const series = res.data.data;

            return dispatch({
                type: GET_ALL_SERIES,
                payload: {
                    series
                }
            })
        } catch (error) {
            message.error(error.message, 5);
        }
    }
}