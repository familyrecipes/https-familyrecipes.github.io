import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth, usersRef } from '../services/firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

class AuthApp extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Sign Up for Cookbooks' });
        const main = dom.querySelector('main');
        dom.insertBefore(header.render(), main);

        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: './',
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            callbacks: {
                signInSuccessWithAuthResult(authResult) {
                    const user = authResult.user;

                    usersRef.child(user.uid)
                        .set({
                            uid: user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        });

                    return true;
                }
            }
            
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    <p>Get signed in to our Cookbook App!</p>
                    <div id="firebaseui-auth-container">
                        <!--firebaseui auth will go here...-->
                    </div>
                </main>
            </div>
        `;
    }
}

export default AuthApp;