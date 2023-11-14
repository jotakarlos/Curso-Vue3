<template>
    <MainLayout>
        <template #main>
            <h1>Slot main en ServiceView</h1>
        </template>
        <template #aux>
            <div>
                <h3>Slot aux en ServiceView</h3>
            </div>
        </template>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';

</script>

<style scoped></style>