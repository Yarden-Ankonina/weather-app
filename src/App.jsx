import * as React from "react";
import { Routes, Route} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import { ThemeContext } from "./context/ThemeContext";
import NotFound from "./pages/NotFound";
import Header from "./components/sections/header";
import Footer from "./components/sections/footer";
import Layout from "./components/layout";

function App() {

  return (
    <div className="App h-full">
      <ThemeContext.Provider value={"dark"}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index  path="/" element={<Home/>} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/*" element={<NotFound/>} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}



export default App;
