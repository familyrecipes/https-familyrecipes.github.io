import Component from '../Component.js';
import { auth, recipesByUserRef } from '../services/firebase.js';

class SubmitRecipe extends Component {

    render() {
        const form = this.renderDOM();
        const submitForm = form.querySelector('form');

        const submitButton = form.querySelector('#submit-button');
        const recipeKey = recipesByUserRef.child(this.props.key);

        submitButton.addEventListener('click', event => {
            event.preventDefault();
            const formData = new FormData(submitForm);
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
                mealType: formData.get('meal-type'),
                instructions: formData.get('instructions'),
                notes: formData.get('notes'),
                cookbookTag: formData.get('cookbook-tag'),
                dietType: formData.get('diet-type')

            };

            recipeRef.set(newRecipe).then(() => {
                submitForm.reset();
                
            });
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <div id="container">
                <form>
                    <div>
                        <label><input required name="recipe-title" placeholder="Recipe Title...">Recipe Title</label>
                        <label><input name="image-upload" placeholder="image uplaod">image upload</label>
                    </div>
                        <select required id="meal-type" name="meal-type">Meal Type
                            <option id="breakfast" value="Breakfast">Breakfast</option>
                            <option id="lunch" value="Lunch">Lunch</option>
                            <option id="dinner" value="Dinner">Dinner</option>
                            <option id="dessert" value="Dessert">Dessert</option>
                            <option id="side" value="Side">Side</option>
                        </select>
                    <div>
                        <select id="diet-type" name="diet-type">Diet Type
                            <option disabled selected value> select an option below </option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Gluten-free">Gluten-free</option>
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
                        <textarea required name="ingredients" placeholder="1tbsp sugar, 3 cups flour..."></textarea>
                        </label>
                    </div>
                    <div>
                        <textarea required name="instructions" placeholder="Instructions..."></textarea>
                        <textarea name="notes" placeholder="Notes..."></textarea>
                        <input required name="cookbook-tag" placeholder="Cookbook Name">
                    </div>
                    <div>
                    </div>
                    <button id="submit-button">Add recipe</button>
                </form>
            </div>
    `;
    }
}

export default SubmitRecipe;