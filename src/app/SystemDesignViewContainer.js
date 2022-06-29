import React, { useState } from 'react';
import SystemDesignView from './SystemDesignView';

const SystemDesignViewContainer = ({ }) => {

    // newItems are same with last time, just use the last elements.
    // const items = useMemo(() => newItems, [newItems]);
    // const [items, setItems] = useState(inputItems);
    const [content, setContent] = useState({
        title: 'Title',
        image: 'https://d1zrwss8zuawdm.cloudfront.net/frontend-cicd.png',
        desc: 'Description'
    });

    const handleClick = (id) => {
        // 'https://d1zrwss8zuawdm.cloudfront.net/frontend-cicd.png'
    };
    
    return (
        <SystemDesignView title={content.title} image={content.image} desc={content.desc} />
    );
};

export default SystemDesignViewContainer;