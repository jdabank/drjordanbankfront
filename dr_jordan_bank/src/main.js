import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import App from './App.vue'

const firebaseConfig = {
apiKey: "AIzaSyB09MDhDYX4tKPpJ9v1p6VdS4rvPdmUo9w",
authDomain: "dr-jordan-bank.firebaseapp.com",
projectId: "dr-jordan-bank",
storageBucket: "dr-jordan-bank.appspot.com",
messagingSenderId: "31309210004",
appId: "1:31309210004:web:ac0f4482308485c2efef81"
}

const app = initializeApp(firebaseConfig)

createApp(App).mount('#app')
