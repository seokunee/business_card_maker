import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// 모듈 안에 함수가 어디에 위치하는지 정확하게 짚어 줌으로서 쓸데없는 함수들의 import를 막는다.

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// initializeApp을 하면, firebaseConfig 정보를 가지는 firebase가 return되고 위에 그것을 firebaseApp으로
// 저장하였다.
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
