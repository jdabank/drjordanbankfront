<script>
import {onMounted, ref, reactive} from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
name: 'Users',
data() {
  return {
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

<template>
<details>
<summary>Login</summary>
<div>
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
    </button>
  </form>
</div>
</details>
<details>
<summary>Register</summary>
<div>
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
</div>
</details>
<button @click='logout'>Logout</button>
</template>

<style scoped>
</style>
