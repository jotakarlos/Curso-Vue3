<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <input type="text" v-model="message" />
        <button @click="handleClick">Di hola</button>
    </div>
</template>

// COMPOSITION API CON SETUP
<script lang="ts" setup>
import { defineProps, defineEmits, Ref, ref } from 'vue';
let message: Ref<string> = ref('')
const props = defineProps(
    {
        title: String,
        content: String
    }
)
const emit = defineEmits(['sayHi'])

const handleClick = () => {
    emit("sayHi", message.value)
}
</script>


// OPTION API CON SETUP
<!-- <script lang="ts">
import { Ref, defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'PostDetail',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: "Este post no tiene contenido"
        }
    },
    emits: ['sayHi'],
    setup(props, { emit }) {
        let message: Ref<string> = ref('')
        const handleClick = () => {
            emit("sayHi", message.value)
        }
        return { props, message, handleClick }
    }

})
</script> -->

<style scoped>
.post {
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>