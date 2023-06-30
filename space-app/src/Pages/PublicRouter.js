import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Destination, Crew, Technology } from '@/Pages/Index.js';
import Layout from "@/Layouts/Layout";

const PublicRouteur = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />

                <Route path="/home" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />

                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
};

export default PublicRouteur;