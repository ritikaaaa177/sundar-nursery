import React, { useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import("preline");

const App = () => {
  // const RedirectToHome = () => {
  //   const navigate = useNavigate();

  //   // Redirect to the home route ("/")
  //   useEffect(() => {
  //     // Redirect to the home route ("/") when the component mounts
  //     navigate("/");
  //   }, []); // Empty dependency array means this effect runs once after the component mounts

  //   return null;
  // };

  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<RedirectToHome />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
