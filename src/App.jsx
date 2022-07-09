import * as React from "react";
import { Routes, Route} from "react-router-dom";

import './App.css';
import Layout from "./components/layout";
import Favourites from "./pages/favourites";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import { QueryClientProvider ,QueryClient } from "react-query";
import { ThemeProvider } from "./contexts/themeContext";

const queryClient = new QueryClient();

function App() {
 
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
        <ThemeProvider>
              <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index  path="/" element={<Home/>} />
                  <Route path="/favourites" element={<Favourites/>} />
                  <Route path="/*" element={<NotFound/>} /> 
                </Route>
              </Routes>
        </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
