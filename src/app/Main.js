import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Page from '../components/Page';
import Layout from '../components/Layout';
import AppMenu from './AppMenu';
import Router from './Router';

const Main = () => {
    return (
        <BrowserRouter>
            <Page layout={(
                <Layout pageMenu={
                    <AppMenu/>
                } pageRouter={
                    <Router></Router>
                } />
            )} />
        </BrowserRouter>
    )
};
export default Main;