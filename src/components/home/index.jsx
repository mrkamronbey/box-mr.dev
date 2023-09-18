import React from "react";
import Hero from "./hero";
import { Form } from "../form";
import { Partner } from "../partners";
import { Products } from "../products";
import { Factory } from "./factory";
import { Details } from "../details";
import { Comments } from "../comments";
import { HomeCards } from "./cards";

const HomeComponent = () => {
  return (
    <>
    <Hero/>
    <Details/>
    <Products/>
    <Factory/>
    <HomeCards/>
    <Partner/>
    <Comments/>
    <Form/>
    </>
  );
};

export default HomeComponent;
