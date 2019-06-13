import Component from '../Component.js';

class RecipeDeets extends Component {

    renderTemplate() {
        const recipe = this.props.recipe;
        if(!recipe) {
            return `<div></div>`;
        }
        const image = recipe.imageURL || './assets/placeholder.png';
        const ingredients = recipe.ingredients.map(ingredient => {
            return `<li>${ingredient}</li>`;
        }).join(' ');

        const instructions = recipe.instructions.map(instruction => {
            return `<li>${instruction}</li>`;
        }).join(' ');

        return /*html*/`
            <div>
                <h2>${recipe.recipeTitle}</h2>
                <img src="${image}">
                <p>${recipe.prepTime}</p>
                <p>${recipe.cookTime}</p>
                <p>${recipe.readyIn}</p>
                <p>${recipe.servings}</p>
                <ul>${ingredients}</ul>
                <ol>${instructions}</ol>
                <p>${recipe.notes}</p>
                <p>${recipe.mealType}</p>
                <p>${recipe.cookbookTag}</p>
                <p>${recipe.dietType}</p>
            </div>
        `;
    }
}

export default RecipeDeets;