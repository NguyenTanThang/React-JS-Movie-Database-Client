import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class MovieItem extends Component {
    render() {
        const {movieItem} = this.props;
        const {posterURL, name, genres, _id, rating} = movieItem;

        return (
							<div className="card">
								<div className="card__cover">
									<img src={posterURL} alt=""/>
									<Link target={"_blank"} to={`/movies-details/${_id}`} className="card__play">
										<i className="fas fa-play" aria-hidden="true"></i>
									</Link>
								</div>
								<div className="card__content">
                                    <h3 className="card__title">
                                        <Link target={"_blank"} to={`/movies-details/${_id}`}>{name}</Link>
                                    </h3>
                                    <span className="card__category">
                                        {genres.map(genre => {
                                            return (
										        <Link to="/" key={genre}>{genre}</Link>
                                            )
                                        })}
									</span>
                                    <span className="card__rate">
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    {rating.toFixed(1)}/10</span>
								</div>
							</div>
        )
    }
}
