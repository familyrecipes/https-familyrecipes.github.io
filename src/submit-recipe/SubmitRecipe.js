import Component from '../Component.js';
import { auth, recipesByUserRef } from '../services/firebase.js';

class SubmitRecipe extends Component {

    render() {
        const form = this.renderDOM();

        const submitButton = form.querySelector('#submit-button');
        console.log(this.props.key);
        const recipeKey = recipesByUserRef.child(this.props.key);

        submitButton.addEventListener('click', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const recipeRef = recipeKey.push();

            const newRecipe = {
                key: recipeRef.key,
                owner: auth.currentUser.uid,
                recipeTitle: formData.get('recipe-title'),
                description: formData.get('description'),
                prepTime: formData.get('prep-time'),
                cookTime: formData.get('cook-time'),
                readyIn: formData.get('ready-in'),
                servings: formData.get('servings'),
                ingredients: formData.get('ingredients'),
                breakfast: formData.get('breakfast'),
                lunch: formData.get('lunch'),
                dinner: formData.get('dinner'),
                dessert: formData.get('dessert'),
                side: formData.get('side')

            };

            recipeRef.set(newRecipe).then(() => {
                form.reset();
                
            });
            console.log('new recipe form input', newRecipe);
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form>
                <div>
                    <label><input name="recipe-title" placeholder="Recipe Title...">Recipe Title</label>
                    <textarea name="description" placeholder="Describe your dish..."></textarea>
                    <label><input name="image-upload" placeholder="image uplaod">image upload</label>
                </div>
                    <input id="breakfast" type="checkbox" name="breakfast">Breakfast
                    <input id="lunch" type="checkbox" name="lunch">Lunch
                    <input id="dinner" type="checkbox" name="dinner">Dinner
                    <input id="dessert" type="checkbox" name="dessert">Dessert
                    <input id="side" type="checkbox" name="side">Side
                <div>
                    <select>Diet Type
                        <option disabled selected value> select an option below </option>
                        <option>Vegetarian</option>
                        <option>Vegan</option>
                        <option>Gluten-Free</option>
                    </select>
                </div>
                <div>
                    <input name="prep-time" placeholder="Prep time...">
                    <input name="cook-time" placeholder="Cook time...">
                    <input name="ready-in" placeholder="Ready in...">
                    <input name="servings" placeholder="Servings...">
                </div>
                <div>
                    <label>Ingredients
                    <textarea name="ingredients" placeholder="1tbsp sugar, 3 cups flour..."></textarea>
                    </label>
                </div>
                <div>
                    <textarea name="instructions" placeholder="Instructions..."></textarea>
                    <textarea name="notes" placeholder="Notes..."></textarea>
                </div>
                <div>
                </div>
                <button id="submit-button">Add recipe</button>
            </form>
    `;
    }
}

export default SubmitRecipe;