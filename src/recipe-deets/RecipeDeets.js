import Component from '../Component.js';

class RecipeDeets extends Component {

    renderTemplate() {
        const recipe = this.props.recipe;
 
        if(!recipe) {
            return `<div></div>`;
        }

        return /*html*/`
            <div>
                <h2>${recipe.recipeTitle}</h2>
                <p>${recipe.description}</p>
                <p>${recipe.prepTime}</p>
                <p>${recipe.cookTime}</p>
                <p>${recipe.readyIn}</p>
                <p>${recipe.servings}</p>
                <p>${recipe.ingredients}</p>
                <p>${recipe.breakfast ? recipe.breakfast : ''}</p>
                <p>${recipe.lunch ? recipe.lunch : ''}</p>
                <p>${recipe.dinner ? recipe.dinner : ''}</p>
                <p>${recipe.dessert ? recipe.dessert : ''}</p>
                <p>${recipe.side ? recipe.side : ''}</p>

            </div>
        `;
    }
}

export default RecipeDeets;