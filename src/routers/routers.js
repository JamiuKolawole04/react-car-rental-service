import { Routes, Route, Navigate } from "react-router-dom";

import {
    Home,
    About,
    CarListing,
    CarDetails,
    Blog,
    BlogDetails,
    NotFound,
    Contact
} from "../pages";

export const Routers = () => {
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
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}