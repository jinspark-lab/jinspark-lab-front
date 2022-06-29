import React, { Component } from 'react';
import styles from '../styles/Item.module.css';

// Items that can be manipulate inside content
const Element = ({text, checked, id, onToggle, onRemove }) => {
    return (
        <div className={styles.item} onClick={() => onToggle(id)}>
            <div className={styles.remove} onClick={(e)=> {
                e.stopPropagation();    //Don't run onToggle to parent DOM
                onRemove(id);
            }}>&times;</div>
            <div className={`item-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>
            {
                checked && (<div className={styles.checkMark}>✓</div>)
            }
        </div>
    );
};

// export default React.memo(Item);
export default Element;