import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'antd/dist/antd.css';
import "video-react/dist/video-react.css";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Help from "./pages/Help";
import PricingPlan from "./pages/PricingPlan";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SeriesDetailsPage from "./pages/SeriesDetailsPage";
import WatchMoviePage from "./pages/WatchMoviePage";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/browse" component={Browse}/>
          <Route path="/help" component={Help}/>
          <Route path="/pricing" component={PricingPlan}/>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/movies-details/:movieID" component={MovieDetailsPage}/>
          <Route path="/series-details/:seriesID" component={SeriesDetailsPage}/>
          <Route path="/watch-movie/:movieID" component={WatchMoviePage}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
