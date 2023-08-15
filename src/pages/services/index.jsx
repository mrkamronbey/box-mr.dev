import React, { useEffect } from "react";
import ServicesComponent from "../../components/services";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <ServicesComponent/>
    </>
  );
};

export default Services;
