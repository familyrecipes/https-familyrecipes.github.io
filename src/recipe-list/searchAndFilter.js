// import Search from './Search.js'; 

// const search = new Search();
// const params = window.location.hash.slice(1);
// const searchParams = new URLSearchParams(params);
// const search = searchParams.get('search');

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

//if search input search
//if filter, filter
// if search and filter = perform both
//
export default searchAndFilter;