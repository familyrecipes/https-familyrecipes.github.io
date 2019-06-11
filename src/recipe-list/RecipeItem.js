import Component from '../Component.js';
import { allRecipesRef, recipesByUserRef } from '../services/firebase.js';

class RecipeItem extends Component {
    renderTemplate() {
        return /*html*/ `
            <li>
                <a href="">
                    <h3>Bananas</h3>
                    <img src="">
                </a>
            </li>
            <li>
                <a href="">
                    <h3>Apples</h3>
                    <img src="">
                </a>
            </li>
        `;
    }
}

export default RecipeItem;