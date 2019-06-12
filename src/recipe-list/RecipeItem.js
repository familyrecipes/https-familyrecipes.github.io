import Component from '../Component.js';
import { auth, userFavoritesRef } from '../services/firebase.js';
import Favorite from '../favorites/Favorite.js';

class RecipeItem extends Component {

    render() {
        const dom = this.renderDOM();

        const recipe = this.props.recipe;

        const userFavoriteRef = userFavoritesRef
            .child(auth.currentUser.uid)
            .child(recipe.key);

        const container = dom.querySelector('.favorite-container');
        const favorite = new Favorite({
            isFavorite: false,
            onFavorite: (makeFavorite) => {
                if(makeFavorite) {
                    userFavoriteRef.set({
                        key: recipe.key,
                        recipeTitle: recipe.recipeTitle,
                        // image: recipe.image
                    });
                }
                else {
                    userFavoriteRef.remove();
                }
            }
        });
        console.log(favorite.render());
        container.appendChild(favorite.render());

        userFavoriteRef.on('value', snapshot => {
            const isFavorite = Boolean(snapshot.val());
            favorite.update({ isFavorite });
        });

        return dom;
    }
 
    renderTemplate() {
        const recipe = this.props.recipe;
        return /*html*/ `
            <li>
                <div class="favorite-container"></div>
                <a href="./recipe-deets.html?key=${recipe.key}">
                <h3>${recipe.recipeTitle}</h3>
                <img src="">
                </a>
            </li>
        `;
    }
}

export default RecipeItem;