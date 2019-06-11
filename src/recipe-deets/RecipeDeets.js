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
            </div>
        `;
    }
}

export default RecipeDeets;