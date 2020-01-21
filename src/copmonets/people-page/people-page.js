import React, {Component} from "react";
import './people-page.css';
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import Row from "../Row/Row";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const {selectedPerson} = this.state;
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.props.getData} >

                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        );
        const personDetails = (
            <ItemDetails personId={selectedPerson}/>
        );
        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
            
        );
    }
}