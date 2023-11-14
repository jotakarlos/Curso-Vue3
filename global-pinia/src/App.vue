<template>
  <h3>{{ store.count }} x 2 = {{ store.times2 }}</h3>
  <button @click="store.increment(1)">Incrementar</button>
  <button @click="store.descrement(1)">Descrementar</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from './store/counter';

const store = useCounterStore()

</script>

<style></style>
