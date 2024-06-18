// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1qsMBDz4OqsodrjQ1T4lJoCFfXUSYYOE",
    authDomain: "clone-olx-web.firebaseapp.com",
    projectId: "clone-olx-web",
    storageBucket: "clone-olx-web.appspot.com",
    messagingSenderId: "461649949741",
    appId: "1:461649949741:web:2ec9880cd4f4eec3d734a4",
    measurementId: "G-8Z74PZ2XGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();


var email = document.getElementById("new-mail");
var password = document.getElementById("new-pass");

window.genEmail = function () {
    window.location.assign("../email/createmail&pass.html")
}

window.signupUser = function () {
    var obj = {
        email: email.value,
        password: password.value,
    };
    console.log(obj);


    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (res) {
            console.log(res);
            obj.id = res.user.uid;
            var refrence = ref(db, `users/${obj.id}`);
            set(refrence, obj)
                .then(function (dbRes) {
                    console.log(dbRes)
                })
                .catch(function (dbErr) {
                    console.log(dbErr)
                });
        })
        .catch(function (err) {
            console.log(err.message);
            alert(err.message)
        })

    window.location.href = "../login/login.html";
}