import Component from '../Component.js';
import { auth, recipesByUserRef, imageStorageRef } from '../services/firebase.js';

// not a bad idea to clean up lists:
function toList(items) {
    return items
        // split the string to an array on linebreak:
        .split('\r\n')
        // remove whitespace from beginning and end
        .map(text => text.trim())
        // remove empty list items
        .filter(text => text !== '');
}

// easier to put these here and use template strings
const INGREDIENTS_PLACEHOLDER = `
2 cups of flour
1/2 cup of sugar
2 eggs
etc...`;
        
const INSTRUCTIONS_PLACEHOLDER = `
Add flour and sugar to a large mixing bowl
Thoroughly mix together
Add eggs and whisk until desired consistency
etc...`;


class SubmitRecipe extends Component {

    render() {
        const form = this.renderDOM();
        const submitForm = form.querySelector('form');

        const submitButton = form.querySelector('#submit-button');
        // This is the user's id under "recipes-by-user", not the recipe.
        // Instead of passing in, you could just use auth.currentUser.uid
        const recipeKey = recipesByUserRef.child(this.props.key);
        
        submitButton.addEventListener('click', event => {
            event.preventDefault();
            const formData = new FormData(submitForm);
            const file = formData.get('image');
            const recipeRef = recipeKey.push();
            const ingredients = toList(formData.get('ingredients'));
            const instructions = toList(formData.get('instructions'));

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
                    dietType: formData.get('diet-type') || '',
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
        // These can live as constants at top of module
        // const ingredientPlaceholder = '2 cups of flour\n1/2 cup of sugar\n2 eggs\nect...';
        // const instructionsPlaceholder = 'Add flour and sugar to a large mixing bowl\nThouroughly mix together\nAdd eggs and whisk until disired consistancy\nEct...';

        return /*html*/ `
            <div id="container">
                <form id="form">
                    <div>
                        <!--Try and be more horizontal instead of long lines-->
                        <label>
                            Recipe Title: 
                            <input id="title-input" required name="recipe-title" placeholder="Recipe Title...">
                        </label>
                    </div>

                    <div>
                        <label>Cookbook Name: <input id="cookbook-input" required name="cookbook-tag" placeholder="Cookbook Name..."></label>
                    </div>

                    <div>
                        <label>Image upload: <input id="image-upload" type="file" accept="image/*" name="image"></label>
                    </div>

                    <div>
                        <select required id="meal-type" name="meal-type">Meal Type
                        <option disabled selected value> select meal type here </option>
                            <option required id="breakfast" value="Breakfast">Breakfast</option>
                            <option id="lunch" value="Lunch">Lunch</option>
                            <option id="dinner" value="Dinner">Dinner</option>
                            <option id="dessert" value="Dessert">Dessert</option>
                            <option id="side" value="Side">Side</option>
                        </select>
                        <select id="diet-type" name="diet-type">Diet Type
                            <option disabled selected value> select diet type here </option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Gluten-free">Gluten-free</option>
                        </select>
                    </div>

                    <div id="time-inputs">
                        <input name="prep-time" placeholder="Prep time...">
                        <input name="cook-time" placeholder="Cook time...">
                        <input name="ready-in" placeholder="Ready in...">
                        <input name="servings" placeholder="Servings...">
                    </div>
                    <div>
                        <p class="howto" for="ingredients">Ingredients: Type an ingredient then press enter (make sure each ingredient is on a new line! Without blank lines.).</p>
                        <textarea id="ingredients" required name="ingredients" placeholder="${INGREDIENTS_PLACEHOLDER}"></textarea>
                    </div>
                    <div>
                        <p class="howto" for="instructions">Instructions: Write a step then press enter (make sure each step starts on a new line! Without blank lines).</p>
                        <textarea id="instructions" required name="instructions" placeholder="${INSTRUCTIONS_PLACEHOLDER}"></textarea>
                    </div>
                    
                    <div>
                        <label for="notes">Notes</label>
                    </div>
                    <div>
                        <textarea id="notes" name="notes" placeholder="Notes..."></textarea>
                    </div>      
                    <button id="submit-button">Add recipe</button>
                </form>
            </div>
        `;
    }
}

export default SubmitRecipe;