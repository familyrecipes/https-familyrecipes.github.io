function searchAndFilter(search, filter, allRecipes) {
    if(filter && !search) {
        const filterByDiet = allRecipes.filter(recipe => {
            return recipe.dietType.includes(filter[0]);
        });
        const filtered = filterByDiet.filter(recipe => {
            return recipe.mealType.includes(filter[1]);
        });
        return filtered;
    } 
    
    if(search && !filter) {
        const searchArray = allRecipes.filter(recipe => {
            return recipe.recipeTitle.toLowerCase().includes(search) ||
            recipe.cookbookTag.toLowerCase().includes(search);
        });
        return searchArray;
    }
    
    if(filter && search) {
        const searchArray = allRecipes.filter(recipe => {
            return recipe.recipeTitle.toLowerCase().includes(search) ||
            recipe.cookbookTag.toLowerCase().includes(search);
        });
        const filterByDiet = searchArray.filter(recipe => {
            return recipe.dietType.includes(filter[0]);
        });
        const filtered = filterByDiet.filter(recipe => {
            return recipe.mealType.includes(filter[1]);
        });
        return filtered;
    }
}

export default searchAndFilter;