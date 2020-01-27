import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemDetails, {Record} from '../item-details/item-details';
import './app.css';
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import {
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components/item-list';
import PersonDetails from "../sw-components/person-details";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";
import DummySwapiService from "../../services/dummy-swapi-service";

class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false,
        swapiService: new DummySwapiService()
    };
    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            };
        });
    };

    componentDidCatch(error, errorInfo) {
      console.log('componentDidCatch()');
      this.setState({hasError: true});
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };
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
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage} = this.state.swapiService;
        
        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth Year" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );
        const starshipDetails = (
              <ItemDetails
                  itemId={5}
                  getData={getStarship}
                  getImageUrl={getStarshipImage}>
                  <Record field="model" label="Model" />
                  <Record field="length" label="Length" />
                  <Record field="costInCredits" label="Cost" />
              </ItemDetails>
        );
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />

                        <PersonDetails itemId={11}/>
                        <PlanetDetails itemId={3}/>
                        <StarshipDetails itemId={9}/>

                        <PersonList />

                        <PlanetList />

                        <StarshipList />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

export default App;