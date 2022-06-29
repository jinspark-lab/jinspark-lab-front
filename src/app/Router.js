import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AlgorithmPage from './AlgorithmPage';
import ArchitecturePage from './ArchitecturePage';
import AdminPage from './AdminPage';

const Router = ({ }) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/algorithm" element={<AlgorithmPage />}></Route>
            <Route path="/architecture" element={<ArchitecturePage />}></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
    )
};
export default Router;