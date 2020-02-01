import React from 'react';
import ItemList from '../item-list/item-list';
import withData from '../hoc-helpers/withData';
import withSwapiService from "../hoc-helpers/whith-swapi-service";
import withChildFunction from "../hoc-helpers/whith-child-function";
import compose from "../hoc-helpers/compose";

const renderName = ( {name} ) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;
const mapPersonMethodsToProps = (swapiservice) => ({
   getData: swapiservice.getAllPeople
});
const mapPlanetsMethodsToProps = (swapiservice) => ({
    getData: swapiservice.getAllPlanets
});
const mapStarshipsMethodsToProps = (swapiservice) => ({
    getData: swapiservice.getAllStarships
});

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetsMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipsMethodsToProps),
    withData,
    withChildFunction(renderModelAndName)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}