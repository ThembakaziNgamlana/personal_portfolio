import React from "react";
import Navbar from './Components/Navabar/Navbar';
import Hero from "./Components/Hero/Hero";
import About from "./Components/about/About";

const App = () => {
   return(
     <div>
       <Navbar/>
       <Hero/>
       <About/>
     </div>

   )
}


export default App