<template>
  <!-- <button @click="show = !show">Mostrar/Ocultar</button>
  <Transition>
    <h1 v-if="show">Hello word animated</h1>
  </Transition> -->

  <input type="text" v-model="note" />
  <button @click="handleNote">Save Note</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="(note, index ) in notes" :key="index">
      <v-icon name="bi-file-code-fill" scale="1.5" hover="true" animation="pulse" fill="#00ff" />{{ note }}
      <button @click="removeNote(index)"><v-icon name="bi-trash3-fill" fill="red" /></button>
    </li>
  </TransitionGroup>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';
// const show = ref(false)

import { Ref, ref } from 'vue';

const notes: Ref<Array<string>> = ref([])
const note = ref('')

const handleNote = () => {

  notes.value.push(note.value)
  note.value = ''
}

const removeNote = (index: number) => {
  notes.value.splice(index, 1)
}

</script>

<style>
/* .v-enter-active {
  transition: opacity 0.5s ease;
}

.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}

.v-leave-to {
  opacity: 0;
} */


.list-enter-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
