<script setup>
    import {ref, reactive} from 'vue'
    import Home from './components/Home.vue'
    import About from './components/About.vue'
    import Appointments from './components/Appointments.vue'

const home = ref(true)
const about = ref(false)
const apps = ref(false)

const homeToggle = () => {
    home.value = true
    about.value = false
    apps.value = false
}

const aboutToggle = () => {
    home.value = false
    about.value = true
    apps.value = false
}

const appToggle = () => {
    home.value = false
    about.value = false
    apps.value = true
}

</script>

<template>
    <nav>
        <ul>
        <li @click='homeToggle'>Home</li>
        <li @click='aboutToggle'>About</li>
        <li @click='appToggle'>Appointments</li>
        <li>Insurance</li>
        <li>Patient Portal</li>
        </ul>
    </nav>
    <div v-if='home'><Home/></div>
    <div v-if='about'><About/></div>
    <div v-if='apps'><Appointments/></div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
* {
    background-color: lightgreen;
    color: darkgreen;
    text-align: center;
    font-family: 'Raleway'
}

ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
}

li:hover {
        color: red;
}
</style>
