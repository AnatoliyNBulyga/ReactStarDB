import React, {Component} from "react";
import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
      this.setState({hasError: true})
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const {selectedPerson, hasError} = this.state;
        if (hasError) {
            return <ErrorIndicator/>
        }
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.props.getData}
                        renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson}/>
                </div>
            </div>
        )
    }
}