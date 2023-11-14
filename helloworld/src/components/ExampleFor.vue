<template>
    <!-- <ul>
        <li v-for="country in countries" v-bind:key="country">{{ country }}</li>
    </ul> -->
    <ul>
        <li v-for="country in countries" v-bind:key="country.code">{{ country.code }}:{{ country.name }}</li>
    </ul>
</template>

<!-- Array string -->
<!-- <script lang="ts" setup>
import { Ref, ref } from 'vue';
let countries: Ref<Array<string>> = ref([
    'Spain', 'France', 'UK', 'United States', 'Italy', 'Portugal'
])
</script> -->

<!-- Objetos -->
<script lang="ts" setup>
import { Ref, ref } from 'vue';
interface ICountry {
    code: string;
    name: string;
}
let countries: Ref<Array<ICountry>> = ref([
    {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'fr',
        name: 'France'
    },
    {
        code: 'en',
        name: 'UK'
    },
    {
        code: 'us',
        name: 'United States'
    },
    {
        code: 'it',
        name: 'Italy'
    },
    {
        code: 'pt',
        name: 'Portugal'
    }
])
</script>

<style scoped></style>