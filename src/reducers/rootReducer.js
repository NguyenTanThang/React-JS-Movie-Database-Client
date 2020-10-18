import movieReducer from "./movieReducer";
import seriesReducer from "./seriesReducer";
import genreReducer from "./genreReducer";
import reviewReducer from "./reviewReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    movieReducer,
    seriesReducer,
    genreReducer,
    reviewReducer
})

export default rootReducer;