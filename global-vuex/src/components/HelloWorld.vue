<template>
  <div>
    <h3>Counter</h3>
    <h3>{{ counter }} x2 = {{ times2 }}</h3>
    <button @click="increment">Incrementar</button>
  </div>
</template>


// STORE CON OPTION API
<!-- <script lang="ts" >
import { defineComponent } from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex';


export default defineComponent({
  name: 'HelloWorld',

  computed: {
    ...mapState(['counter']),
    ...mapGetters(['times2'])

  },
  methods: {
    ...mapMutations(['setCounter']),
    increment() {
      this.setCounter(this.counter + 1)
    }
  }

})
</script> -->


// STORE CON COMPOSITION API
<!-- <script lang="ts" >
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';


export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const store = useStore()
    const counter = computed(() => store.state.counter)
    const times2 = computed(() => store.getters.times2)
    const increment = () => store.commit('setCounter', counter.value + 1)
    return { increment, times2, counter }
  }
})

</script> -->

// STORE CON COMPOSITION API SETUP
<script lang="ts" setup >

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const counter = computed(() => store.state.counter)
const times2 = computed(() => store.getters.times2)
const increment = () => store.commit('setCounter', counter.value + 1)
</script>

<style scoped></style>