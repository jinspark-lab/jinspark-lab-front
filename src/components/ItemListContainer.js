import React, { useState } from 'react';
import Item from './Item';
import ItemList from './ItemList';

const ItemListContainer = ({ inputItems, onClickHandler }) => {

    // newItems are same with last time, just use the last elements.
    // const items = useMemo(() => newItems, [newItems]);
    const [items, setItems] = useState(inputItems);

    const itemList = items.map(
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