<template>
<div class="mx-5 my-2">
  <!-- data section -->
  <div class="relative section-form bg-gray-200 py-1 px-2 rounded-3xl my-12 shadow-2xl">
    <!-- input area -->
    <div class="flex data-form sm:px-2 my-5 text-center justify-center">
      <div class="text-md sm:px-8 px-1" v-for="pump in dataList" :key="pump">
        <input 
          class="sm:w-28 w-24 rounded-md text-center" type="number" min="0" step="1" @onkeypress="isNumberKey(this, event);" 
          v-model="$data[pump.data]"
        >
          <h1 class="text-sm">{{pump.heading}}</h1>
      </div>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      <div class="fitting-form text-center" v-for="(period,index) in periods" :key="period">
        <div>
          <input class="w-28 rounded-md text-center" type="number" min="0" @onkeypress="isNumberKey(this, event);" v-model="period.cashFlow">
          <button class="bg-bondi-blue-400 text-gray-200 mx-2 p-1 w-20 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" @click="deletePeriod(index)">Remove</button>
          <h1 class="mb-2">Period {{index + 1 }}</h1>
        </div>
      </div>
    </div>
    <!-- END input area -->
    <!-- buttons -->
    <div class="text-center">
      <button class="bg-bondi-blue-400 text-gray-200 mx-2 p-1 w-20 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" @click="addPeriod()">Add</button>
      <button class="bg-bondi-blue-400 text-gray-200 mx-2 p-1 w-20 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" @click="clearEntry()">Clear</button>
    </div>
    <div class="text-center my-5">
      <button class="bg-bondi-blue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" type="submit" @click="calculate" @submit.prevent="calculate">Calculate</button>
    </div>
    <!-- END buttons -->
  </div>
  <!-- END data section -->
  <!-- chart -->
  <div class="relative bg-gray-200 shadow-2xl py-1 my-12 rounded-3xl" v-if="showChart">
    <h1 class="sm:text-3xl my-5 text-center">NPV and IRR Chart</h1>
    <table class="mx-auto my-5 md:text-lg text-xs chart-font">
      <tr class="">
        <th class="sm:px-2">Period (t)</th>
        <th class="sm:px-2">Net cash flow (R)</th>
        <th class="sm:px-2">R/(1+i)<sup>t</sup></th>
        <th class="sm:px-2">P+ <span>&Sigma;</span>R/(1+i)<sup>t</sup></th>
        <th class="sm:px-2">IRR<sub>t</sub> (%)</th>
      </tr>
      <tr class="text-center" v-for="(value,index) in valueList" :key="value">
        <td>{{index}}</td>
        <td>${{valueList[index]}}</td>
        <td>${{valueInterestList[index].toFixed(2)}}</td>
        <td>${{currentList[index].toFixed(2)}}</td>
        <td>{{IRRList[index]}}</td>
      </tr>
    </table>
    <div class="text-center">
      <h1> <span class="font-bold">NPV at end of period:</span> ${{currentList[currentList.length-1].toFixed(2)}}</h1>
      <h1> <span class="font-bold">IRR at end of period:</span> {{IRRList[IRRList.length-1]}}%</h1>
    </div>
    <button class="absolute right-0 top-0 text-3xl px-3 text-gray-400 transition-all duration-250 hover:text-bondi-blue-500 transform hover:scale-110" @click="deleteTable()"><i class="fas fa-times"></i></button>
  </div>
  <!-- END chart -->
</div>
</template>

<script>
export default {
  data(){
    return {
      showChart: false,
      initialCost: -1000,
      discountRate: 0.05,
      valueList: [],
      valueInterestList: [],
      currentList: [],
      IRRList: ['NA'],
      periods: [
        {cashFlow:500},
        {cashFlow:400},
        {cashFlow:600},
        {cashFlow:200},
      ],
      tableInfo:[],
      dataList:[
        {data:'initialCost', heading: 'Initial Cost'}, 
        {data:'discountRate', heading: 'Discount Rate'}, 
      ],
    }
  },
  methods:{
    // check to see if valid input
    isNumberKey(txt, evt) {
      let charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode == 46) {
        if (txt.value.indexOf('.') === -1) {
          return true;
        } else {
          return false;
        }
      } else {
        if (charCode > 31 &&
          (charCode < 48 || charCode > 57))
          return false;
      }
      return true;
    }, 
    // clear entry
    clearEntry(){
      this.showChart = false,
      this.initialCost= 0,
      this.discountRate= 0,
      this.periods= [
        {cashFlow:0},
        {cashFlow:0},
        {cashFlow:0},
        {cashFlow:0},
      ]
    },
    // add period
    addPeriod(){
      this.periods.push({
        cashFlow:0     
      })
    },
    // delete period
    deletePeriod(index){
      this.periods.splice(index,1)
    },
    // close table
    deleteTable(){
      this.showChart=false
    },
    // calculate NPV equation
    equationValue(guess,P,RList){
      let value = P
      for(let index=0; index<RList.length; index++){
        value = value + Number(RList[index].cashFlow)/(1+guess)**(index+1)
      }
      return value
    },
    // calculate derivative for NPV
    derivativeValue(guess,RList){
      let value = 0
      for(let index=0; index<RList.length; index++){
        value = value + (-(index+1)*Number(RList[index].cashFlow)*(1+guess)**(-(index+1)-1))
      }
      return value
    },
    // Newton method
    actualValue(guess, eqnValue, devValue){
      return guess-eqnValue/devValue
    },
    // calculate Internal Rate of Return
    calculateIRR(P, RList){
      let guess = -0.99
      let i = 0
      if(RList[RList.length-1].cashFlow < 0){
        return "NA"
      }
      if (RList.length === 1){
        console.log('finished')
        return (Number(RList[0].cashFlow)+P)/(-P)
      } else {
        while (i++<=200){
          if (i===200){
            return false
          }
          let eqnValue = this.equationValue(guess,P,RList)
          let devValue = this.derivativeValue(guess,RList)
          let actValue = this.actualValue(guess, eqnValue, devValue)
          guess = actValue
          if (Math.abs(eqnValue)<0.01){
            return guess
          }
        }
      }
      
    },
    // create chart
    calculate(){
      this.valueList= []
      this.valueInterestList= []
      this.currentList= []
      this.IRRList= ['NA']
      this.showChart = true
      let interest = Number(this.discountRate)
      let P = Number(this.initialCost)
      let RList = this.periods
      let currentValue = P
      this.valueList.push(P)
      this.valueInterestList.push(P)
      this.currentList.push(P)
      for (let index = 0; index<RList.length; index++){
        this.valueList.push(RList[index].cashFlow)
      }
      for (let index = 0; index<RList.length; index++){
        this.valueInterestList.push(Number(RList[index].cashFlow)/(1+interest)**(index+1))
      }
      for (let index = 0; index<RList.length; index++){
        currentValue = currentValue + Number(RList[index].cashFlow)/(1+interest)**(index+1)
        this.currentList.push(currentValue)
      }
      for (let index = 0; index<RList.length; index++){
        let myList = RList.slice(0,index+1)
        let IRRValue = this.calculateIRR(P, myList)
        if (isNaN(IRRValue)){
          this.IRRList.push(IRRValue)
        }else{
          this.IRRList.push((IRRValue*100).toFixed(2))
        }
      }
    }
  }
}
</script>

<style>

</style>