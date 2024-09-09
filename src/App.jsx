import React from "react";
import Navbar from './Components/Navabar/Navbar';
import Hero from "./Components/Hero/Hero";
import About from "./Components/about/About";
import MyWork from "./Components/MyWork/MYWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
   return(
     <div>
       <Navbar/>
       <Hero/>
       <About/>
       <MyWork/>
       <Contact/>
       <Footer/>
     </div>

   )
}


export default App