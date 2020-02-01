import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/whith-swapi-service";

const PlanetDetails = (props) => {
    return (
            <ItemDetails {...props}>
                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="RotationPeriod" />
                <Record field="diameter" label="Diameter" />
            </ItemDetails>
    );
};
const mapMethodsToProps = (swapiservice) => ({
    getData: swapiservice.getPlanet,
    getImageUrl:  swapiservice.getPlanetImage
});
export default withSwapiService(mapMethodsToProps)(PlanetDetails);