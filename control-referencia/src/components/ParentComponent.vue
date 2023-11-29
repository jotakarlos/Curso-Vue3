<template>
    <ChildComponent ref="percentageComponent" />
    <button @click="banco">Añadir cuenta bancaria</button>
    <div>
        <!-- <img v-lazy="{
            src: 'https://picsum.photos/1200/800',
            loading: 'dragon_ball_z.jpg',
            error: 'it.png',
            delay: 2000
        }" width="400"> -->

        <img v-lazy="{
            src: lazyOptions.src,
            lifecycle: lazyOptions.lifecycle,
            delay: lazyOptions.delay
        }">
    </div>
</template>

<script lang="ts" setup>
import { VNode, ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const percentageComponent = ref(null)

const banco = () => {
    // Conectar con el servicio y subir la info

    // Recalcular
    // percentageComponent.value.recalculate()
}

const lazyOptions = ref({
    src: 'https://picsum.photos/1200/800',
    delay: 2000,
    lifecycle: {
        // Cuando ewsta cargando
        loading: (el: VNode) => {
            console.log('cargando imagen', el)
        },
        // Cuando hay un error
        error: (el: VNode) => {
            console.log('error en la carga de la imagen', el)
        },
        // Cuando ha sido cargado
        loaded: (el: VNode) => {
            console.log('imagen cargada', el)
        }

    }
})
</script>

<style scoped>
img {
    width: 400px;
    height: 250px;
    margin: 25px;

}

img[lazy=loading] {
    width: 400px;
    border: 1px solid black;
    background-image: url('../../public/dragon_ball_z.jpg');
    background-repeat: no-repeat;
}

img[lazy=loaded] {
    width: 400px;
    border: 4px solid green;
}

img[lazy=error] {
    width: 400px;
    border: 2px solid red;
}
</style>