import Component from '../Component.js';
import Header from '../shared/Header.js';
import RecipeList from './RecipeList.js';
import RecipeFilter from './RecipeFilter.js';
import { recipesByUserRef } from '../services/firebase.js';

class RecipeListApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        let toFilter;

        //
        const recipeFilter = new RecipeFilter({ 
            onFilter:(filterValue) => {
                const filtered = toFilter.filter((recipe) => {
                    return recipe.dietType.includes(filterValue);
                });

                recipeList.update({ recipes: filtered });
            }
        });

        dom.appendChild(recipeFilter.render());

        recipesByUserRef
            // .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const usersRecipes = value ? Object.values(value) : [];
                const mappedRecipes = usersRecipes.map(userRecipes => {
                    return Object.values(userRecipes);
                });
                let allRecipes = [];
                mappedRecipes.forEach(recipes => {
                    allRecipes = allRecipes.concat(recipes);
                });
                toFilter = allRecipes;
                recipeList.update({ recipes: allRecipes });
            });

        const recipeList = new RecipeList({ recipes: [] });
        dom.appendChild(recipeList.render());

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