import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Weapons from "../pages/Weapons";
import News from "../pages/News";
import Reviews from "../pages/Reviews";
import Forums from "../pages/Forums";
import Guide from "../pages/Guide";
import FAQ from "../pages/FAQ";
import ContactUs from "../pages/ContactUs";
import Articles from "../pages/Articles";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail"
import Profile from "../pages/Profile"


const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/weapons" element={<Weapons/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/reviews" element={<Reviews/>} />
            <Route path="/forums" element={<Forums/>} />
            <Route path="/guide" element={<Guide/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/articles" element={<Articles/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/rigester" element={<Register/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    )
};

export default Routers;