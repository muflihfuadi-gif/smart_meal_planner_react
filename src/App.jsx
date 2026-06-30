import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Tentang from "./pages/Tentang";

function App() {
  return (
    <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/step-1" element={<Step1 />} />
        <Route path="/step-2" element={<Step2 />} /> 
        <Route path="/step-3" element={<Step3 />} />
        <Route path="/step-4" element={<Step4 />} /> 
        <Route path="/tentang" element={<Tentang />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
