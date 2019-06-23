import Component from '../Component.js';

function toListItems(list) {
    return list.map(ingredient => {
        return `<li>${ingredient}</li>`;
    }).join(' ');
}

class RecipeDeets extends Component {

    renderTemplate() {
        const recipe = this.props.recipe;
        if(!recipe) {
            return `<div></div>`;
        }
        const image = recipe.imageURL || './assets/food_default.png';

        // DRY === Don't Repeat Yourself
        // Isolate common code, in this case into a function:
        const ingredients = toListItems(recipe.ingredients);
        const instructions = toListItems(recipe.instructions);

        // Try and place list header type info _before_ the <ul>

        return /*html*/`
            <div id="recipe-deets-object">
                <h2 id="recipe-title">${recipe.recipeTitle}</h2>
                <img class="uploaded-image" src="${image}">
                <p>Prep Time: ${recipe.prepTime}</p>
                <p>Cook Time: ${recipe.cookTime}</p>
                <p>Ready In: ${recipe.readyIn}</p>
                <p>Servings: ${recipe.servings}</p>
                <p>
                    Ingredients: 
                    <ul>${ingredients}</ul>
                </p>
                <p>
                    Instructions: 
                    <ol>${instructions}</ol>
                </p>
                <p>Notes: ${recipe.notes}</p>
                <p>Meal Type: ${recipe.mealType}</p>
                <p>Diet Type: ${recipe.dietType}</p>
                <p>Cookbook Name: ${recipe.cookbookTag}</p>
            </div>
        `;
    }
}

export default RecipeDeets;