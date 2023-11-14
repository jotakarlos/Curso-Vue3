<template>
    <h3>Counter option API</h3>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'CounterOptionApi',
    components: {},
    data() {
        let counter = 0;
        return { counter };
    },
    methods: {
        addCounter() {
            this.counter++;
        },
    },
});
</script>

<style></style>
