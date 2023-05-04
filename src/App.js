import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Link, Routes, HashRouter } from "react-router-dom";
import Card from "./Components/Card";
import Footer from "./Components/footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";



function App() {
  return (
    
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/booking" element={<Booking />} />
 </Routes>
    
  );
}

export default App;
