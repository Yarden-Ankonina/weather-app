import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index  path="/" element={<Home />} />
        <Route path="favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}



export default App;
