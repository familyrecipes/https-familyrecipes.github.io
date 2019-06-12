import Component from '../Component.js';
import Header from '../shared/Header.js';
import RecipeList from './RecipeList.js';
import RecipeFilter from './RecipeFilter.js';
import Search from './Search.js';
import { recipesByUserRef } from '../services/firebase.js';

class RecipeListApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        let toFilter = [];
        
        const recipeFilter = new RecipeFilter({ 
            onFilter:(filterValue) => {
                const filterByDiet = toFilter.filter(recipe => {
                    return recipe.dietType.includes(filterValue[0]);
                });
                const filtered = filterByDiet.filter(recipe => {
                    return recipe.mealType.includes(filterValue[1]);
                });
                
                recipeList.update({ recipes: filtered });
            }
        });

        dom.appendChild(recipeFilter.render());

        const search = new Search();
        dom.appendChild(search.render());

        let allRecipes = [];
        recipesByUserRef
            // .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const usersRecipes = value ? Object.values(value) : [];
                const mappedRecipes = usersRecipes.map(userRecipes => {
                    return Object.values(userRecipes);
                });
                mappedRecipes.forEach(recipes => {
                    allRecipes = allRecipes.concat(recipes);
                });
                toFilter = allRecipes;
                recipeList.update({ recipes: allRecipes });
            });

        const recipeList = new RecipeList({ recipes: [] });
        dom.appendChild(recipeList.render());

        function searchRecipes() { 
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');
            const searchArray = allRecipes.filter(recipe => {
                return recipe.recipeTitle.includes(search);
            });
            recipeList.update({ recipes: searchArray });
        }

        searchRecipes();
        window.addEventListener('hashchange', () => {
            searchRecipes();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default RecipeListApp;