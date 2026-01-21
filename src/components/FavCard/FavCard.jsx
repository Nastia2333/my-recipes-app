import React from "react";
import { useNavigate } from "react-router-dom";
import { navigateToRecipe } from "../../utils/navigation";
import { Favourite } from "../index";
import '../FavCard/FavCard.scss';


export function FavCard({recipe, favourites, onToggleFavourite}){

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigateToRecipe(navigate, recipe.id)
    };
    
    const isFavourite = favourites.some((item)=> item.id===recipe.id);

    return(
        <div className="fav-card" onClick={handleCardClick}>
            <img src={recipe.image} alt={recipe.title}></img>
            <div className="fav-card-content">
                <div className="fav-card-text">
                    <h2 className="fav-title">{recipe.title}</h2>
                    <Favourite isActive={isFavourite} onClick={()=> onToggleFavourite(recipe)}/>
                </div>
                <div className="fav-card-icon">
                    <p className="fav-description">{recipe.longDescription}</p>
                </div>
            </div>
        </div>
    )
}