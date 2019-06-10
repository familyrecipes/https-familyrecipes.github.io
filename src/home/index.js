import '../utils/check-auth.js';
import { auth } from '../services/firebase.js';
import App from './App.js';

const root = document.getElementById('app');

auth.onAuthStateChanged((user) => {
    if(user){
        const app = new App();
        root.appendChild(app.render());
    }
});