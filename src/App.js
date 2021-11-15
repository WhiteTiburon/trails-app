import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {Component} from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TrailPage from "./pages/TrailPage";
import MapPage from "./pages/MapPage";
import NavBar from "./NavBar";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar/>
                    <div id="page-body">
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/about" component={AboutPage} />
                    <Route path="/map" component={MapPage} />
                    <Route path="/trail/:name" component={TrailPage} />
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
