const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBYXNENATUQ0PlQAX70SikUuJPsDIz--lc",
//     authDomain: "sunglass-website-90881.firebaseapp.com",
//     projectId: "sunglass-website-90881",
//     storageBucket: "sunglass-website-90881.appspot.com",
//     messagingSenderId: "283922237390",
//     appId: "1:283922237390:web:3b18e3ccff79ff4d880d9f"
// };
export default firebaseConfig;
