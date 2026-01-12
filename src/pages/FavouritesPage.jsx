import React from "react";
import '../styles/FavouritesPage.scss'
import { useEffect, useState } from "react";
import { FavCard, ExploreRecipes } from "../components/index";

export function FavouritesPage(){
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

    const toggleFavourite=(recipe)=> {
        setFavourites((item)=> {
            const exist = item.some((elem)=> elem.id===recipe.id);

            if (exist) {
                return item.filter((elem)=> elem.id!==recipe.id);
            } else {
                return [...item, recipe];
            }
        })
    }


    return(
        <main>
            <section className="favourites-banner">
                <h1>Favourites</h1>
            </section>

            {favourites.length === 0 && (
                <div className="fav-empty-state">
                    <p>Ooops... Your favourites list is empty.</p>
                    <ExploreRecipes />
                </div>
            )};

            {favourites.length>0 && (
                <section className="fav-cards">
                    {favourites.map((recipe)=> (
                        <FavCard key={recipe.id} recipe={recipe} favourites={favourites} onToggleFavourite={toggleFavourite}/>
                    ))}
                </section>
            )}
        </main>
    )
}