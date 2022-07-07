import * as React from "react";
import { Routes, Route} from "react-router-dom";

import './App.css';
import Layout from "./components/layout";
import Favourites from "./pages/favourites";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import { ThemeProvider } from "./utils/themeProvider";
import { QueryClientProvider ,QueryClient } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
