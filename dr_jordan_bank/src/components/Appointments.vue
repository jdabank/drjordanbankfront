<script>
import {onMounted, ref, reactive} from 'vue'
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
          'https://drjordanbankinfo.herokuapp.com/api/appointments'
        )
        this.appointments = appointments.data
    } catch (err) {
        console.log(err)
      }
    },
async makeAppointment() {
      try {
        const newApp = await axios.post(
          'https://drjordanbankinfo.herokuapp.com/api/appointments',
          {
            physician: this.physician,
            name : this.name,
            age: this.age,
            reason: this.reason,
            details: this.details
          }
      )
    } catch(err) {
        console.log(err);
      }
    },
async cancelAppointment(id) {
    try {
        await axios.delete('https://drjordanbankinfo.herokuapp.com/api/appointments/' + id)
    } catch(err){
        console.log(err)
    }
}
},
}

</script>

<template>
<h1>Appointments</h1>
<h3>Upcoming</h3>
<div class = 'container'>
<div class = 'appointmentCard' v-for='appointment in appointments'>
<h2 class='phy'>{{appointment.physician}}</h2>
<p class='phy'>{{appointment.reason}}</p>
<button @click='cancelAppointment(appointment.id)'>Cancel Appointment</button>
</div>
</div>
<h3>Previous</h3>
<button @click='getAppointments'>Get</button><br/>
<button @click='newToggle'>Make an Appointment</button>
<form v-on:submit.prevent='preventDefault'>
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
    display: inline-flex;
    flex-wrap: wrap;
}

.appointmentCard {
    display: block;
    margin: 25px;
    background-color: white;
    padding: 20px;
    min-width: 150px;
    border-radius: 20px;
    filter: drop-shadow(0px 5px 5px darkgreen)
}

.phy {
    background-color: white;
}
</style>
