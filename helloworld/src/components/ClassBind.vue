<template>
    <!-- <p :class="{ 'danger': hasError }">El mensaje se ha enviado correctamente</p> -->
    <p :style="{ backgroundColor: '#ccc', color: c }">El mensaje se ha enviado correctamente</p>
    <button v-on:click="handleClick">Cambiar color</button>
</template>

<!-- COMPOSITION API CON SETUP-->
<script lang="ts" setup>
import { ref } from 'vue';
// let hasError = false;
let c = ref('#fff');
const handleClick = () => {
    c.value = '#ff0000'
}
</script>

<!-- COMPOSITION API SIN SETUP -->
<!-- <script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'ClassBind',
    setup() {
        let c = ref('#fff');
        const handleClick = () => {
            c.value = '#ff0000';
        };
        return { c, handleClick }
    }
})
</script> -->

<!-- OPTION API -->
<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ClassBind',
    data() {
        return { c: '#fff' }
    },
    methods: {
        handleClick() {
            this.c = '#ff0000'
        }
    },
})
</script> -->

<style>
.danger {
    color: red;
}
</style>