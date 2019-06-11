import RecipeItem from '../src/recipe-list/RecipeItem.js';

const test = QUnit.test;
QUnit.module('Recipe Item test'); 

test('renders li', assert => {
    //arrange

    const newRecipeItem = new RecipeItem({}); 

    const expected = /*html*/ `
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
    `;

    //act
    const rendered = newRecipeItem.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});