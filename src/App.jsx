import * as React from "react";
import { Routes, Route} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div className="  App">
      <Routes>
        <Route index  path="/" element={<Home />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </div>
  );
}



export default App;
