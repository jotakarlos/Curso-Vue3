<template>
    <h1>Dashboard</h1>
    <input type="text" v-model="note">
    <button @click="sendToServer">Enviar nota al servidor</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let note = ref('')

const sendToServer = async () => {
    const url = 'http:// XXXXXXXXXXXXXXXXXXXXX'


    // en el fetch  como segundo argumento le pasamos:
    /*
    method: el método que hacemos la peticion
    headers: el tipo de content, el tipo que acepta y el token en el Authorization
    body: conviertiendo en json los datos que vayamos a pasar al servidor
     */
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer token-guardado'
        },
        body: JSON.stringify({ note: note.value })
    })
    const response = await rawResponse.json()

}


</script>

<style scoped></style>