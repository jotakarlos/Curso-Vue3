<template>
    <div>Hola Mundo</div>
</template>


// Option API
<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CycleOption",
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
    },
    updated() {
        console.log('updated');
    },
    unmounted() {
        console.log('unmounted');
    },

})

</script> -->


// Composition API. Aqui usamos hooks
<script lang="ts" setup>
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
    console.log('Mounted');
})

onUpdated(() => {
    console.log('Updated');
})

</script>

<style scoped></style>