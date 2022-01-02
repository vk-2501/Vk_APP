import React from 'react'
import Navbar from "./components/Navbar";
import FoodRow from "./components/FoodRow";
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import Image from "./Images/MainImage.png";
import Footer from "./components/Footer";
import MainImage from './components/MainImage';
// import alanBtn from '@alan-ai/alan-sdk-web';
// import { useEffect, useState } from "react";
// import axios from "axios";

const AppWrapper = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <MainImage />
                    <FoodRow />
                    {/* <Footer /> */}
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/productDetail/:foodId" >
                    <Navbar />
                    <ProductDetail />
                </Route>
                <Route path="/checkout">
                    <Navbar />
                    <Checkout />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppWrapper;
