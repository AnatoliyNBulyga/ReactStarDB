import React from "react";

const {
    Provider : SwapiServiceProvider,
    Consumer : SwapiServiceConsumer
} = React.createContext(null);

export {
    SwapiServiceConsumer,
    SwapiServiceProvider
};