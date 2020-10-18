import axios from "axios";
import {
    MAIN_PROXY_URL
} from "../config/config";
import {
    message
} from "antd";

const MOVIE_URL = `${MAIN_PROXY_URL}/movies`;

export const getMovieByIDAxios = async (movieID) => {
    try {
        const res = await axios.get(`${MOVIE_URL}/${movieID}`);

        const movie = res.data.data;

        console.log(movie);

        return movie;
    } catch (error) {
        message.error(error.message, 5);
    }
}