<template>
    <div class="card">
        <h3>{{ props.content.name }}</h3>
        <p>{{ props.content.age }}</p>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['content'])
</script>

<style scoped>
.card {
    padding: 25px 50px;
    border-radius: 15px;
    background-color: bisque;
    margin-bottom: 25px;
}
</style>