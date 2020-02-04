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
import LoginPage from "../pages/login-page";
import SecretPage from "../pages/secret-page";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";

class App extends Component {
    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

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
    onLogin = () => {
       this.setState( ({isLoggedIn}) => ({
           isLoggedIn: true
       }));
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
                            <Switch>
                                <Route path="/"
                                       render={() => <h2> Welcome to StarDB</h2>}
                                       exact />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets/" component={PlanetsPage} />
                                <Route path="/starships/" exact component={StarshipsPage} />
                                <Route path="/starships/:id"
                                       render={ ({ match }) => {
                                          const { id } = match.params;
                                          return <StarshipDetails itemId={id}/>
                                       } } />
                                <Route path="/login" render={() => {
                                    return <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}/>
                                }} />
                                <Route path="/secrete" render={() => {
                                    return <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                                }} />

                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

export default App;