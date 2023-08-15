import React, { useEffect } from "react";
import CatalogComponet from "../../components/catalog";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <CatalogComponet/>
    </>
  );
};

export default Catalog;