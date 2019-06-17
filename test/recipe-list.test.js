import RecipeItem from '../src/recipe-list/RecipeItem.js';

const test = QUnit.test;
QUnit.module('Recipe Item test'); 

test('renders li', assert => {
    //arrange
    const recipe = {
        recipeTitle: 'I REIGN SUPREME',
        cookbookTag: 'Claire\'s'

    };

    const newRecipeItem = new RecipeItem({ recipe }); 

    const expected = /*html*/ `
        <li> 
            <div class="favorite-container"></div> 
            <a href="./recipe-deets.html?key=${recipe.key}"> 
                <h5>Claire's</h5>
                <img src="./assets/food_default.png">
                <h3>I REIGN SUPREME</h3> 
            </a>
        </li>
    `;

    //act
    const rendered = newRecipeItem.renderTemplate();

    //assert
    assert.htmlEqual(rendered, expected);
});