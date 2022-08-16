import React from 'react';
import styles from '../styles/Page.module.css';

const Page = ({ layout }) => {
    return (
        <main className={styles.page}>
            { layout }
        </main>
    )
};
export default Page;