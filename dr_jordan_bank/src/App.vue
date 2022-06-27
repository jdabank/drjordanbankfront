<script setup>
    import {ref, reactive} from 'vue'
    import Appointments from './components/Appointments.vue'

const apps = ref(true)

const appToggle = () => {
    apps.value = !apps.value
}

</script>

<template>
    <nav>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li @click='appToggle'>Appointments</li>
        <li>Insurance</li>
        <li>Patient Portal</li>
        </ul>
    </nav>
    <div v-if='apps'><Appointments/></div>
</template>

<style>
ul {
display: flex;
justify-content: space-around;
list-style: none;
}

li:hover {
    color: red;
}
</style>
