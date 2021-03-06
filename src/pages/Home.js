import React, { Component } from 'react';
import {
    getAllMovies
} from "../actions/movieActions";
import {
    getAllSeries
} from "../actions/seriesActions";
import {connect} from "react-redux";
import MovieList from "../components/movies/MovieList";
import SeriesList from "../components/series/SeriesList";
import HomeHeader from "../components/partials/HomeHeader";
import TabGenerator from "../components/partials/TabGenerator";
import {Link} from "react-router-dom";
import Navbar from "../components/partials/Navbar";

class Home extends Component {

    componentDidMount() {
        this.props.getAllMovies();
        this.props.getAllSeries();
    }

    renderTabGen = () => {
        const {movies, series, loading} = this.props;
        let currentMovies = movies;
        let currentSeries = series;

        currentMovies = currentMovies.slice(0, 12);
        currentSeries = currentSeries.slice(0, 12);

        const tabContents = [
            (
                <>
                    <MovieList movies={currentMovies} loading={loading}/>
                    <Link to="/browse" className="section__btn">
                        Browse More
                    </Link>
                </>
            ),
            (
                <>
                    <SeriesList series={currentSeries} loading={loading}/>
                    <Link to="/browse" className="section__btn">
                        Browse More
                    </Link>
                </>
            )
        ]

        const tabHeaders = [
            "Movies",
            "Series"
        ]

        return <TabGenerator tabContents={tabContents} tabHeaders={tabHeaders}/>
    }

    render() {
        const {renderTabGen} = this;

        return (
            <>
                <Navbar/>

                <HomeHeader/>

                <section className="content section-padding">
                    <div className="content__head">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="content__title">New Releases</h2>

                                    {renderTabGen()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMovies: () => {
            dispatch(getAllMovies())
        },
        getAllSeries: () => {
            dispatch(getAllSeries())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer.movies,
        series: state.seriesReducer.series,
        loading: state.loadingReducer.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
