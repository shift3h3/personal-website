<template>
<!-- theory -->
<div class="pb-5 md:mx-40 mx-10">
  <h1 class="text-center text-4xl font-bold py-5">Theory</h1>
  <div class="text-xl py-3">
    <p>The pump system curve is a plot of pump head versus flow rate. The pump system curve is used in conjunction with the pump curves to determine the suitability of a pump for the particular operation. The equation used to calculate the pump system curve is the conservation of energy formula.</p>
    <p class="text-xl py-3 text-center">The formula to pump head is shown below:</p>
    <div class="sm:text-xl text-sm">\[\frac{P_{1}}{\rho g}+\frac{v_{1}}{2 g}+z_{1}+h_{p}=\frac{P_{2}}{\rho g}+\frac{v_{2}}{2 g}+z_{2}+h_{L}+\sum h_{m}\]</div>
  </div>
  <div class="text-xl py-3">
    <p>The minor head loss is the loss of pressure in the pipe due to the fittings. To determine the actual pressure in a length of pipe, the minor head loss need to be accommodated. The loss coefficient is unique for the type of fitting and it is used to determine the minor head loss of the pipe due to the fittings.</p>
    <p class="text-xl py-3 text-center">The formula to calculate minor head loss is shown below:</p>
    <div>\[h_{m}=K\frac{v^2}{2g}\]</div>
  </div>
  <div class="text-xl py-3">
    <p>The major head loss is the loss of pressure in the pipe due to friction. An accurate method to determine the loss of pressure is using the Darcy-Weisbach equation. The Darcy-Weisbach equation requires the friction factor, is calculated using a numerical method.</p>
    <p class="text-xl py-3 text-center">The Darcy-Weisbach equation is shown below:</p>
    <div>\[h_{L}=f\frac{1}{2g}\frac{v^2}{d}\]</div>
  </div>
  <div class="text-xl py-3">
    <p>The friction factor is determined using the Colebrook-White equation. Colebrook-White equation requires an iterative method to determine the friction factor.</p>
    <p class="text-xl py-3 text-center">The Colebrook-White equation is shown below:</p>
    <div>\[\frac{1}{\sqrt{f}}=-2 log\left(\frac{2.51}{Re\sqrt{f}}+\frac{e}{3.72d}\right)\]</div>
  </div>
  <div class="text-xl py-3">
    <p>By calculating the pump head with various flow rates, the pump system curve can be developed. The following application's performation decreases with large input value. To prevent decrease run time, the input field has an upper limit.</p>
  </div>
</div>
<!-- END theory -->
<!-- parameter -->
<div>
  <div class="text-center py-5 md:mx-40 mx-10">
    <p class="text-xl mb-4">List of parameter definition for above equations are listed below:</p>
    <button 
      class="text-sm bg-cusblue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
      style="border-radius: 75px;" 
      @click="revealParaTable"
    >
      Toggle Table
    </button>
  </div>
  <table class="mx-auto text-xl" v-if="revealTable">
    <tr>
      <th class="px-5">Parameter</th>
      <th class="" style="text-align:left">Definition</th>
    </tr>
    <tr v-for="parameter in parameterList" :key="parameter">
      <td class="px-5 text-center font-medium italic">{{parameter.name}}<sub>{{parameter.sub}}</sub></td>
      <td class="">{{parameter.definition}}</td>
    </tr>
  </table>
</div>
<!-- END parameter -->
</template>

<script>
export default {
  data(){
    return{
      revealTable:false,
      parameterList:[
        {name:'P', sub:"1", definition:"Pressure at initial reservoir (psi)"},
        {name:'P', sub:"2", definition:"Pressure at final reservoir (psi)"},
        {name:'v', sub:"1", definition:"Velocity at initial reservoir (ft/s)"},
        {name:'v', sub:"2", definition:"Velocity at final reservoir (ft/s)"},
        {name:'v', sub:"", definition:"Velocity of the fluid (ft/s)"},
        {name:'z', sub:"1", definition:"Height at initial reservoir (ft)"},
        {name:'z', sub:"2", definition:"Height at final reservoir (ft)"},
        {name:'Q', sub:"gpm", definition:"Flow rate (gpm)"},
        {name:'Q', sub:"cfm", definition:"Flow rate (cfm)"},
        {name:'d', sub:"", definition:"Diameter (in)"},
        {name:'ρ', sub:"", definition:"Density of fluid (lb/ft3)"},
        {name:'g', sub:"", definition:"Acceleration of gravity (ft/s2)"},
        {name:'μ', sub:"", definition:"Viscosity (lb/ft min)"},
        {name:'e', sub:"", definition:"Roughness (ft)"},
        {name:'K', sub:"", definition:"Loss coefficient"},
        {name:'f', sub:"", definition:"Friction factor"},
        {name:'h', sub:"p", definition:"Pump head (ft)"},
        {name:'h', sub:"L", definition:"Major head loss (ft)"},
        {name:'h', sub:"m", definition:"Minor head loss (ft)"},
      ]
    }
  },
  mounted(){
    this.renderMathJax()
  },
  methods:{
    renderMathJax(){
      if(window.MathJax){
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.mathJaxEl]);
      }
    },
    revealParaTable(){
      this.revealTable=!this.revealTable
    }
  }
}
</script>
<style>

</style>