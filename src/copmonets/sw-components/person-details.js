import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/whith-swapi-service";

const PersonDetails = ({itemId, swapiService:{getPerson, getPersonImage}}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
};
export default withSwapiService(PersonDetails);