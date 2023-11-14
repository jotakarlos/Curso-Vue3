<template>
    <div>
        <h1>Listado de Fotos</h1>
        <ul>
            <li v-for="photo in photos" :key="photo.id">
                {{ photo.id }}<router-link :to="{ name: 'PhotoDetail', params: { id: photo.id } }">{{ photo.title
                }}</router-link>

                <!-- <img :src="photo.url" alt=""> -->
            </li>
        </ul>

    </div>
</template>

<script lang="ts" setup>
import PhotoService from '@/services/PhotoService';
import { onMounted } from 'vue';

const service = new PhotoService();
const photos = service.getPhotos();

onMounted(async () => {
    await service.fetchAll();
});
</script>

<style scoped></style>