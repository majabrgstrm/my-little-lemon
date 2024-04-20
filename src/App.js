import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Booking from './pages/Booking';
import ConfirmedBooking from './pages/ConfirmedBooking';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/booking' element={<Booking />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
