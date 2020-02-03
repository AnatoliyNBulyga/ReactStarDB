import React, {Component} from "react";
import { PersonList } from "../sw-components/item-list";
import PersonDetails from "../sw-components/person-details";
import Row from "../Row/Row";
import ErrorBoundry from "../error-boundry/error-boundry";
import { withRouter } from "react-router-dom";

const PeoplePage = ({history, match}) => {
    const {id} = match.params;
    return (
        <ErrorBoundry>
            <Row
                left={<PersonList onItemSelected={(id) => history.push(id) }/>}
                right={<PersonDetails itemId={id} />}
            />
        </ErrorBoundry>

    );

}
export default withRouter(PeoplePage);