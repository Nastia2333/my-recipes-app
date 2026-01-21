import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, RecipesPage, RecipeDetailedPage, AboutUs, FavouritesPage } from './components/index';
import { allImages } from "./assets/images";

function App() {
  useEffect(()=> {
    allImages.forEach((src)=> {
      const img = new Image ();
      img.src = src;
    });
  }, []);

  return (
    <BrowserRouter> 
      <Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailedPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      </Layout>
      
    </BrowserRouter>     
  );
}

export default App;
