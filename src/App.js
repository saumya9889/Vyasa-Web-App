import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { About } from './components/Dashboard/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={ <Dashboard />} />
        <Route path="/about" element={<About />} />
		{/* <Route path='/header' element={<Header/>} /> */}
      </Routes>
    </Router>
  );
}

export default App
 
