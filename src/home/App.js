import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth, usersRef } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                <p>Welcome to Family Recipes! Here you can browse heirloom recipes from families just like yours, view your favorite recipes, and most importantly: add recipes of your own!</p>
                </main>
            </div>
    `;
    }
}

export default App;