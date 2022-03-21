import React from "react";
import Hero from "../component/Hero";
import HomeComponent from "../component/HomeComponent";
import { heroText } from "../Data";

function Home() {
  return (
    <>
      <Hero text={heroText} />
      <HomeComponent />
    </>
  );
}

export default Home;
