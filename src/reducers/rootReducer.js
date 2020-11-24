import movieReducer from "./movieReducer";
import seriesReducer from "./seriesReducer";
import genreReducer from "./genreReducer";
import reviewReducer from "./reviewReducer";
import planReducer from "./planReducer";
import loadingReducer from "./loadingReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    movieReducer,
    seriesReducer,
    genreReducer,
    reviewReducer,
    planReducer,
    loadingReducer
})

export default rootReducer;