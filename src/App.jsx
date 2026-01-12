import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, Home, RecipesPage, RecipeDetailedPage, AboutUs, FavouritesPage } from './components/index';

function App() {
  return (
    <BrowserRouter> 
      < Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailedPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      
      < Footer />
    </BrowserRouter>     
  );
}

export default App;
