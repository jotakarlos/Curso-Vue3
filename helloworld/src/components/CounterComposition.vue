<template>
    <h3>Counter Composition API</h3>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

let counter: Ref = ref(0);
const addCounter = (): void => {
    counter.value++
}


</script>

<style></style>
