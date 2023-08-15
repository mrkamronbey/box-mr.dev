import React from "react";
import Hero from "./hero";
import { Form } from "../form";
import { Partner } from "../partners";
import { Products } from "../products";
import { Factory } from "./factory";
import { Details } from "../details";
import { Comments } from "../comments";

const HomeComponent = () => {
  return (
    <>
    <Hero/>
    <Details/>
    <Products/>
    <Factory/>
    <Partner/>
    <Comments/>
    <Form/>
    </>
  );
};

export default HomeComponent;
