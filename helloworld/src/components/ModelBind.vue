<template>
    <form>
        <input type="text" v-model="inputText">
        <input type="checkbox" name="terminos" id="terminos" v-model="terminos" />Acepto los términos y condiciones
        <select name="ciudad" id="ciudad" v-model="ciudad">
            <option value="es">España</option>
            <option value="en">UK</option>
            <option value="fr">Francia</option>
            <option value="it">Italia</option>
        </select>
    </form>
    <!-- <h3>{{ inputText }}</h3>
    <h3>{{ terminos }}</h3> -->
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

let inputText: Ref<string> = ref('');
let terminos: Ref<boolean> = ref(false);
let ciudad: Ref<string> = ref('es');
</script>

<style scoped></style>