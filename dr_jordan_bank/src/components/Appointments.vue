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
{{appointments.map((appointment) => {
    return (
        <>
        shit
        </>
    )
})}}
<h3>Previous</h3>
{{appointments}}
</template>

<style scoped>
* {
    text-align: center;
}
</style>
