import React from 'react';
import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";
import withSwapiService from "../hoc-helpers/whith-swapi-service";


const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    );
};
const mapMethodsToProps = (swapiService) => ({
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
});
export default withSwapiService(StarshipDetails, mapMethodsToProps);
