import React from "react";
import Hero from "./hero";
import { Form } from "../form";
import { Partner } from "../partners";
import { Details } from "../details";
import { Comments } from "../comments";
import { Employees } from "./employees";
import AboutCard from "./about-card";

const AboutComponet = () => {
  return (
    <>
    <Hero/>
    <Details isNone={true}/>
    <Employees/>
    <AboutCard/>
    <Partner/>
    <Comments/>
    <Form/>
    </>
  );
};

export default AboutComponet;
