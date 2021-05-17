<template>
<!-- instructions -->
<div class="pb-5 px-12">
  <h1 class="text-center text-4xl font-bold py-5">Instructions</h1>
  <ul class="text-xl list-disc px-8 instruction-width mx-auto">
    <li>Enter the operating conditions of the mechanical system</li>
    <li>Select the fluid by inputting the fluid density and viscosity at the operating temperature.</li>
    <li>Enter added pressure that the system may experience</li>
    <li>Select the pipe material by inputting the roughness</li>
    <li>Add or remove fitting quantity and type</li>
    <li>Add or remove sections of duct</li>
    <li>Press the calculate to generate the pump system curve.</li> 
    <li>Add or remove new branches of duct</li>
  </ul>
</div>
<!-- END instructions -->
<!-- material table -->
<div class="md:mx-40 mx-10">
  <h1 class="text-center text-3xl font-bold py-5">Determine Pipe Material</h1>
  <p class=" text-xl">
    The material of the pipe is selected by entering a roughness coefficient. Some common material for piping are steel, copper, and plastics. The roughness coefficient for different materials are listed in the table below.
  </p>
  <div class="text-center py-5">
    <button 
      class="text-sm bg-cusblue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
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
<!-- END material table -->
<!-- fitting table -->
<div class="md:mx-40 mx-10">
  <h1 class="text-center text-3xl font-bold py-5">Determine Pipe Fitting</h1>
  <p class=" text-xl">
    The different fittings in the duct system has an effect on the pressure in each section of duct. A list of the common fittings along with the L<sub>e</sub>/D ratio is displayed in the table below.
  </p>
  <div class="text-center py-5">
    <button 
      class="text-sm bg-cusblue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
      style="border-radius: 75px;" 
      @click="revealFittingTable"
    >
      Toggle Table
    </button>
  </div>
  <div class="py-5" v-if="showFittingTable">
    <table class="mx-auto ">
      <tr>
        <th class="px-5 text-left">Fittings</th>
        <th class="px-5">L<sub>e</sub>/D Ratio</th>
      </tr>
      <tr v-for="row in fittings" :key="row">
        <td class="px-5">{{row.name}}</td>
        <td class="px-5 text-center">{{row.value}}</td>
      </tr>
    </table>
  </div>
</div>
<!-- END fitting table -->
</template>

<script>
export default {
  data(){
    return {
      showSurfaceTable: false,
      showFittingTable: false,
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
      fittings:[
        {name: "Pleated 90", value:"15"},
        {name: "Pleated 45", value:"15"},
        {name: "Mitered 90", value:"60"},
        {name: "Mitered Vanes", value:"10"},
        {name: "Converging 20", value:"20"},
        {name: "Diverging 120", value:"40"},
        {name: "Abrupt 90", value:"30"},
        {name: "Bellmouth", value:"12"},
        {name: "Wye branch", value:"20"},
        {name: "Wye through", value:"8"},
        {name: "Tee branch", value:"40"},
        {name: "Tee through", value:"8"},
      ],
    }
  },
  methods:{
    revealSurfaceTable(){
      this.showSurfaceTable = !this.showSurfaceTable
    },
    revealFittingTable(){
      this.showFittingTable = !this.showFittingTable
    },
  }
}
</script>

<style>

</style>