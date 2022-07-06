import * as React from "react";
import { Routes, Route} from "react-router-dom";

import './App.css';
import Home from './pages/home';
import Favourites from './pages/favourites';
import { ThemeContext } from "./context/themeContext";
import NotFound from "./pages/notFound";
import Layout from "./components/layout";

function App() {
  // function getLocation(){
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(successGeoLocation)
  //   }
  //   else{
  //     console.log("couldn't get location");
  //   }
  // }
  
  // function successGeoLocation(pos){
  //   const coords = pos.coords;

  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${coords.latitude}`);
  //   console.log(`Longitude: ${coords.longitude}`);
  //   console.log(`More or less ${coords.accuracy} meters.`);
  // }

  // const api = "N3XKvtPaWl6ZYCmmeoCXR6PutQk8xBzH"
  // const apiRes = fetch(api);
  // console.log(apiRes);

  return (
    <div className="App h-full dark">
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
