<template>
    <h1>LISTADO NOTES</h1>
    <button class="btn btn-primary" @click="logout">Logout</button>
    <div class="container">
        <table class="table" v-if="notes.length > 0">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Note</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="note in notes" :key="note.id">
                    <td>{{ note.id }}</td>
                    <td>{{ note.content }}</td>
                </tr>

            </tbody>
        </table>
        <p v-else>No existen notas</p>
    </div>
</template>

<script lang="ts" setup>
import useAuth from '@/store/auth';
import { Ref, onMounted, ref } from 'vue';
import INote from '@/interfaces/INote'
import router from '@/router';

const store = useAuth()

const notes: Ref<Array<INote>> = ref([])

onMounted(async () => {
    notes.value = await store.getNotes()

})

const logout = () => {
    store.logout()
    router.push({ name: 'login' })
}


</script>

<style scoped></style>