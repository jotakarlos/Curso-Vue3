<template>
    <h1>REGISTER</h1>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputName1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" v-model="name">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="email">

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="register">Submit</button>
            <p style="color: red;">{{ feedback }}</p>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useAuth from '@/store/auth';
import router from '@/router';

const store = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')

const feedback = ref('')

const register = async () => {
    feedback.value = 'Sending...'
    const response = await store.register(name.value, email.value, password.value)
    if (response == false) {
        feedback.value = "Error en el registro"
    } else {
        router.push({ name: 'list' })
    }
}


</script>

<style scoped></style>