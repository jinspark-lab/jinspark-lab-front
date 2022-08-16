import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AlgorithmPage from './algorithm/AlgorithmPage';
import ArchitecturePage from './architecture/ArchitecturePage';
import AdminPage from './admin/AdminPage';
import ServicePage from './service/ServicePage';

const Router = ({authState}) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage authState={authState}/>}></Route>
            <Route path="/algorithm" element={<AlgorithmPage />}></Route>
            <Route path="/architecture" element={<ArchitecturePage />}></Route>
            <Route path="/service" element={<ServicePage />}></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
    )
};
export default Router;