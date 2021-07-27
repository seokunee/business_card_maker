import { firebaseAuth, googleProvider, githubProvider } from "./firebase";

class AuthService {
  login(providerName) {
    const authprovider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authprovider);
  }

  authState(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  signOut() {
    firebaseAuth.signOut();
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
