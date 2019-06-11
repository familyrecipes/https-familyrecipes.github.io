import RecipeItem from '../src/recipe-list/RecipeItem.js';

const test = QUnit.test;
QUnit.module('Recipe Item test'); 

test('renders li', assert => {
    //arrange
    const recipe = {
        recipeTitle: 'I REIGN SUPREME'
    };

    const newRecipeItem = new RecipeItem({ recipe }); 

    const expected = /*html*/ `
        <li>
            <a href="">
                <h3>I REIGN SUPREME</h3>
                <img src="">
            </a>
        </li>
    `;

    //act
    const rendered = newRecipeItem.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});