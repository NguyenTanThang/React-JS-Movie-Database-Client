import axios from "axios";
import {MAIN_PROXY_URL} from "../config/config";
import {message} from "antd";
import {
    GET_ALL_MOVIES,
} from "./types";   

const MOVIE_URL = `${MAIN_PROXY_URL}/movies`;

export const getAllMovies = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(MOVIE_URL);
    
            const movies = res.data.data;

            console.log(movies);
    
            return dispatch({
                type: GET_ALL_MOVIES,
                payload: {
                    movies
                }
            })
        } catch (error) {
            message.error(error.message, 5);
        }
    }
}