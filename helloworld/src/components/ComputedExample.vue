<template>
    <div>
        <input type="text" v-model="message" />
        <h3>{{ message }}</h3>
        <h3>{{ reverse }}</h3>
    </div>
</template>


// COMPOSITION API con setup
<script lang="ts" setup>
import { Ref, ref, computed } from 'vue';
let message: Ref<string> = ref('');
const reverse = computed(() => message.value.split('').reverse().join(''));
</script>

// COMPOSITION API
<!-- <script lang="ts">
import { Ref, defineComponent, ref, computed } from 'vue';
export default defineComponent({
    name: 'ComputedExample',
    setup() {
        let message: Ref<string> = ref('')
        const reverse = computed(() => message.value.split('').reverse().join(''))
        return { message, reverse }
    }
})
</script> -->

// OPTION API
<!-- <script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'ComputedExample',
    data() {
        return { message: '' }
    },
    computed: {
        reverse(): string {
            return this.message.split('').reverse().join('');
        }
    },a
})
</script> -->


<style scoped></style>
