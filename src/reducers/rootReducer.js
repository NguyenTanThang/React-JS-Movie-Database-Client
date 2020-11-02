import movieReducer from "./movieReducer";
import seriesReducer from "./seriesReducer";
import genreReducer from "./genreReducer";
import reviewReducer from "./reviewReducer";
import planReducer from "./planReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    movieReducer,
    seriesReducer,
    genreReducer,
    reviewReducer,
    planReducer
})

export default rootReducer;