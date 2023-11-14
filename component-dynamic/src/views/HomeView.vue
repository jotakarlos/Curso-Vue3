<template>
  <h1>Listado de Usuarios</h1>
  <input type="search" name="search" id="search" v-model="search" @keyup="handleSearch">
  <div>
    <button @click="handleLayout(ListLayout)">Lista</button>
    <button @click="handleLayout(CardLayout)">Tarjeta</button>
    <button @click="handleLayout(TableLayout)">Tabla</button>
  </div>

  <component :is='layout' :content="filteredUsers" />
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent, Ref } from 'vue'

const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))
const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))

const layout = ref(ListLayout)
const search = ref('')

const handleLayout = (cmp: any) => layout.value = cmp

const handleSearch = () => {
  filteredUsers.value = users.value.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()))
}

const users = ref([
  {
    name: "Luis",
    age: 50,
    position: "frontend"
  },
  {
    name: "Juanjo",
    age: 90,
    position: "fullstack"
  },
  {
    name: "Lucía",
    age: 25,
    position: "frontend"
  },
  {
    name: "Ana",
    age: 41,
    position: "backend"
  },
  {
    name: "Roberto",
    age: 55,
    position: "backend"
  },
])
const filteredUsers: Ref<Array<any>> = ref([])
filteredUsers.value = users.value

</script>
