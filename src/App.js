import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Views/Homepage";
import ContactUs from "./Views/ContactUs";

import ContactImage from "./Assets/Images/contact-us.svg";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path='/contact-us' element={<ContactUs image={ContactImage} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
