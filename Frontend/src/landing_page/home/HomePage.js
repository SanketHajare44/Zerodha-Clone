import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education"
import OpenAcount from "../OpenAcount";
import Footer from "../Footer";

function HomePage() {

    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAcount />
        </>
    );
}

export default HomePage;
