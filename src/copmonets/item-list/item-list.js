import React from 'react';

import './item-list.css';

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabels } = props;
    const renderItems = (arr) => {
        return arr.map( (item) =>{
            const {id} = item;
            const label = renderLabels(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    };

    const items = renderItems(data);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
    
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

export default ItemList;