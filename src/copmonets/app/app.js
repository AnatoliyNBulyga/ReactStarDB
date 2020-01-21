import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import ItemDetails, {Record} from '../item-details/item-details';

import './app.css';
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../Row/Row";

class App extends Component {
    swapiService = new SwapiService();
    state = {
        showRandomPlanet: true,
        hasError: false
    };
    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
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

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;
        
        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender" />
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
                <div className="stardb-app">
                    <Header/>

                    <Row
                        left={personDetails}
                        right={starshipDetails} />
                </div>
            </ErrorBoundry>
        );
    }
}

export default App;