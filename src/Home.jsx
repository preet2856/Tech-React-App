import React from "react";
import web from "../src/img/faq-img1.png";
import Common from "./Common";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};
export default Home;
