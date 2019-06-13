import app from '../src/services/firebase.js';
import './html-equal.js';
import './Profile.test.js';
import './recipe-list.test.js';

QUnit.done(() => {
    app.delete();
});