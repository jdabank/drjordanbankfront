<script>
import {onMounted, ref, reactive} from 'vue'
import axios from "axios"

export default {
  name: "Appointments",
  data() {
    return {
      appointments: [],
      appointment: {},
      physician: '',
      name : '',
      age: '',
      reason: '',
      details: '',
      id: ''
    }
  },
  mounted() {
      axios.get('https://drjordanbankinfo.herokuapp.com/api/appointments').then(response => (this.appointments = response.data))
  },
  methods: {
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
      ).then(axios.get('https://drjordanbankinfo.herokuapp.com/api/appointments').then(response => (this.appointments = response.data)))
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
},
async updateAppointment(id) {
    try {
    const appointment = await axios.put('https://drjordanbankinfo.herokuapp.com/api/appointments/' + id, {
        physician: this.appointment.physician,
        name: this.appointment.name,
        age: this.appointment.age,
        reason: this.appointment.reason,
        details: this.appointment.details,
        id: this.appointment.id
    })
} catch(error) {
    console.log(error)
}
},
async editAppointment (appointment) {
    this.appointment.physician = appointment.physician
    this.appointment.name = appointment.name
    this.appointment.age = appointment.age
    this.appointment.reason = appointment.reason
    this.appointment.details = appointment.details
    this.appointment.id = appointment.id
}
},
}

</script>

<template>
<div class = 'container'>
<div class = 'appointmentCard' v-for='appointment in appointments'>
<h2 class='phy'>{{appointment.physician}}</h2>
<p class='phy'>{{appointment.reason}}</p>
<details class='phy'>
<summary class='phy'>Details</summary>
<p class='phy'>{{appointment.details}}</p>
</details>
<div class="phy">
<details class='phy'>
<summary class='phy'>Edit Appointment</summary>
  <h3 class='phy'>Change Appointment</h3>
  <select v-model='appointment.physician'>
      <option>Jordan Bank</option>
      <option>Meiling Li</option>
      <option>Tyger Salters</option>
      <option>Ofori Manson</option>
      <option>Kevin Ha</option>
      <option>Jean Eng</option>
      <option>Rafay Hassan</option>
  </select><br/>
  <input type = 'text' v-model='appointment.name'><br/>
  <input type = 'number' v-model='appointment.age'><br/>
  <select v-model='appointment.reason'>
      <option>Plastic Surgery</option>
      <option>Necromancy</option>
      <option>Allergies</option>
      <option>Jerusalem Syndrome</option>
      <option>Ate too much</option>
  </select><br/>
  <input type='text' v-model='appointment.details'><br/>
  <button @click='editAppointment(appointment)'>Update</button>
  <button @click='updateAppointment(appointment.id)'>Save</button>
</details>
</div>
<button @click='cancelAppointment(appointment.id)'>Cancel Appointment</button>
</div>
</div>
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
        <option>Ate too much</option>
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
    max-width: 250px;
    border-radius: 20px;
    filter: drop-shadow(0px 5px 5px darkgreen)
}

.phy {
    background-color: white;
}

form {
    background-color: white;
}
</style>
