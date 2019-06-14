import Component from '../Component.js';
import Header from '../shared/Header.js';
import RecipeList from '../recipe-list/RecipeList.js';
import { auth, userFavoritesRef } from '../services/firebase.js';
import Footer from '../shared/Footer.js';

class FavoritesApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const recipeList = new RecipeList({ recipes: [] });
        main.appendChild(recipeList.render());

        userFavoritesRef
            .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const recipes = value ? Object.values(value) : [];
                recipeList.update({ recipes });
            });

        const footer = new Footer();
        dom.appendChild(footer.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/ ` 
            <div>
                <main></main>
            </div>
        `;

    }

}
export default FavoritesApp;