<template>
  <!-- <h3>{{ store.count }}</h3>
  <button @click="store.increment(1)">Incrementar</button> -->

  <!-- Watchers -->
  <h1>Notas:</h1>
  <input type="text" v-model="note">
</template>


<!-- <script lang="ts" setup>
import { useStore } from './store/useStore';

const store = useStore()
store.init()
</script> -->

<!-- Watchers -->
<!-- OPTION API -->
<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      note: ""
    }
  },
  watch: {
    note(value, oldvalue) {
      // alert("Valor: " + value + " Antiguo valor: " + oldvalue)
      localStorage.setItem("note", value);
    }
  }
})
</script> -->

<!-- COMPOSITION API WATCH EFFECT-->
<!-- <script lang="ts" >
import { defineComponent, ref, watchEffect } from 'vue';


export default defineComponent({
  setup() {
    const note = ref('')
    watchEffect(() => {
      localStorage.setItem("note", note.value);
    })

    return { note }
  }
})
</script> -->

<!-- COMPOSITION API CON SETUP Y WATCH -->
<script lang="ts" setup>
import { ref, watch } from 'vue';

const note = ref('')

// Objeto que queremos observar, accion
watch(note, () => alert("valor modificado: " + note.value))
</script>


<style></style>
