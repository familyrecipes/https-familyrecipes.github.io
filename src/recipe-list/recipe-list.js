import '../utils/check-auth.js';
import { auth } from '../services/firebase.js';
import RecipeListApp from './RecipeListApp.js';

const root = document.getElementById('recipe-list-app');

auth.onAuthStateChanged((user) => {
    if(user){
        const recipeListApp = new RecipeListApp();
        root.appendChild(recipeListApp.render());
    }
});