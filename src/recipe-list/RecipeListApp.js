import Component from '../Component.js';
import Header from '../shared/Header.js';
import RecipeList from './RecipeList.js';
import { recipesByUsersRef}

class RecipeListApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const recipeList = new RecipeList();
        dom.appendChild(recipeList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default RecipeListApp;