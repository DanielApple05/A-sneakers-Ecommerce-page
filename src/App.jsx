import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/index';
import Shop from './pages/shop';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
  );
}

export default App;

