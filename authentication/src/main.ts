import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9jj0-YO_X02zfNfe65joEuEgHlr3uss0",
    authDomain: "curso-vue3-a7944.firebaseapp.com",
    projectId: "curso-vue3-a7944",
    storageBucket: "curso-vue3-a7944.appspot.com",
    messagingSenderId: "847903814837",
    appId: "1:847903814837:web:53cfa5729267d5ecf8bafc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
