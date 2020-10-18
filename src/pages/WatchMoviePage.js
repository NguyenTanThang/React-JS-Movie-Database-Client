import React, { Component } from 'react';
import {getMovieByIDAxios} from "../requests/movieRequests";
import MovieVideo from '../components/movies/MovieVideo';

class MovieDetailsPage extends Component {

    state = {
        movieItem: ""
    }

    async componentDidMount() {
        const movieID = this.props.match.params.movieID;

        const movieItem = await getMovieByIDAxios(movieID);

        this.setState({
            movieItem
        })
    }

    render() {
        const {movieItem} = this.state;
        const {movieURL, name} = movieItem;

        if (!movieItem) {
            return(<></>);
        }

        return (
            <div>
                <div className="container movie-watch-container">
                    <MovieVideo videoSRC={movieURL}/>
                </div>
            </div>
        )
    }
}

export default MovieDetailsPage;
