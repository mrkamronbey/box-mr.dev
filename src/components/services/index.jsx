import React from "react";
import Hero from "./hero";
import { Form } from "../form";
import { ServicesList } from "./services_list";

const ServicesComponent = () => {
  return (
    <>
    <Hero/>
    <ServicesList/>
    <Form/>
    </>
  );
};

export default ServicesComponent;
