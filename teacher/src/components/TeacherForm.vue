<template>
    <section>
        <h3>Añadir Profesor</h3>
        <div><label for="nombre">Nombre:</label><input type="text" v-model="teacher.teacherName"></div>
        <div><label for="apellidos">Apellidos:</label><input type="text" v-model="teacher.lastName"></div>
        <div><label for="dni">DNI/NIF:</label><input type="text" v-model="teacher.dni"></div>
        <div><label for="materias">Materias:</label><input type="text" v-model="subject">
            <button @click="handleSubject()">Agregar</button>
        </div>
        <div>
            <ul>
                <li v-for=" (elemento, index) in teacher.subjects" v-bind:key="index">{{ elemento }} <button
                        @click="removeSubject(index)">Eliminar</button></li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc">Documentacion entregada
        <div><button @click="handleAddTeacher()">Agregar</button></div>
    </section>

    <section>
        <h3>Listado de Profesores</h3>
        <table>
            <thead>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>DNI/NIF</th>
                <th>Materias</th>
                <th>Documentacion Entregada</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="(profesor, index) in teachers" :key="profesor.dni">
                    <th>{{ profesor.teacherName }} </th>
                    <th>{{ profesor.lastName }}</th>
                    <th>{{ profesor.dni }}</th>
                    <th>
                        <ul>
                            <li v-for="(materia, index) in profesor.subjects" v-bind:key="index">{{ materia }}</li>
                        </ul>
                    </th>
                    <th v-if="profesor.doc">Entregada</th>
                    <th v-else>No entregada</th>
                    <th><button @click="deleteTeacher(index)">❌</button></th>
                </tr>
            </tbody>
        </table>
        <!-- <ul>
            <li v-for="(profesor, index) in teachers" :key="index">{{ profesor }}</li>
        </ul> -->
    </section>
</template>

// Uso con TypeScript
<script lang="ts" setup>
import { Ref, ref } from 'vue';

interface ITeacher {
    teacherName: string,
    lastName: string,
    dni: string,
    subjects: Array<string>,
    doc: boolean
}


let teacher: Ref<ITeacher> = ref({
    teacherName: '',
    lastName: '',
    dni: '',
    subjects: [],
    doc: false
})

let teachers: Ref<Array<ITeacher>> = ref([])

let subject: Ref<string> = ref('')

const handleSubject = (): void => {
    teacher.value.subjects.push(subject.value)
    subject.value = ""
}

const handleAddTeacher = (): void => {
    teachers.value.push({
        teacherName: teacher.value.teacherName,
        lastName: teacher.value.lastName,
        dni: teacher.value.dni,
        subjects: teacher.value.subjects,
        doc: teacher.value.doc
    })
    teacher.value.teacherName = ""
    teacher.value.lastName = ""
    teacher.value.dni = ""
    teacher.value.subjects = []
    teacher.value.doc = false
}

const removeSubject = (index: number): void => {
    teacher.value.subjects.splice(index, 1)
}

const deleteTeacher = (index: number): void => {
    teachers.value.splice(index, 1)
}

</script>


// Uso con JavaScript
<!-- <script lang="ts" setup>
import { Ref, ref } from 'vue';


let teacher = ref({
    teacherName: '',
    lastName: '',
    dni: '',
    subjects: [],
    doc: false
})

let teachers=ref([])
let subject = ref('')

</script> -->

<style scoped></style>