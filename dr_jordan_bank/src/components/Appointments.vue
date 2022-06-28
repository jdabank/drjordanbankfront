<script>
import {onMounted, ref} from 'vue'

import axios from "axios"
export default {
  name: "Appointments",
  data() {
    return {
      appointments: []
    }
  },
  methods: {
async getAppointments() {
      try {
        const appointments = await axios.get(
          "https://drjordanbankinfo.herokuapp.com/api/appointments"
        )
        this.appointments = appointments.data
    } catch (err) {
        console.log(err)
      }
    },
    async makeAppointment() {
      try {
        const app = await axios.post(
          "https://drjordanbankinfo.herokuapp.com/api/appointments",
          {
            physician: this.physician,
            name : this.name,
            age: this.age,
            reason: this.reason,
            details: this.details
          }
        )
    } catch(error) {
        console.log(error);
      }
    },
  },
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
<button @click='getAppointments'>Get</button>
<form v-on:submit='makeAppointment'>
    <label for='physicians'>Doctor: </label>
    <select id='physicians' v-model='physician'>
        <option>Jordan Bank</option>
        <option>Meiling Li</option>
        <option>Tyger Salters</option>
        <option>Ofori Manson</option>
        <option>Kevin Ha</option>
        <option>Jean Eng</option>
        <option>Rafay Hassan</option>
    </select><br/>
    Your Name: <input type = 'text' v-model='name'><br/>
    Your Age: <input type = 'number' v-model='age'><br/>
    <label for='reason'>Reason for Visit: </label>
    <select id='reason' v-model='reason'>
        <option>Plastic Surgery</option>
        <option>Necromancy</option>
        <option>Allergies</option>
        <option>Jerusalem Syndrome</option>
        <option>Ate Too Much</option>
    </select><br/>
    Details: <input type='text' v-model='details'><br/>
    <input type='submit' value='Make Appointment' @click='makeAppointment'>
</form>
</template>

<style scoped>
.container {
    display: flex;
}

.appointmentCard {
    display: block;
    margin: 40px;
}
</style>
