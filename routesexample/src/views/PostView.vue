<template>
    <h1>Post numero {{ postId }}</h1>
</template>


<script lang="ts"  setup>
import { Ref, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

let postId: Ref<string | string[]> = ref('')

onMounted(() => {
    const route = useRoute()
    postId.value = route.params.id
})

</script>