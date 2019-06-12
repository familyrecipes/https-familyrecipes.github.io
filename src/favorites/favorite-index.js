import '../utils/check-auth.js';
import { auth } from '../services/firebase.js';
import FavoritesApp from '../favorites/FavoritesApp.js';

const root = document.getElementById('favorites-app');

auth.onAuthStateChanged((user) => {
    if(user){
        const app = new FavoritesApp();
        root.appendChild(app.render());
    }
});