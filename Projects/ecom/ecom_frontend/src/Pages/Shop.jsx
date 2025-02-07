import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewColections from "../Components/NewCollections/NewColections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewColections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
