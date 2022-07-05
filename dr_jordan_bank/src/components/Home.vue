<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export default {
name: 'Users',
data() {
  return {
    users: [],
    email: '',
    password: '',
  };
},
methods: {
  register() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password).
      then(() => {
        alert('Successfully registered! Please login.')
      })
      .catch(error => {
        alert(error.message);
      });
  },
  login() {
  firebase
    .auth()
    .signInWithEmailAndPassword(this.email, this.password)
    .then(() => {
      alert('Successfully logged in');
    })
    .catch(error => {
      alert(error.message);
    });
},
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Successfully logged out')
      })
      .catch(error => {
        alert(error.message);
      })
},
},
}
</script>
<script setup>
import {onMounted, ref, reactive} from 'vue'
const login = ref(true)
const registration = ref(false)

const registrationToggle = () => {
    registration.value = true
    login.value = false
}

const loginToggle = () => {
    registration.value = false
    login.value = true
}
</script>

<template>
    <h1>Welcome to Dr. Jordan Bank & Associates</h1>
    <h3>For all of your medical needs, so long as your medical needs are one of these five things.</h3>
    <div v-if='login'>
      <form @submit.prevent="login">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email address..."
          v-model="email"
        /><br/>
        <input
          type="password"
          placeholder="password..."
          v-model="password"
        /><br/>
        <button type="submit">
           Login
        </button><br/>
      </form>
      <button @click = 'registrationToggle'>Don't have an account? Register here.</button>
    </div>
    <div v-if='registration'>
      <form @submit.prevent="register">
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email address..."
          v-model="email"
        /><br/>
        <input
          type="password"
          placeholder="password..."
          v-model="password"
        /><br/>
        <button type="submit">Register</button>
      </form>
      <button @click = 'loginToggle'>Already have an account? Login here.</button>
    </div>
</template>

<style scoped>
    h1 {
        text-align: center;
    }

    h3 {
        text-align: center;
    }
</style>
