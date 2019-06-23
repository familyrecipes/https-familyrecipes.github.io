import Component from '../Component.js';
import SubmitRecipe from './SubmitRecipe.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import { auth, recipesByUserRef } from '../services/firebase.js';

class SubmitRecipeApp extends Component {
    
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const keyRef = recipesByUserRef.child(auth.currentUser.uid);
        
        // Isn't keyRef.key same thing as auth.currentUser.uid?
        const submitRecipe = new SubmitRecipe({ key: keyRef.key });
        main.appendChild(submitRecipe.render());

        const footer = new Footer();
        main.appendChild(footer.render());

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