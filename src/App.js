import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Link, Routes } from "react-router-dom";
import Card from "./Components/Card";
import Footer from "./Components/footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";



function App() {
  return (
    <BrowserRouter>
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/booking" element={<Booking />} />
 </Routes>
    </BrowserRouter>
  );
}

export default App;
