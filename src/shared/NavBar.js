import Component from '../Component.js';


class NavBar extends Component {

    renderTemplate() {
        const user = this.props.user;

        if(!user) {
            return `<div></div>`;
        }
        return /*html*/ `
            <nav>
                <a href="./recipe-list.html">View Recipes</a>
                <a href="./favorites.html">Favorites</a>
                <a href="./submit-recipe.html">Submit a Recipe</a>
            </nav>
    `;
    }
}

export default NavBar;