<template>
    <div>
        <div class="post-container">
            <div class="post-card">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </div>
            <router-link :to="{ name: 'PostList' }" class="link">Volver al Listado</router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
// Importamos el Servicio
import PostService from '@/services/PostService';
// Importamos el mounted
import { onMounted } from 'vue';
// importamos el useRoute para recoger los parametros necesarios
import { useRoute } from 'vue-router';

// creamos instancia de nuestro servicio
const service = new PostService()
// Recogemos los datos recibidos del Servicio
const post = service.getPost()

// hacemos el fetch al montar el componente
onMounted(async () => {
    // Hacemos uso del useRoute y recogemos el id que habiamos pasado por la ruta
    const route = useRoute()
    await service.fetchPostById(route.params.id)
})

</script>

<style lang="scss" scoped>
.post-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.post-card {
    padding: 25px;
    width: 750px;
    border-radius: 15px;
    border: 1px solid #ccc;
}

.link {
    margin-top: 25px;
    color: $primaryColor;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: $linkColor;
        font-weight: bold;
    }
}
</style>