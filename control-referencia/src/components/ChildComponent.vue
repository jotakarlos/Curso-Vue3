<template>
    <h1>Porcentaje completado : {{ percentage }}%</h1>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineExpose } from 'vue';
const percentage = ref(0)

onMounted(() => {
    // Trae el valor del porcentaje del servicio
    percentage.value = 24
})

const recalculate = () => {
    // Actualiza el valor del porcentaje a traves del servicio
    percentage.value = 42
}

defineExpose({ recalculate })
</script>

// Composition api sin setup
<!-- <script lang="ts">
import { onMounted, ref, defineExpose, defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const percentage = ref(0)
        const recalculate = () => {
            // Actualiza el valor del porcentaje a traves del servicio
            percentage.value = 42
        }
        defineExpose({ recalculate })
        onMounted(() => {
            // Trae el valor del porcentaje del servicio
            percentage.value = 24
        })
        return { percentage, recalculate }

    }
})
</script> -->

<style scoped></style>