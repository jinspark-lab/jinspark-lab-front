import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../styles/Page.module.css';

const Page = ({ layout }) => {
    return (
        <main className={styles.page}>
            { layout }
        </main>
    )
};
export default Page;