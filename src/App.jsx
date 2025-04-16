// import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/home/HomePage";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import BookingConfirmation from "./components/BookingConfirmation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserve" element={<BookingPage />} />
        <Route path="/confirmed" element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
