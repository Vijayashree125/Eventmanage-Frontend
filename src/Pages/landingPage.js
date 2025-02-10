import React from "react";
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Aboutus from "../components/Aboutus";
// import Features from "../components/Features";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
