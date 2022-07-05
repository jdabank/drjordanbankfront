<script setup>
    import {ref, reactive} from 'vue'
    import Home from './components/Home.vue'
    import About from './components/About.vue'
    import Appointments from './components/Appointments.vue'
    import Insurance from './components/Insurance.vue'
    import PP from './components/PP.vue'

const home = ref(true)
const about = ref(false)
const apps = ref(false)
const ins = ref(false)
const pp = ref(false)

const homeToggle = () => {
    home.value = true
    about.value = false
    apps.value = false
    ins.value = false
    pp.value = false
}

const aboutToggle = () => {
    home.value = false
    about.value = true
    apps.value = false
    ins.value = false
    pp.value = false
}

const appToggle = () => {
    home.value = false
    about.value = false
    apps.value = true
    ins.value = false
    pp.value = false
}

const insuranceToggle = () => {
    home.value = false
    about.value = false
    apps.value = false
    ins.value = true
    pp.value = false
}

const ppToggle = () => {
    home.value = false
    about.value = false
    apps.value = false
    ins.value = false
    pp.value= true
}

</script>

<template>
    <nav>
        <ul>
        <li @click='homeToggle'>Home</li>
        <li @click='aboutToggle'>About</li>
        <li @click='appToggle'>Appointments</li>
        <li @click='insuranceToggle'>Insurance</li>
        <li @click='ppToggle'>Patient Portal</li>
        </ul>
    </nav>
    <div v-if='home'><Home/></div>
    <div v-if='about'><About/></div>
    <div v-if='apps'><Appointments/></div>
    <div v-if='ins'><Insurance/></div>
    <div v-if='pp'><PP/></div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
* {
    background-color: white;
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
