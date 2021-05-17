<template>
<!-- theory -->
<div class="pb-5 md:mx-40 mx-10">
  <h1 class="text-center text-4xl font-bold py-5">Theory</h1>
  <div class="text-xl py-3">
    <p>Net present value (NPV) compare the present value of cash inflow and the value of cash outflow over a pertiod of time. The discount rate is the interest the company expect in return if the same amount of money is invested in other ventures. If the NPV is negative, it indicates the current project is not profitable and the project should not be started. </p>
    <p class="text-xl py-3 text-center">The formula to calculate NPV is shown below:</p>
    <div>\[NPV=\sum_{t=1}^n\frac{R_{t}}{(1+i)^t}\]</div>
  </div>
  <div class="text-xl py-3">
    <p>Similar to NPV, Internal rate of return (IRR) is used to determine the profitability of a investment. IRR calculates the discounted rate that is required to produce zero NPV. IRR utilizes the same formula as net present value. If the IRR is negative, that means the investment is not profitable and the project should not be started.</p>
    <p class="text-xl py-3 text-center">The formula to calculate IRR is shown below:</p>
    <div>\[0=\sum_{t=1}^n\frac{R_{t}}{(1+IRR)^t}\]</div>
  </div>
  <div class="text-xl py-3">
    <p>A numerical method is required to determine the IRR since the equation cannot be solved algebraically. The Newton-Raphson method is the numerical method used to determine the IRR. One of the Newton-Raphson method's limitation is that it cannot calculate the IRR value at a period with a negative cash flow, because divergence occurs.</p>
    <p class="text-xl py-3 text-center">The Newton-Raphson method is shown below:</p>
    <div>\[x_{n+1}=x_{n+1}-\frac{f(x_{n})}{f'(x_{n})}\]</div>
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
        {name:'NPV', sub:'', definition:"Net present value"},
        {name:'R', sub:'', definition:"Cash flow"},
        {name:'i', sub:'', definition:"Discounted rate"},
        {name:'t', sub:'', definition:"Period"},
        {name:'IRR', sub:'', definition:"Internal rate of return"},
        {name:'f(x)', sub:'', definition:"NPV function"},
        {name:"f'(x)", sub:'', definition:"Derivative of NPV function"},
        {name:'x', sub:'n', definition:"iteration step"},
      ]
    }
  },
  mounted(){
    this.renderMathJax()
  },
  methods:{
    // render equations
    renderMathJax(){
      if(window.MathJax){
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.mathJaxEl]);
      }
    },
    // reveal table
    revealParaTable(){
      this.revealTable=!this.revealTable
    }
  }
}
</script>

<style>

</style>