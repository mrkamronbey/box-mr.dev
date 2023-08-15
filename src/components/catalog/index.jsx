import React from "react";
import Hero from "./hero";
import { Form } from "../form";
import { CatalogProducts } from "./catalog-products";

const CatalogComponet = () => {
  return (
    <>
    <Hero/>
    <CatalogProducts/>
    <Form/>
    </>
  );
};

export default CatalogComponet;
