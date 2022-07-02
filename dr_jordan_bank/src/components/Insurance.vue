<script>
import {onMounted, ref, reactive} from 'vue'
import axios from "axios"

export default {
  name: "Insurance",
  data() {
    return {
      insurance: [],
      insured: {},
      company: '',
      accountHolder: '',
      policyNumber:'',
      idNumber:'',
    }
  },
  mounted() {
      axios.get('https://drjordanbankinfo.herokuapp.com/api/insurance').then(response => (this.insurance = response.data))
  },
  methods: {
      async addInsurance() {
      try {
        const newIns = await axios.post(
          'https://drjordanbankinfo.herokuapp.com/api/insurance',
          {
            company: this.company,
            accountHolder : this.accountHolder,
            policyNumber: this.policyNumber,
            idNumber: this.idNumber,
          }
      ).then(axios.get('https://drjordanbankinfo.herokuapp.com/api/insurance').then(response => (this.insurance = response.data)))
    } catch(err) {
        console.log(err);
      }
    },
async deleteInsurance(id) {
    try {
        await axios.delete('https://drjordanbankinfo.herokuapp.com/api/insurance/' + id)
    } catch(err){
        console.log(err)
    }
},
async updateInsurance(id) {
    try {
    const insurance = await axios.put('https://drjordanbankinfo.herokuapp.com/api/insurance/' + id, {
        company: this.insurance.company,
        accountHolder : this.insurance.accountHolder,
        policyNumber: this.insurance.policyNumber,
        idNumber: this.insurance.idNumber,
        id: this.insurance.id
    })
} catch(error) {
    console.log(error)
}
},
async editInsurance(insurance) {
    this.insurance.company = insurance.company
    this.insurance.accountHolder = insurance.accountHolder,
    this.insurance.policyNumber = insurance.policyNumber,
    this.insurance.idNumber = insurance.idNumber
}
},
}


</script>

<template>
<div class = 'container'>
<div class = 'insurance-card' v-for='insurance in insurance'>
<h3>{{insurance.company}}</h3>
<p>{{insurance.accountHolder}}</p>
<h4>Policy: {{insurance.policyNumber}}</h4>
<h4>ID: {{insurance.idNumber}}</h4>
    <label for='company'>Company: </label>
    <select id='company' v-model='insurance.company'>
        <option>Jordancare</option>
        <option>Sauron Health</option>
        <option>Delay The Inevitable</option>
        <option>Florida Guns And Medicine</option>
        <option>Sithcare</option>
        <option>Waffle House</option>
        <option>For Rich People Only</option>
    </select><br/>
    Account Holder: <input type = 'text' v-model='insurance.accountHolder'><br/>
    Policy Number: <input type = 'number' v-model='insurance.policyNumber'><br/>
    ID Number: <input type='number' v-model='insurance.idNumber'><br/>
    <button @click='editInsurance(insurance)'>Update</button>
    <button @click='updateInsurance(insurance.id)'>Save</button><br/>
<button @click='deleteInsurance(insurance.id)'>Remove</button>
</div>
</div>
<form v-on:submit.prevent='preventDefault'>
    <label for='company'>Company: </label>
    <select id='company' v-model='company'>
        <option>Jordancare</option>
        <option>Sauron Health</option>
        <option>Delay The Inevitable</option>
        <option>Florida Guns And Medicine</option>
        <option>Sithcare</option>
        <option>Waffle House</option>
        <option>For Rich People Only</option>
    </select><br/>
    Account Holder: <input type = 'text' v-model='accountHolder'><br/>
    Policy Number: <input type = 'number' v-model='policyNumber'><br/>
    ID Number: <input type='number' v-model='idNumber'><br/>
    <input type='submit' value='Add Insurance' @click='addInsurance'>
</form>
</template>

<style scoped>
.container {
    display: inline-flex;
    flex-wrap: wrap;
}

.insurance-card {
    display: block;
    margin: 25px;
    background-color: white;
    padding: 20px;
    min-width: 150px;
    max-width: 250px;
    border-radius: 20px;
    filter: drop-shadow(0px 5px 5px darkgreen)
}
</style>
