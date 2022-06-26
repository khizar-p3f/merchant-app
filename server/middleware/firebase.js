require('dotenv').config();
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};
// Initialize Firebase as middleware
/*
const FirebaseMiddleware={
    initialize:async(req,res,next)=>{
        console.log(`[Firebase] enabled ${firebaseConfig.projectId}`);
        const app = initializeApp(firebaseConfig);        
        const db = getFirestore(app);
        req["firebase"]=app
        next();
    }
}

module.exports=FirebaseMiddleware
*/


//Initialize Firebase when app starts
const firebase = {
    initializeFirebase: () => {
        console.log(`[Firebase] enabled ${firebaseConfig.projectId}`);
        const app = initializeApp(firebaseConfig);
    }
}


module.exports = firebase