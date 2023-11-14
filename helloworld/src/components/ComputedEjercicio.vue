<template>
    <div class="container-prod">
        <div class="prod-inputs">
            <label for="producto" v-custom-font.sm.red>Producto</label>
            <input type="text" v-model="producto.nombreproducto" />
        </div>
        <div class="prod-inputs">
            <label for="precio" v-custom-font.green>Precio</label>
            <input type="number" name="precio" id="precio" v-model="producto.precio" />
        </div>
        <div class="prod-inputs">
            <label for="cantidad">Cantidad</label>
            <input type="number" name="cantidad" id="cantidad" v-model="producto.cantidad" />
        </div>
        <button @click="addProducto()">Añadir</button>
    </div>

    <div>
        <h3 v-custom-font.lg.blue>Listado de productos</h3>
        <table>
            <thead>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
            </thead>
            <tbody>
                <tr v-for="(prod, index) in carrito" :key="index">
                    <td>{{ prod.nombreproducto }}</td>
                    <td>{{ prod.precio }}</td>
                    <td>{{ prod.cantidad }}</td>
                    <td>{{ prod.totalProducto }}</td>
                </tr>
            </tbody>
            <tfoot>
                <td colspan="3">SubTotal</td>
                <th>{{ sumaTotal }}€</th>
            </tfoot>
        </table>
    </div>

    <div>
        <!-- <div>
            <label for="number">Subtotal</label>
            <input type="number" v-model="subtotal" />
        </div> -->
        <!-- <div>
            <label for="iva">Iva</label>
            <input type="number" name="iva" id="iva" v-model="vat" />
        </div> -->
        <h3>Total impuestos a pagar: {{ totalVat }}({{ vat }}%)</h3>
        <h3>Total a pagar: {{ total }}</h3>
    </div>
</template>

<script lang="ts" setup>
import { Ref, computed, ref } from 'vue';

interface IProducto {
    nombreproducto: string;
    precio: number;
    cantidad: number;
    totalProducto?: number;

}

let producto: Ref<IProducto> = ref({
    nombreproducto: '',
    precio: 0,
    cantidad: 0
})

const carrito: Ref<Array<IProducto>> = ref([])
let sumaTotal = ref(0)

const addProducto = (): void => {
    carrito.value.push({
        nombreproducto: producto.value.nombreproducto,
        precio: producto.value.precio,
        cantidad: producto.value.cantidad,
        totalProducto: totalProducto.value
    })
    sumaTotal.value += totalProducto.value
}

const totalProducto = computed(() => producto.value.precio * producto.value.cantidad)


let vat = 21
const totalVat = computed(() => {
    return parseFloat(((sumaTotal.value * vat) / 100).toFixed(2))
})

const total = computed(() => {
    return (totalVat.value + sumaTotal.value)
})

</script>

<style scoped>
.container-prod {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.prod-inputs {
    display: flex;
    justify-content: space-between;
}
</style>