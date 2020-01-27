import React from 'react';
import ItemList from '../item-list/item-list';
import withData from '../hoc-helpers/withData';
import withSwapiService from "../hoc-helpers/whith-swapi-service";

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
          <Wrapped {...props} >
              {fn}
          </Wrapped>
        );
    }
};

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

const PersonList = withSwapiService(
    withData(
    withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);
const PlanetList = withSwapiService(
    withData(
    withChildFunction(ItemList, renderName)), mapPlanetsMethodsToProps);
const StarshipList = withSwapiService(
    withData(
    withChildFunction(ItemList, renderModelAndName)),mapStarshipsMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}