import React, { Component } from 'react';
import {getEpisodesBySeriesIDAxios} from "../requests/episodeRequests";
import MovieVideo from '../components/movies/MovieVideo';
import TabGenerator from '../components/partials/TabGenerator';

class MovieDetailsPage extends Component {

    state = {
        episodeList: []
    }

    async componentDidMount() {
        const seriesID = this.props.match.params.seriesID;

        const episodeList = await getEpisodesBySeriesIDAxios(seriesID);

        this.setState({
            episodeList
        })
    }

    renderEpisodeListWatchItems = () => {
        const {episodeList} = this.state;
        console.log(episodeList);
        
        if (!episodeList || episodeList.length === 0) {
            return(<></>);
        }

        const tabContents = episodeList.map(episodeItem => {
            const {_id, episodeURL} = episodeItem;
            return (
                <div key={_id} className="series-watch-container">
                    <MovieVideo videoSRC={episodeURL}/>
                </div>
            )
        })

        console.log(tabContents);

        const tabHeaders = episodeList.map(episodeItem => {
            const {episodeNum} = episodeItem;
            return (
                `Ep. ${episodeNum}`
            )
        })

        console.log(tabHeaders);

        return <TabGenerator tabContents={tabContents} tabHeaders={tabHeaders}/>
    }

    render() {
        const {renderEpisodeListWatchItems} = this;

        return (
            <div className="container episode-watch-tab-container">
                <div className="row">
                    <div className="col-12">
                        {renderEpisodeListWatchItems()}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetailsPage;
