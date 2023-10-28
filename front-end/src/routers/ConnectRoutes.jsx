import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Detail from "../pages/Detail";

const ConnectRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <Navbar />
              <Detail />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default ConnectRoutes;
