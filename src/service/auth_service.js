import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login = (providerName) => {
    const authprovider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authprovider);
  };

  authState = (onUserChanged) => {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  };

  signOut = () => {
    firebase.auth().signOut();
  };
}

export default AuthService;
