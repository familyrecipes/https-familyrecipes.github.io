import Component from '../Component.js';
import { auth, recipesByUserRef, imageStorageRef } from '../services/firebase.js';

class SubmitRecipe extends Component {

    render() {
        const form = this.renderDOM();
        const submitForm = form.querySelector('form');

        const submitButton = form.querySelector('#submit-button');
        const recipeKey = recipesByUserRef.child(this.props.key);
        
        submitButton.addEventListener('click', event => {
            event.preventDefault();
            const formData = new FormData(submitForm);
            const file = formData.get('image');
            const recipeRef = recipeKey.push();
            const ingredients = formData.get('ingredients').split('\r\n');
            const instructions = formData.get('instructions').split('\r\n');

            if(file.size === 0) {
                saveRecipe();
            }
            else {
                imageStorageRef.child(recipeRef.key).put(file)
                    .then(snapshot => {
                        return snapshot.ref.getDownloadURL();
                    })
                    .then(url => {
                        saveRecipe(url);
                    });
            }
            
            function saveRecipe(url) {
                
                const newRecipe = {
                    key: recipeRef.key,
                    owner: auth.currentUser.uid,
                    recipeTitle: formData.get('recipe-title'),
                    prepTime: formData.get('prep-time'),
                    cookTime: formData.get('cook-time'),
                    readyIn: formData.get('ready-in'),
                    servings: formData.get('servings'),
                    ingredients: ingredients,
                    mealType: formData.get('meal-type'),
                    instructions: instructions,
                    notes: formData.get('notes'),
                    cookbookTag: formData.get('cookbook-tag'),
                    dietType: formData.get('diet-type'),
                    imageURL: url || null

                };

                recipeRef.set(newRecipe).then(() => {
                    submitForm.reset();
                
                });
            }
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <div id="container">
                <form>
                    <div>
                        <label>Recipe Title: <input required name="recipe-title" placeholder="Recipe Title..."></label>
                    </div>
                    <div>
                        <label>Image upload: <input type="file" accept="image/*" name="image" placeholder="image uplaod"></label>
                    </div>
                        <select required id="meal-type" name="meal-type">Meal Type
                        <option disabled selected value> select meal type below </option>
                            <option id="breakfast" value="Breakfast">Breakfast</option>
                            <option id="lunch" value="Lunch">Lunch</option>
                            <option id="dinner" value="Dinner">Dinner</option>
                            <option id="dessert" value="Dessert">Dessert</option>
                            <option id="side" value="Side">Side</option>
                        </select>
                    <div>
                        <select id="diet-type" name="diet-type">Diet Type
                            <option disabled selected value> select diet type below </option>
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