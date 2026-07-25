import React from "react";
import Awrads from "./Hero";
import Awrads from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import OpenAcount from "../OpenAcount";
import Education from "./Education"
import Footer from "../Footer";

function HomePage(){

    return (
        <>
            <Hero/>
            <Awrads/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAcount/>
            <Footer/>
        </>
    );
}

export default HomePage;
