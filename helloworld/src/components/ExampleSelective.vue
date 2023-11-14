<template>
    <!-- <h1 v-if="age < 18">Eres menor de edad</h1>
    <h1 v-else>Eres mayor de edad</h1> -->
    <h1 v-show="age < 18">Eres menor de edad</h1>
    <h1 v-show="age >= 18">Eres mayor de edad</h1>
</template>


<!-- COMPOSITION API CON SETUP -->
<script lang="ts" setup>
let age = 19
</script>

<!-- COMPOSITION API NORMAL -->
<!-- <script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ExampleSelective',
    setup() {
        let age = 10;
        return { age };

    }
});
</script> -->

<style scoped></style>