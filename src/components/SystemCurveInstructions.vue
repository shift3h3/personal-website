<template>
<!-- instructions -->
  <div class="pb-5 px-12">
    <h1 class="text-center text-4xl font-bold py-5">Instructions</h1>
    <ul class="text-xl list-disc px-8 instruction-width mx-auto">
      <li>Enter the operating conditions of the pump</li>
      <li>Select the fluid by inputting the fluid density and viscosity at the operating temperature.</li>
      <li>Select the pipe material by inputting the roughness</li>
      <li>Enter the acceptable safety factor</li> 
      <li>Press the calculate to generate the pump system curve.</li> 
    </ul>
  </div>
  <!-- END instructions -->
  <!-- K chart -->
  <div class="md:mx-40 mx-10">
    <h1 class="text-center text-2xl font-bold py-5">Determine the loss coefficient K</h1>
    <p class=" text-xl">
      The loss coefficient (K) is a dimensionless number used to calculate the minor head loss within the system. Different fittings will cause a change in cross sectional area of the pipe; hence, affecting the head. The loss coefficient is used to determine the minor head loss. Some loss coefficient are show in the table below.
    </p>
    <div class="text-center py-5">
      <button 
        class="bg-cusblue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
        style="border-radius: 75px;" 
        @click="revealKTable"
      >
        Toggle Table
      </button>
    </div>
    <div class="py-5" v-if="showKTable">
      <table class="mx-auto ">
        <tr>
          <th class="px-5 text-left">Fittings</th>
          <th class="px-5">Minor Loss Coefficient K</th>
        </tr>
        <tr v-for="row in lossCoefficient" :key="row">
          <td class="px-5">{{row.name}}</td>
          <td class="px-5 text-center">{{row.value}}</td>
        </tr>
      </table>
    </div>
  </div>
  <!-- END K chart -->
  <!-- material chart -->
  <div class="md:mx-40 mx-10">
    <h1 class="text-center text-2xl font-bold py-5">Determine Pipe Material</h1>
    <p class=" text-xl">
      The material of the pipe is selected by entering a roughness coefficient. Some common material for piping are steel, copper, and plastics. The roughness coefficient for different materials are listed in the table below.
    </p>
    <div class="text-center py-5">
      <button 
        class="bg-cusblue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
        style="border-radius: 75px;" 
        @click="revealSurfaceTable"
      >
        Toggle Table
      </button>
    </div>
    <div class="py-5" v-if="showSurfaceTable">
      <table class="mx-auto ">
        <tr>
          <th class="px-5 text-left">Surface</th>
          <th class="px-5">Roughness Coefficient</th>
        </tr>
        <tr v-for="row in surfaceCoefficient" :key="row">
          <td class="px-5">{{row.name}}</td>
          <td class="px-5 text-center">{{row.value}}</td>
        </tr>
      </table>
    </div>
  </div>
  <!-- END material chart -->
</template>

<script>
export default {
  data(){
    return {
      showKTable: false,
      showSurfaceTable: false,
      lossCoefficient:[
        {name: "Tee Flanged,Line", value:"0.2"},
        {name: "Tee Threated, Line", value:"0.9"},
        {name: "Tee Flanged, Branch", value:"1.0"},
        {name: "Tee Threaded, Branch", value:"2.0"},
        {name: "Elbow Flanged 90", value:"0.3"},
        {name: "Elbow Threaded 90", value:"1.5"},
        {name: "Elbow Flanged 45", value:"0.2"},
        {name: "Elbow Threaded 45", value:"0.4"},
        {name: "Globe Valve, Open", value:"10"},
        {name: "Globe Valve, 1/2 Closed", value:"2.1"},
        {name: "Ball Valve, Open", value:"0.05"},
        {name: "Ball Valve, 1/3 Closed", value:"5.5"},
        {name: "Diaphragm Valve, Open", value:"2.3"},
        {name: "Diaphragm, 1/2 Closed", value:"4.3"},
      ],
      surfaceCoefficient:[
        {name: "Copper, Lead, Brass, Aluminum", value:"0.00000328 - 0.00000656"},
        {name: "PVC, smooth plastics", value:"0.0000049 - 0.000023"},
        {name: "Stainless steel", value:"0.00000131 - 0.00000197"},
        {name: "Galvanized steel", value:"0.000492"},
        {name: "Stretched steel", value:"0.0000495"},
        {name: "Weld Steel", value:"0.000148"},
        {name: "Smoothed cement", value:"0.00098"},
        {name: "Ordinary concrete", value:"0.00098 - 0.00328"},
        {name: "Wood", value:"0.0164"},
      ],
    }
  },

  methods:{
    revealKTable(){
      this.showKTable = !this.showKTable
    },
    revealSurfaceTable(){
      this.showSurfaceTable = !this.showSurfaceTable
    },
  },
}
</script>

<style>

</style>