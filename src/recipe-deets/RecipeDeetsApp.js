import Component from '../Component.js';
import Header from '../shared/Header.js';
import RecipeDeets from './RecipeDeets.js';
import QUERY from '../utils/QUERY.js';
import { recipesByUserRef } from '../services/firebase.js';

class RecipeDeetsApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        
        const URLParams = QUERY.parse(window.location.search.slice(1));
        const recipeRef = recipesByUserRef.child(URLParams.key);
        console.log(recipeRef);

        // recipesByUserRef.on('value', snapshot => {
        //     const value = snapshot.val();
        //     console.log(value, 'value');
        // });
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
                const oneTrueRecipe = allRecipes.filter(recipe => {
                    return recipe.key.includes(URLParams.key)
                });
                console.log(oneTrueRecipe)
                recipeDeets.update({ recipe: oneTrueRecipe[0] });
            
                console.log(allRecipes, 'all user values');
            });

        const recipeDeets = new RecipeDeets({ recipeRef, key: URLParams.key });
        main.appendChild(recipeDeets.render());

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

export default RecipeDeetsApp;