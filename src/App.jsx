import React from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/step-1" element={<Step1 />} />
        <Route path="/step-2" element={<Step2 />} /> 
        <Route path="/step-3" element={<Step3 />} />
        <Route path="/step-4" element={<Step4 />} /> 
        
        <Route path="/" element={<Step1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
