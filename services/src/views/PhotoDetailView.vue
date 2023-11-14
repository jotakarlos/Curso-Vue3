<template>
    <div>
        <div class="post-container">
            <div class="post-card">
                <h3>{{ photo.title }}</h3>
                <img :src="photo.thumbnailUrl" alt="Imagen foto">
            </div>
            <router-link :to="{ name: 'PhotoList' }" class="link">Volver al Listado</router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PhotoService from '@/services/PhotoService';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const service = new PhotoService();
const photo = service.getPhoto();


onMounted(async () => {
    const route = useRoute();
    await service.fecthPhotoById(route.params.id);
})

</script>

<style scoped></style>