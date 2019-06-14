import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const footer = new Footer();
        dom.appendChild(footer.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <p>Welcome to Sauce Boss!<br> 
                    Here you can browse community-submitted recipes, save your favorite recipes, and most importantly: add recipes of your own!<br>
                    Click any of the links above to get started, and thanks for joining us!</p>
                </main>
            </div>
        `;
    }
}

export default App;