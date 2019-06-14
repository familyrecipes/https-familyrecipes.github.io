import Component from '../Component.js';
import RecipeItem from './RecipeItem.js';

class RecipeList extends Component {

    render() {
        const dom = this.renderDOM();
        
        const recipes = this.props.recipes;
        recipes.forEach(recipe => {
            const recipeItem = new RecipeItem({ recipe });
            dom.appendChild(recipeItem.render());
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div id="list-container">
                <ul id="recipe-list">
                </ul> 
            </div>
        `;
    }
}

export default RecipeList;