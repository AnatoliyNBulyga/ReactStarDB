import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import './app.css';
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    state = {
        hasError: false,
        swapiService: new SwapiService()
    };

    componentDidCatch(error, errorInfo) {
      console.log('componentDidCatch()');
      this.setState({hasError: true});
    }
    
    onServiceChange = () => {
        this.setState( ({swapiService}) => {
            const Service = swapiService instanceof SwapiService
                            ? DummySwapiService
                            : SwapiService;
            return {
                swapiService: new Service()
            }
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
 
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />
                            <Route path="/"
                                   render={() => <h2> Welcome to StarDB</h2>}
                                   exact />
                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" component={StarshipsPage} />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

export default App;