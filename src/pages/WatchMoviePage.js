import React, { Component } from 'react';
import {getMovieByIDAxios} from "../requests/movieRequests";
import MovieVideo from '../components/movies/MovieVideo';
import Navbar from "../components/partials/Navbar";
import {getSubStatus} from "../requests/authRequests";

class WatchMoviePage extends Component {

    state = {
        movieItem: ""
    }

    async componentDidMount() {
        const movieID = this.props.match.params.movieID;

        const movieItem = await getMovieByIDAxios(movieID);
        const subStatus = await getSubStatus();

        if (subStatus !== "active") {
            this.props.history.goBack();
        }

        this.setState({
            movieItem
        })
    }

    render() {
        const {movieItem} = this.state;
        const {movieURL} = movieItem;

        if (!movieItem) {
            return(<></>);
        }

        return (
            <>
                <Navbar/>
                <div className="container movie-watch-container">
                    <MovieVideo videoSRC={movieURL}/>
                </div>
            </>
        )
    }
}

export default WatchMoviePage;
