import Component from '../Component.js';

class AddIngredient extends Component {
    renderTemplate() {
        return /*html*/ `
            <div id="ingredient-values">
                <input name="quantity" placeholder="Quantity...">
                <select name="measurement-select"></select>
                <input name="ingredient" placeholder="Ingredient...">
                <input name="notes" placeholder="Notes...">
            </div>
    `;
    }
}

export default AddIngredient;