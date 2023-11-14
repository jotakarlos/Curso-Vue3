<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInput" aria-describedby="emailHelp"
                    placeholder="Enter Email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password"
                    v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="login">Submit</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

let email: Ref<string> = ref("")
let password: Ref<string> = ref("")


const login = () => {
    // Nos traemos el usuario que se loguea
    const user = getAuth();
    // Ahora los autenticamos
    signInWithEmailAndPassword(user, email.value, password.value)
        // Si la utenticacion ha sido correcta
        .then(() => {
            alert('Exito!!');
        })
        .catch((error) => {
            alert(error.message)
        });
}




</script>

<style scoped></style>