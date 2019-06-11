import Component from '../Component.js';

class RecipeList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul id="recipe-list">
                <li>
                    <a href="">
                        <h3>Bananas</h3>
                        <img src="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <h3>Apples</h3>
                        <img src="">
                    </a>
                </li>
            </ul> 
    `;
    }
}

export default RecipeList;