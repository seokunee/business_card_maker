import firebase from "firebase/app";

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
export default firebaseApp;
