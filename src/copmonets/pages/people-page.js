import React, {Component} from "react";
import { PersonList } from "../sw-components/item-list";
import PersonDetails from "../sw-components/person-details";
import Row from "../Row/Row";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class PeoplePage extends Component {
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
                    left={<PersonList onItemSelected={this.onItemSelected}/>}
                    right={<PersonDetails itemId={selectedItem} />}
                />
            </ErrorBoundry>

        );
    }
}