import React from 'react';
import styles from '../../styles/Item.module.css';

// Single Item represent text
const Item = ({text, id, onClick }) => {
    return (
        <div className={styles.item} onClick={() => onClick(id)}>
            <div className={styles.itemText}>
                <div>{text}</div>
            </div>
        </div>
    );
};

export default Item;