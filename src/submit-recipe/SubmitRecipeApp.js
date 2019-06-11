import Component from '../Component.js';
import SubmitRecipe from './SubmitRecipe.js';
import Header from '../shared/Header.js';
import { auth, recipesByUserRef } from '../services/firebase.js';

class SubmitRecipeApp extends Component {
    render() {
        const dom = this.renderDOM();
        
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const keyRef = recipesByUserRef.child(auth.currentUser.uid);

        const submitRecipe = new SubmitRecipe({ key: keyRef.key });
        main.appendChild(submitRecipe.render());

        recipesByUserRef
            .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const userRecipes = value ? Object.values(value) : [];
                console.log(userRecipes);

            });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
    `;
    }
}

export default SubmitRecipeApp;