import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../RecipeCard/RecipeCard.scss";

export function RecipeCard({ recipe, swiperRef }) {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    navigate(`/recipes/${recipe.id}`)
  };

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
    swiperRef?.current?.autoplay.stop();
  };

  const handleMouseLeave = () => {
    setHover(false);
    swiperRef?.current?.autoplay.start();
  };

  return (
    <div
      className="recipe-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`recipe-card__content ${hover ? "blur" : ""}`}>
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-card__text">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>

      </div>

      <div className={`recipe-card__overlay ${hover ? "show" : ""}`}>
        <button className="recipe-card__button" onClick={handleClick}>View Recipe →</button>
      </div>
    </div>
  );
}
