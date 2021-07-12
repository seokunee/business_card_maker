import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login = (providerName) => {
    const authprovider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authprovider);
  };

  authState = (onUserChanged) => {
    firebase.auth().onAuthStateChanged(onUserChanged);
  };

  signOut = (history) => {
    firebase.auth().signOut();
  };
}

export default AuthService;
