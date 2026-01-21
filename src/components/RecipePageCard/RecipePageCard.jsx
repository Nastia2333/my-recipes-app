import { useNavigate } from "react-router-dom";
import { navigateToRecipe } from "../../utils/navigation.js";
import { Favourite } from "../../components/index.js";
import '../RecipePageCard/RecipePageCard.scss';


export function RecipePageCard({ recipe, favourites, onToggleFavourite }){

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigateToRecipe(navigate, recipe.id)
    }

    const isFavourite = favourites.some((item) => item.id === recipe.id);
    return (
        <div className="recipes-page-card" onClick={handleCardClick}>
            <div className="recipes-page-card__image">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                />
            </div>
            <div className="recipes-page-card__content">
                <div className="recipes-page-card__text">
                    <h3 className="recipes-page-card__title">{recipe.title}</h3>
                    <div className="recipes-page-card__description">{recipe.description}</div>
                </div>
                <div className="favourite-icon">
                    <Favourite isActive={isFavourite} onClick={() => onToggleFavourite(recipe)}/>
                </div>
            </div>
        </div>
    );
}