import Component from '../Component.js';
import Profile from '../shared/Profile.js';
import { auth } from '../services/firebase.js';

class Header extends Component {

    render() {
        const dom = this.renderDOM();

        const profile = new Profile();
        dom.appendChild(profile.render());

        auth.onAuthStateChanged(user => {
            console.log(user);
            profile.update({ user });
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