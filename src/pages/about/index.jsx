import React, { useEffect } from "react";
import AboutComponet from "../../components/about";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutComponet />
    </>
  );
};

export default About;
