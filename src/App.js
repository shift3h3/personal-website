import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Hooks/scrollToTop.js";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Services from "./Pages/Services";
// import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <main className="relative w-full mx-auto" style={{ maxWidth: "1600px" }}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
