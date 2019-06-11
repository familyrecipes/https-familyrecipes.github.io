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
                ingredients: formData.get('ingredients')
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
                <div>
                    <input name="prep-time" placeholder="Prep time...">
                    <input name="cook-time" placeholder="Cook time...">
                    <input name="ready-in" placeholder="Ready in...">
                    <input name="servings" placeholder="Servings...">
                </div>
                <div>
                    <textarea name="ingredients"></textarea>
                </div>
                <div>
                    <textarea name="instructions" placeholder="Instructions..."></textarea>
                    <textarea name="notes" placeholder="Notes..."></textarea>
                </div>
                <button id="submit-button">Add recipe</button>
            </form>
    `;
    }
}

export default SubmitRecipe;