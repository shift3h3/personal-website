<template>
<!-- Theory -->
<div class="pb-5 md:mx-40 mx-10">
  <h1 class="text-center text-4xl font-bold py-5">Theory</h1>
  <div class="text-xl py-3">
    <p>This application is used to determine the diameter of circular or square air ducts. The pressure drop for each section is calculated. The application uses Colebrook-white equation to determine the friction factor, and incorporate Darcy-Weisbach equation to determine the diameter.</p>   
    <p class="text-xl py-3 text-center">The Darcy-Weisbach equation is shown below:</p>
    <div class="sm:text-xl text-sm">\[h_{L}=f\frac{1}{2g}\frac{v^2}{d}\]</div>
  </div>
  <div class="text-xl py-3">
    <p>The friction factor is determined using the Colebrook-White equation. Colebrook-White equation requires an iterative method to determine the friction factor.</p>
    <p class="sm:text-xl text-xs py-3 text-center">The Colebrook-White equation is shown below:</p>
    <div class="transform sm:scale-100 scale-50">\[\frac{1}{\sqrt{f}}=-2 log\left(\frac{2.51}{Re\sqrt{f}}+\frac{e}{3.72d}\right)\]</div>
  </div>
  <div class="text-xl py-3">
    <p>For most air duct systems, codes and standards dictate the maximum velocity for a duct system. The fluid velocity is determined by converting the volumetric flow rate.</p>
    <p class="text-xl py-3 text-center">The formula to calculate velocity is shown below:</p>
    <div>\[v=\frac{2.4Q_{cfm}}{\pi(d/2)^2}\]</div>
  </div>
  <div class="text-xl py-3">
    <p>The equivalent square ducts can be calculated use the diameter of a circular duct. The equivalent square ducts are displayed in the order of precision to the diameter.</p>
    <p class="text-xl py-3 text-center">The formula to calculate equivalent square ducts is shown below:</p>
    <div>\[d_{e}=\frac{1.30a^{0.625}}{(a+b)^{0.25}}\]</div>
  </div>
  <div class="text-xl py-3">
    <p>The pressure is used to determine the requirements for the diffusor. The additional pressure in the system from miscellaneous are incorporated into the pressure calculation.</p>
    <p class="text-xl py-3 text-center">The formula to calculate pressure is shown below:</p>
    <div>\[P_{sec}=\frac{h_{L}l_{eq}}{100ft}+P_{added}\]</div>
  </div>
</div>
<!-- END theory -->
<!-- parameter table -->
<div>
  <div class="text-center py-5 md:mx-40 mx-10">
    <p class="text-xl mb-4">List of parameter definition for above equations are listed below:</p>
    <button 
      class="text-sm bg-bondi-blue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
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
<!-- END paramter table -->
</template>

<script>
export default {
  data(){
    return{
      revealTable:false,
      parameterList:[
        {name:'h', sub:'L', definition:"Head loss (inch fluid)"},
        {name:'v', sub:'', definition:"Velocity of the fluid (ft/s)"},
        {name:'P', sub:'sec', definition:"Section pressure (psi)"},
        {name:'P', sub:'added', definition:"Added pressure (psi)"},
        {name:'Q', sub:'cfm', definition:"Flow rate (cfm)"},
        {name:'d', sub:'', definition:"Diameter (in)"},
        {name:'ρ', sub:'', definition:"Density of fluid (lb/ft3)"},
        {name:'g', sub:'', definition:"Acceleration of gravity (ft/s2)"},
        {name:'μ', sub:'', definition:"Viscosity (lb/ft min)"},
        {name:'e', sub:'', definition:"Roughness (ft)"},
        {name:'f', sub:'', definition:"Friction factor"},
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
@media(max-width:450){
  .eqn-size{
    font-size: 0.5px !important;
  }
}
</style>