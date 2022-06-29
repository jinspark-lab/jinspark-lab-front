import React, { Component, useMemo } from 'react';

const ElementList = ({ elementList }) => {

    // newItems are same with last time, just use the last elements.
    // const items = useMemo(() => newItems, [newItems]);
    return (
        <div>
            {elementList}
        </div>
    );
};

// TODO: Check Memoization worth it?
// export default React.memo(ItemList);
export default ElementList;