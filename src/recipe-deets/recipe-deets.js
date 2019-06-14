import '../utils/check-auth.js';
import { auth } from '../services/firebase.js';
import RecipeDeetsApp from './RecipeDeetsApp.js';

const root = document.getElementById('recipe-deets-app');

auth.onAuthStateChanged((user) => {
    if(user){
        const recipeDeetsApp = new RecipeDeetsApp();
        root.appendChild(recipeDeetsApp.render());
    }
});