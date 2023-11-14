<template>
    <div>
        <h1>Social Login</h1>

        <button @click="loginGoogle">Login with Google</button>

        <button @click="loginFacebook">Login with Facebook</button>

        <button @click="loginTwitter">Login with Twitter</button>

        <button @click="loginGithub">Login with Github</button>

    </div>
</template>

<script lang="ts" setup>
// Importamos el proveedor de Goggle desde firebase
import { GithubAuthProvider, TwitterAuthProvider, FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

// Creamos instancia de Provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth()

// Metodo para hacer el proceso de Login con Google
const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            // Asi obtenemos el token
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            alert("Success!!");
        })
        .catch((error) => {
            alert("Login failed!!");
        })
}

// Metodo para hacer el proceso de Login con Facebook
const loginFacebook = () => {
    signInWithPopup(auth, facebookProvider)
        .then((result) => {
            // Asi obtenemos el token
            // const credential = FacebookAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            alert("Success!!");
        })
        .catch((error) => {
            alert("Login failed!!");
        })
}
// Metodo para hacer el proceso de Login con Twitter
const loginTwitter = () => {
    signInWithPopup(auth, twitterProvider)
        .then((result) => {
            // Asi obtenemos el token
            // const credential = TwitterAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            alert("Success!!");
        })
        .catch((error) => {
            alert("Login failed!!");
        })
}
// Metodo para hacer el proceso de Login con Github
const loginGithub = () => {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            // Asi obtenemos el token
            // const credential = GithubAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            alert("Success!!");
        })
        .catch((error) => {
            alert("Login failed!!");
        })
}

</script>

<style scoped></style>