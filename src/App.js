import React, { useRef, useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import About from './Component/About/About';




function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>

  
    </>
  );
}
export default App;


