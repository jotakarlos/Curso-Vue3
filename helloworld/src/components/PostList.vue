<template>
    <div class="container">
        <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content" @sayHi="showAlert" />
    </div>
</template>

<script lang="ts" setup>
import PostDetail from './PostDetail.vue';

interface Post {
    title: string,
    content: string
}


let info: Array<Post> = [
    {
        title: "Este es el post 1",
        content: "Texto de ejemplo en el post 1"
    },
    {
        title: "Este es el post 2",
        content: "Texto de ejemplo en el post 2"
    },
    {
        title: "Este es el post 3",
        content: "Texto de ejemplo en el post 3"
    },
    {
        title: "Este es el post 4",
        content: "Texto de ejemplo en el post 4"
    },
    {
        title: "Este es el post 5",
        content: "Texto de ejemplo en el post 5"
    }
]

function showAlert(msg: string) {
    alert(msg)
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>