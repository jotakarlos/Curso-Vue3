<template>
    <h1>LOGIN</h1>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="email">

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="login">Submit</button>
            <p style="color: red;">{{ feedback }}</p>
        </form>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import useAuth from '@/store/auth';
import { ref } from 'vue';


const store = useAuth()

const email = ref('')
const password = ref('')

const feedback = ref('')

const login = async () => {
    feedback.value = 'Sending...'
    const response = await store.login(email.value, password.value)
    if (response == false) {
        feedback.value = 'Login error'
    } else {
        router.push({ name: 'list' })
    }
}

</script>

<style scoped></style>