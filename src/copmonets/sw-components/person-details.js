import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/whith-swapi-service";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
};
const mapMethodsToProps = (swapiService) => ({
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
});
export default withSwapiService(mapMethodsToProps)(PersonDetails);