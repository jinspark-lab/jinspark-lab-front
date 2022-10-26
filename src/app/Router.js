import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AlgorithmPage from './algorithm/AlgorithmPage';
import ArchitecturePage from './architecture/ArchitecturePage';
import AdminPage from './admin/AdminPage';
import UserAppPage from './userapp/UserAppPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/algorithm" element={<AlgorithmPage />}></Route>
            <Route path="/architecture" element={<ArchitecturePage />}></Route>
            <Route path="/userapp" element={<UserAppPage />}></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
    )
};
export default Router;
