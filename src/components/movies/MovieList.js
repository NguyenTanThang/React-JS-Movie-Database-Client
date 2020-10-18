import React, { Component } from 'react';
import MovieItem from "./MovieItem";
import { Empty } from 'antd';

class MovieList extends Component {

    renderMovieItems = () => {
        const {movies} = this.props;

        if (movies.length === 0) {
            return (
                <div className="col-12 text-center">
                    <Empty
                        description={
                            "No Movies"
                        }
                    />
                </div>
            )
        }

        return movies.map(movieItem => {
            return (
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                    <MovieItem key={movieItem._id} movieItem={movieItem}/>
                </div>
            )
        })
    }

    render() {
        const {renderMovieItems} = this;

        return (
                    <div className="row">
                        {renderMovieItems()}
                    </div>
        )
    }
}

export default MovieList;
