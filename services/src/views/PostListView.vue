<template>
    <h1>Listado de Posts </h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{ post.title }}</router-link>
        </li>
    </ul>
</template>


// COMPOSITION API SETUP
<script lang="ts" setup>
import PostService from '@/services/PostService';
import { onMounted } from 'vue';

// creamos una referencia a nuestro postservice,ejecuta el constructor
const service = new PostService()
// solicitamos los post
const posts = service.getPosts()

// Hacemos el fetch al montar el componente
onMounted(async () => {
    await service.fetchAll()
})

</script>


// COMPOSITION API NORMAL
<!-- <script lang="ts" >
import { defineComponent, onMounted } from 'vue';
import PostService from '@/services/PostService';

export default defineComponent({
    name: 'PostList',
    setup() {
        // creamos una referencia a nuestro postservice,ejecuta el constructor
        const service = new PostService()
        // solicitamos los post
        const posts = service.getPosts()

        // Hacemos el fetch al montar el componente
        onMounted(async () => {
            await service.fetchAll()
        })

        return { posts }
    }
})
</script> -->


// OPTION API
<!-- <script lang="ts" >
import PostService from '@/services/PostService';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PostList',
    data() {
        // creamos una referencia a nuestro postservice,ejecuta el constructor
        const service = new PostService()
        // solicitamos los post
        const posts = service.getPosts()
        return { posts, service }
    },
    // Hacemos el fetch al montar el componente
    async mounted() {
        await this.service.fetchAll()
    }

})
</script> -->

<style scoped lang="scss">
.post-list {
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;

    li {
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;

        a {
            text-decoration: none;
            color: $primaryColor;
            cursor: pointer;

            &:hover {
                color: $linkColor;
                font-weight: bold;
            }
        }
    }



}
</style>