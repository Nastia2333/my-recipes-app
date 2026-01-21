export function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export function navigateToRecipe(navigate, recipeId){
    scrollToTop();
    navigate(`/recipes/${recipeId}`)
}