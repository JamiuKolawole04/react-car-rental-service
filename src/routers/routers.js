import { Routes, Route, Navigate } from "react-router-dom";

import {
    Home,
    About,
    CarListing,
    CarDetails,
    Blog,
    BlogDetails,
    NotFound,
    Contact,
    Register,
    Login
} from "../pages";

export const Routers = () => {
    const user = JSON.parse(localStorage.getItem("user"));


    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/cars" element={<CarListing />} />
            <Route path="/cars/:slug" element={<CarDetails />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={user ? <Navigate to="/home" /> : <Register />} />
            <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}