import React from "react";
import web from "../src/img/faq-img1.png";
import Common from "./Common";
import { NavLink } from "react-router-dom";

const About = () => {
    return(
        <>
            <Common
                name="Welcome to About page"
                imgsrc={web}
                visit="/contact"
                btname="Contact Now"
            />
        </>
    )
}
export default About;