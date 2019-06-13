const config = {
    apiKey: 'AIzaSyAI33Z8n8ZLws4sA-KL5X6GaW8zRX9p4uY',
    authDomain: 'familyrecipes-d144f.firebaseapp.com',
    databaseURL: 'https://familyrecipes-d144f.firebaseio.com',
    projectId: 'familyrecipes-d144f',
    storageBucket: 'familyrecipes-d144f.appspot.com',
    messagingSenderId: '759581411685',
    appId: '1:759581411685:web:3a3a4243b44afda7'
};

export const app = firebase.initializeApp(config);


export const auth = firebase.auth();
export const db = firebase.database();
export const storage = firebase.storage();

export const usersRef = db.ref('users');
export const allRecipesRef = db.ref('all-recipes');
export const recipesByUserRef = db.ref('recipes-by-user');
export const userFavoritesRef = db.ref('user-favorites');
export const imageStorageRef = storage.ref('images');