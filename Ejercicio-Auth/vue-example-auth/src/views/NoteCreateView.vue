<template>
    <h1>CREAR NOTA</h1>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputName1" class="form-label">Note</label>
                <input type="text" class="form-control" id="exampleInputNote1" aria-describedby="noteHelp" v-model="note">
            </div>

            <button type="submit" class="btn btn-primary" @click.prevent="createNote">Submit</button>
            <p style="color: red;">{{ feedback }}</p>
        </form>
    </div>
</template>

<script lang="ts" setup>
import useAuth from '@/store/auth';
import { ref } from 'vue';
import router from '@/router';

const store = useAuth()
const feedback = ref('')
const note = ref('')

const createNote = async () => {
    feedback.value = 'Sending...'
    const response = await store.createNotes(note.value)
    if (response == false) {
        feedback.value = 'Error al crear Note'
    } else {
        router.push({ name: 'list' })
    }
}



</script>

<style scoped></style>