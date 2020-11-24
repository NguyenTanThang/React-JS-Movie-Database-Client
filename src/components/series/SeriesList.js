import React, { Component } from 'react';
import SeriesItem from "./SeriesItem";
import { Empty } from 'antd';
import Loading from "../partials/Loading";

class SeriesList extends Component {

    renderSeriesItems = () => {
        const {series, loading} = this.props;

        if (loading) {
            return (<Loading/>)
        }

        if (series.length === 0) {
            return (
                <div className="col-12 text-center">
                    <Empty
                        description={
                            "No Series"
                        }
                    />
                </div>
            )
        }

        return series.map(seriesItem => {
            return <SeriesItem key={seriesItem._id} seriesItem={seriesItem}/>
        })
    }

    render() {
        const {renderSeriesItems} = this;

        return (
                    <div className="row">
                        {renderSeriesItems()}
                    </div>
        )
    }
}

export default SeriesList;
