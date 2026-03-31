import React from 'react'
import Education from './Education'
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from './Stats';
import PricingPage from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from "../Navbar";
import Footer from "../Footer";

const HomePage = () => {
  return (
      <>
      
      <Hero />
      <Awards />
      <Stats />
      <PricingPage />
      <Education />
      <OpenAccount /> 
      
    </>
  );
}

export default HomePage