import React from 'react';
import Item from './Item';
import ItemList from './ItemList';

// Item : Item shows item vertically
const ItemListContainer = ({ inputItems, onClickHandler }) => {
    const itemList = inputItems.map(
        ({id, text}) => (
            <Item 
            id={id}
            text={text}
            onClick={onClickHandler}
            key={id}
            />
        )
    );
    
    return (
        <ItemList itemList={itemList} />
    );
};

export default ItemListContainer;