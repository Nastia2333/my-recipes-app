import React from "react";
import '../styles/RecipesPage.scss';
import { useState, useEffect } from "react";
import { recipes } from "../data/recipes.js";
import { allImages } from "../components/images.js";
import { RecipePageCard, Filters, Search } from "../components/index.js";

export const RecipesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [favourites, setFavourites] = useState([]);
    const ITEMS_PER_PAGE=6;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=> {
        const saved = localStorage.getItem("favourites");
        if (saved) {
            setFavourites(JSON.parse(saved))
        }
    }, []);

    useEffect(()=> {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    
    const toggleFavourite = (recipe) => {
        setFavourites((prev) => {
            const exists = prev.some((item) => item.id === recipe.id);

            if (exists) {
            return prev.filter((item) => item.id !== recipe.id);
            } else {
            return [...prev, recipe];
            }
        });
    };

    useEffect(()=> {
        const timeout = setTimeout(()=> {
            setDebouncedSearch(searchQuery);
        }, 300);
        return () => clearTimeout(timeout);
    }, [searchQuery]);


    const [filters, setFilters] = useState({
        category: "all",
        difficulty: "all",
        time: "all",
    });

    const filteredRecipes = recipes.filter((recipe)=> {
        const matchesSearch = 
            recipe.title.toLowerCase().includes(debouncedSearch.toLowerCase());

            const matchesCategory = 
                filters.category === "all" ||
                recipe.category === filters.category;

            const matchesDifficulty = 
                filters.difficulty === "all" ||
                recipe.difficulty === filters.difficulty;
            const matchesTime = 
                filters.time === "all" ||
                recipe.time <= Number(filters.time);   

        return (
            matchesSearch &&
            matchesCategory &&
            matchesDifficulty &&
            matchesTime
        );   
    });

    useEffect(()=> {
        setCurrentPage(1)
    }, [filters, debouncedSearch]);

    useEffect(()=> {
        window.scrollTo ({
            top: 0,
            behavior: "smooth"
        });
    }, [currentPage]);

    const totalPages = Math.ceil(filteredRecipes.length/ITEMS_PER_PAGE);
 
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const paginatedRecipes = filteredRecipes.slice(startIndex, endIndex);

    return (
        <main>
            <section className="banner">
                <div className="recipes-header">
                    <h1>Recipes</h1>
                </div>
                <div className="search-filters">
                    <Search searchQuery={searchQuery} onChange={setSearchQuery} />
                    <Filters filters={filters} onChange={setFilters}/>
                </div>
            </section>

            <section className="recipes-list">
                {paginatedRecipes.map((recipe)=> (
                    <RecipePageCard key={recipe.id} recipe={recipe} favourites={favourites} onToggleFavourite={toggleFavourite}/>
                ))}
            </section>
            {paginatedRecipes.length === 0 && (
                    <div className="empty">
                        <img src={allImages[18]} alt="No result"></img>
                        <p className="empty-state">No results found.</p>
                    </div>
                )}

            {paginatedRecipes.length>0 && (
                    <div className="pagination">
                        <button onClick={()=> setCurrentPage((page)=> page - 1)} disabled={currentPage===1}>Prev</button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={()=> setCurrentPage((page)=> page + 1)} disabled={currentPage===totalPages}>Next</button>
                    </div>
                )}
        </main>
    )
}