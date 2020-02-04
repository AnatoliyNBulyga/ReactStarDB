import React from "react";
import { StarshipList } from "../sw-components/item-list";
import ErrorBoundry from "../error-boundry/error-boundry";
import { withRouter } from "react-router-dom";

const StarshipsPage = ({ history }) => {
    return (
        <ErrorBoundry>
            <StarshipList
                onItemSelected={(id) => history.push(id) } />
        </ErrorBoundry>

    );

};
export default withRouter(StarshipsPage);