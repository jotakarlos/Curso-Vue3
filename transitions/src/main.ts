import { createApp } from 'vue'
import App from './App.vue'
// Iconos
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiFileCodeFill, BiTrash3Fill } from 'oh-vue-icons/icons'

addIcons(BiFileCodeFill, BiTrash3Fill)


const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
