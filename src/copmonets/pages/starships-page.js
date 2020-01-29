import React, {Component} from "react";
import { StarshipList } from "../sw-components/item-list";
import StarshipDetails from "../sw-components/starship-details";
import Row from "../Row/Row";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class StarshipsPage extends Component {
    state = {
        selectedItem: 10,
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const { selectedItem } = this.state;
        return (
            <ErrorBoundry>
                <Row
                    left={<StarshipList onItemSelected={this.onItemSelected}/>}
                    right={<StarshipDetails itemId={selectedItem} />}
                />
            </ErrorBoundry>

        );
    }
}