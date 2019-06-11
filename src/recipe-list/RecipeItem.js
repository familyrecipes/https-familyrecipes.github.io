import Component from '../Component.js';
// import { allRecipesRef, recipesByUserRef } from '../services/firebase.js';

class RecipeItem extends Component {
 
    renderTemplate() {
        const recipe = this.props.recipe;
        return /*html*/ `
            <li>
                <a href="">
                <h3>${recipe.recipeTitle}</h3>
                <img src="">
                </a>
            </li>
        `;
    }
}

export default RecipeItem;