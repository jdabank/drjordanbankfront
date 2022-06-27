<script>
import {onMounted, ref} from 'vue'
import axios from 'axios'


export default {

  setup() {
   const appointments=ref([])
   onMounted(async () => {
     await axios
         .get('https://drjordanbankinfo.herokuapp.com/api/appointments')
         .then(response => {
           appointments.value = response.data

         })
   })
    return {
     appointments
    }
  }
}


</script>

<template>
<h1>Appointments</h1>
<h3>Upcoming</h3>
<div class = 'container'>
<div class = 'appointmentCard' v-for='appointment in appointments'>
<p>{{appointment.physician}}</p>
<p>{{appointment.reason}}</p>
</div>
</div>
<h3>Previous</h3>
</template>

<style scoped>
* {
    text-align: center;
}

.container {
    display: flex;
}

.appointmentCard {
    display: block;
    margin: 40px;
}
</style>
