import '../utils/check-auth.js';
import { auth } from '../services/firebase.js';
import SubmitRecipeApp from './SubmitRecipeApp.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const submitRecipeApp = new SubmitRecipeApp();
    root.appendChild(submitRecipeApp.render());
});