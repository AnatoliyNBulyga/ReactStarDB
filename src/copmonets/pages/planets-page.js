import React, {Component} from "react";
import { PlanetList } from "../sw-components/item-list";
import PlanetDetails from "../sw-components/planet-details";
import Row from "../Row/Row";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class PlanetsPage extends Component {
    state = {
        selectedItem: 3,
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const { selectedItem } = this.state;
        return (
            <ErrorBoundry>
                <Row
                    left={<PlanetList onItemSelected={this.onItemSelected}/>}
                    right={<PlanetDetails itemId={selectedItem} />}
                />
            </ErrorBoundry>

        );
    }
}