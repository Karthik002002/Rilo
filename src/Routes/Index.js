import React, { Suspense, lazy } from "react";
import { Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";


const RiloRoutes = () => {
    const Home = lazy(() => import('../../src/pages/Home/Home'))
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
            </Routes>
        </BrowserRouter>

    )

}

export default RiloRoutes;