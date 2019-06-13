import Component from '../Component.js';


class NavBar extends Component {

    renderTemplate() {
        const user = this.props.user;

        if(!user) {
            return `<div></div>`;
        }
        return /*html*/ `
            <nav id="nav-bar">
                <a href="./recipe-list.html">View Recipes</a>
                <p>✼</p>
                <a href="./favorites.html">Favorites</a>
                <p>✼</p>
                <a href="./submit-recipe.html">Submit a Recipe</a>
            </nav>
    `;
    }
}

export default NavBar;