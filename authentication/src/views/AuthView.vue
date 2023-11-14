<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp"
                    placeholder="Enter Usuario" v-model="usuario">
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
import AuthService from '@/services/AuthService'

let usuario: Ref<string> = ref("")
let password: Ref<string> = ref("")


const login = async () => {
    const auth = new AuthService();
    const success = await auth.login(usuario.value, password.value);
    if (success) {
        alert("Login correcto!");
    } else {
        alert("Login Incorrecto!");
    }
}




</script>

<style scoped></style>