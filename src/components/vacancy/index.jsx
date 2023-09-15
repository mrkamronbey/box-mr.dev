import React from "react";
import Hero from "./hero";
import { Form } from "../form";
import VacancyCard from "./vacancy-card";

const VacancyComponent = () => {
  return (
    <>
      <Hero />
      <VacancyCard />
      <Form />
    </>
  );
};

export default VacancyComponent;
