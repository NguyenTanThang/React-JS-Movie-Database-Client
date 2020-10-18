import React, { Component } from 'react';
import TabGenerator from "../components/partials/TabGenerator";
import {getSeriesByIDAxios} from "../requests/seriesRequests";
import FaceBookCommentsTest from "../components/partials/FaceBookCommentsTest";
import SeriesDetails from "../components/series/SeriesDetails";
import MovieDescription from "../components/movies/MovieDescription";
import {
    getAllSeries
} from "../actions/seriesActions";
import {connect} from "react-redux";
import SeriesItem from "../components/series/SeriesItem";
import {getRandom} from "../utils/utils";
import {Empty} from "antd";

class SeriesDetailsPage extends Component {

    state = {
        seriesItem: ""
    }

    async componentDidMount() {
        this.props.getAllSeries();

        const seriesID = this.props.match.params.seriesID;

        const seriesItem = await getSeriesByIDAxios(seriesID);

        this.setState({
            seriesItem
        })
    }

    renderRNGSeriesItems = () => {
        const {series} = this.props;

        if (series.length >= 6) {
            let currentSeries = getRandom(series, 6);
        
            return currentSeries.map(seriesItem => {
                return (
                    <div className="col-6 col-sm-4 col-lg-6">
                        <SeriesItem seriesItem={seriesItem} key={seriesItem._Id}/>
                    </div>
                )
            })
        } else {
            return (
                <div className="col-12 text-center pb-4">
                    <Empty description="No Series"/>
                </div>
            )
        }
        
    }

    renderTabGen = () => {
        const seriesID = this.props.match.params.seriesID;
        const {seriesItem} = this.state;
        const {description} = seriesItem;

        const tabContents = [
            (
                <>
                    <MovieDescription description={description}/>
                </>
            ),
            (
                <>
                    <FaceBookCommentsTest seriesID={seriesID}/>
                </>
            )
        ]

        const tabHeaders = [
            "Description",
            "Comments"
        ]

        return <TabGenerator tabContents={tabContents} tabHeaders={tabHeaders}/>
    }

    render() {
        const {renderTabGen, renderRNGSeriesItems} = this;
        const {seriesItem} = this.state;
        const seriesIDFromPage = this.props.match.params.seriesID;

        return (
            <div>
                <SeriesDetails seriesIDFromPage={seriesIDFromPage} seriesItem={seriesItem}/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-xl-8 movie-details-tab">
                            {renderTabGen()}
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="section__title section__title--sidebar">Watch more...</h2>
                                </div>

                                {renderRNGSeriesItems()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllSeries: () => {
            dispatch(getAllSeries())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        series: state.seriesReducer.series
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesDetailsPage);
