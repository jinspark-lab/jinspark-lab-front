import React, { useState } from 'react';
import Element from './Element';
import ElementList from './ElementList';

const ElementListContainer = ({ inputElements }) => {

    // newItems are same with last time, just use the last elements.
    // const items = useMemo(() => newItems, [newItems]);
    const [elements, setElements] = useState(inputElements);

    const handleToggle = (id) => {
        const index = elements.findIndex(element => element.id === id);
        const selected = elements[index];
        const nextElements = [...elements];
    
        nextElements[index] = {
          ...selected,
          checked: !selected.checked
        };
        setElements(nextElements);
    };
    
    const handleRemove = (id) => {
        setElements(elements.filter(element => element.id !== id));
    };
    
    const elementList = elements.map(
        ({id, text, checked}) => (
            <Element 
            id={id}
            text={text}
            checked={checked}
            onToggle={handleToggle}
            onRemove={handleRemove}
            key={id}
            />
        )
    );
    
    return (
        <ElementList elementList={elementList} />
    );
};

export default ElementListContainer;