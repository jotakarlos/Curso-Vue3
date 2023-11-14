<template>
    <div>
        <h1>Listado de Usuarios</h1>
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Nombre Compañia</th>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.company?.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import UserService from '@/services/UserService';
import { onMounted } from 'vue';

const service = new UserService();
const users = service.getUsers();


onMounted(async () => {
    await service.fetchAll();
});
</script>

<style scoped></style>