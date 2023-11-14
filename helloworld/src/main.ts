import { createApp } from 'vue'
import App from './App.vue'

// Esto es por defecto
// createApp(App).mount('#app')


const app = createApp(App)

// Creamos las directivas personalizadas antes de montar la app

// DIRECTIVA SIMPLE
app.directive('font-size', {
    beforeMount:(el,binding) => {
        el.style.fontSize = "40px";
        el.style.color = 'red';
}
})

// DIRECTIVA CON VALUE
app.directive('custom-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value + "px";
    }
})

// DIRECTIVA CON ARGUMENTOS
app.directive('cambiar-tamanho', {
    beforeMount: (el, binding) => {
        let size = 18
        switch (binding.arg) {
            case 'sm':
                size = 10
                break
            case 'md':
                size = 18
                break
            case 'lg':
                size =25
                break
            case 'xl':
                size = 40
                break
            case 'xxl':
                size = 72
                break
        }

        el.style.fontSize = size + 'px'
    }
})

// DIRECTIVA CON MODIFICADORES
app.directive('custom-font', {
    beforeMount: (el, binding) => {
        let size = 18
        let color = 'black'

        if (binding.modifiers.sm) {
            size=10
        } else if (binding.modifiers.lg) {
            size=25
        }
        else if (binding.modifiers.xxl) {
            size = 72
        }
devicePixelRatio
        if (binding.modifiers.red) {
            color='#ff0000'
        } else if (binding.modifiers.green) {
            color = '#00ff00'
        } else if (binding.modifiers.blue) {
            color = '#0000ff'
        }

        el.style.fontSize = size + 'px'
        el.style.color=color
    }
})

app.mount('#app')

