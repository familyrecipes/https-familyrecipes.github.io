import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('Profile Component'); 

test('renders profile with full user props', assert => {
    //arrange
    const user = {
        displayName: 'Name', 
        photoURL: '../assets/default-avatar.png'
    };

    const profile = new Profile({ user }); 

    const expected = /*html*/ `
        <div class="profile">
            <img src="../assets/default-avatar.png">
            <span>Name</span>
            <button>Sign Out</button>
        </div>
    `;

    //act
    const rendered = profile.renderTemplate();
    
    //assert
    assert.htmlEqual(rendered, expected);
});


