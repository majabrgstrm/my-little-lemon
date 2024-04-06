import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Booking from './components/Booking';
import ConfirmedBooking from './components/ConfirmedBooking';
import Main from './components/Main';
import Menu from './components/Menu'
import Footer from './components/Footer';

function App() {
  return (

    <>
      <Nav/>
      <Header/>
      <BookingForm/>
      <Booking/>
      <ConfirmedBooking/>
      <Main/>
      <Menu/>
      <Footer/>
    </>

  );
}

export default App;
