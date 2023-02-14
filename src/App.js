import React from "react";
import {Routes , Route} from 'react-router-dom'
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  
  return (
    <>
      <Header />
     <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/about" element = {<About />} />
        <Route path="/portfolio" element = {<Portfolio />} />
        <Route path= '/contact' element = {<Contact />}/>
     </Routes>
     <Footer />
    </>
  );
}

export default App;
