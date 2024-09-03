import React from "react";
import Navbar from './Components/Navabar/Navbar';
import Hero from "./Components/Hero/Hero";
import About from "./Components/about/About";
import MyWork from "./Components/MyWork/MYWork";

const App = () => {
   return(
     <div>
       <Navbar/>
       <Hero/>
       <About/>
       <MyWork/>
     </div>

   )
}


export default App