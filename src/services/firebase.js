const config = {
    apiKey: 'AIzaSyD0Ayv64PLWHXmd7BFeLHbXwS3cV1JbM1k',
    authDomain: 'pokechat-79947.firebaseapp.com',
    databaseURL: 'https://pokechat-79947.firebaseio.com',
    projectId: 'pokechat-79947',
    storageBucket: 'pokechat-79947.appspot.com',
    messagingSenderId: '758093532128',
    appId: '1:758093532128:web:0b79d36989a55d49'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const userFavoritesRef = db.ref('favoritesByUser');

export const pokemonFavoritesRef = db.ref('favoritesByPokemon');

export const gymsRef = db.ref('gyms');

export const usersRef = db.ref('users');

// play with the db in the console:
// window.db = db;