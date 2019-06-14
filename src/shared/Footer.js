import Component from '../Component.js';

class Footer extends Component {
    renderTemplate() {
        return /*html*/ `
            <div id="footer-container">
                <footer id="footer">
                    <a href="./about-us.html">About The Creators</a>
                </footer>
            </div>
        `;
    }
}

export default Footer;