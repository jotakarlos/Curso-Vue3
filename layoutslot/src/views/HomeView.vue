<template>
  <MainLayout>
    <template #main>
      <h1>Slot main en HomeView</h1>
    </template>
    <template #aux>
      <div>
        <h3>Slot aux en HomeView</h3>
        <p>X position is: {{ x }}, Y position is:{{ y }}</p>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { useMouse } from '@/composables/useMouse'

const { x, y } = useMouse()

</script>
