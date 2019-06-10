import Component from '../Component.js';
import Profile from '../shared/Profile.js';
import NavBar from './NavBar.js';
import { auth } from '../services/firebase.js';

class Header extends Component {

    render() {
        const dom = this.renderDOM();

        const profile = new Profile();
        dom.appendChild(profile.render());

        const navBar = new NavBar();
        dom.appendChild(navBar.render());

        auth.onAuthStateChanged(user => {
            profile.update({ user });

            navBar.update({ user });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div id="header">
                <header>
                    <h1>Hello from header component</h1>
                </header>
            </div>
        `;
    }
}

export default Header;