// Really liked that you put this in a module.
// Though would have liked to see a tested, test-first approach
function searchAndFilter(search, filter, allRecipes) {

    // Here's an approach to avoid the duplication.

    let filtered = allRecipes;

    if(search) {
        filtered = filtered.filter(recipe => {
            return recipe.recipeTitle.toLowerCase().includes(search) 
                || recipe.cookbookTag.toLowerCase().includes(search);
        });
    }
    
    if(filter && filter[0]) {
        filtered = filtered.filter(recipe => {
            return recipe.dietType.includes(filter[0]); 
        });
    }

    if(filter && filter[1]) {
        filtered = filtered.filter(recipe => {
            return recipe.mealType.includes(filter[1]);
        });
    }
    
    return filtered;
}

export default searchAndFilter;