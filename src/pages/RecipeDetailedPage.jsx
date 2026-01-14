import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { recipes } from '../data/recipes'
import { BackButton, Favourite } from '../components/index';
import { allImages } from "../components/images";
import '../styles/RecipeDetailedPage.scss'

export function RecipeDetailedPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const recipe = recipes.find((item)=> item.id===Number(id));


    const [favourites, setFavourites] = useState([]);

    useEffect(()=> {
        const saved = localStorage.getItem("favourites");
        if (saved) {
            setFavourites(JSON.parse(saved))
        }
    }, []);

    useEffect(()=> {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites]);

    
    if (!recipe) {
        return (
            <main className="recipe-not-found">
                <div className="recipe-not-found__text">OOOPS... RECIPE NOT FOUND</div>
                <button className="recipe-not-found__button" onClick={()=> navigate('/recipes')}>← Back to recipes</button>
            </main>
        );
    };

    const isFavourite = favourites.some((item)=> item.id===recipe.id);

    const toggleFavourite = () => {
        setFavourites((e)=> {
            const exist = e.some((elem)=> elem.id===recipe.id);

            if (exist) {
                return e.filter((elem)=> elem.id!==recipe.id)
            } else {
                return [...e, recipe]
            }
        })
    }

    return (
        <main className="recipe-details">
            {/* HERO */}
            <section className="recipe-hero">
                <img src={recipe.image} alt={recipe.title}></img>
                <h1>{recipe.title}</h1>
            </section>

            <section className="recipe-text-content">
                {/* PARAMETERS */}
                <section className="recipe-general">
                    <div className="recipe-parameters">
                        <div className="recipe-category">
                            <div className="recipe-category-icon">
                                <img src={allImages[16]} alt="Category"></img>
                            </div>
                            <div className="recipe-category-values">
                                <h4>Category</h4>
                                {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
                            </div>
                        </div>
                        <div className="recipe-time">
                            <div className="recipe-time-icon">
                                <img src={allImages[15]} alt="Clock"></img>
                            </div>
                            <div className="recipe-time-values">
                                <h4>Time</h4>
                                <span>{recipe.time} min</span>
                            </div>
                        </div>
                        <div className="recipe-difficulty">
                            <div className="recipe-time-icon">
                                <img src={allImages[17]} alt="Level"></img>
                            </div>
                            <div className="recipe-difficulty-values">
                                <h4>Difficulty</h4>
                                {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
                            </div>
                        </div>
                    </div>
                    <Favourite isActive={isFavourite} onClick={toggleFavourite}/>
                </section>


                {/* DESCRIPTION */}
                <section className="recipe-description">
                    <p>{recipe.longDescription}</p>
                </section>

                {/* INGREDIENTS */}
                <section className="recipe-info">
                    <section className="recipe-ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            {recipe.ingredients.map((item, index)=> (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    {/* STEPS */}
                    <section className="recipe-steps">
                        <h2>Steps</h2>
                        <ul>
                            {recipe.steps.map((step, index)=> (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                    </section>
                </section>

                {/* ACTIONS */}
                <section className="recipe-actions">
                    <BackButton />
                </section>
            </section>
        </main>
    )
}