<template>
<div class="bg-gradient-to-b from-gray-100 via-white to-gray-100">
  <!-- banner -->
  <Banner class="mb-20" :data-banner-info="banner" />
  <!-- END banner -->
  <!-- intro cards -->
  <div class="grid lg:grid-cols-3 lg:mx-0 md:mx-40 mx-5">
    <!-- finance card -->
    <div class="mx-3">
      <h1 class="text-center text-4xl py-2">FINANCE</h1>
      <div class="text-center my-5">
        <button 
          class="bg-bondi-blue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
          style="border-radius: 75px;" 
          @click="openApp(0)"
        >
          Go To App
        </button>
      </div>
      <p class="text-xl">
        I created an application to calculate mortgage prices, income taxes, web scrapping applications to retrieve data from the stock market etc. One such application for calculating Net Present Value and Internal Rate of Return. 
      </p>
    </div>
    <!-- END finance card -->
    <!-- duct sizing card -->
    <div class="mx-3">
      <h1 class="text-center text-4xl py-2">DUCT SIZING</h1>
      <div class="text-center my-5">
        <button 
          class="bg-bondi-blue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
          style="border-radius: 75px;" 
          @click="openApp(2)"
        >
          Go To App
        </button>
      </div>
      <p class="text-xl">
        I created an application that is used to determine the diameter of air ducts for a HVAC system. I later added features that allows the application to determine the equivalent square ducts, and calculate the pressure for each section. 
      </p>
    </div>
    <!-- END duct sizing card -->
    <!-- pump system card -->
    <div class="mx-3">
      <h1 class="text-center text-4xl py-2">PUMP SYSTEM</h1>
      <div class="text-center my-5">
        <button 
          class="bg-bondi-blue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
          style="border-radius: 75px;" 
          @click="openApp(1)"
        >
          Go To App
        </button>
      </div>
      <p class="text-xl">
        I decided to create an application that generates pump system curves, which I can use for pump selection. This application uses the conservation of energy to determine the pump head at different flow rates. 
      </p>
    </div>
    <!-- END pump system card -->
  </div>
  <!-- END intro card -->
  <!-- scroll location -->
  <div id="top" class="h-32"></div>
  <!-- END scroll location -->
  <!-- cost analysis app -->
  <div class="mb-32" v-if="open===0">
    <div class="text-center text-5xl font-bold pb-12">
      <h1>Net Present Value (NPV)</h1>
      <h1>Internal Rate of Return (IRR)</h1>
      <h1>Calculator</h1>
    </div>
    <CostAnalysisInstructions />
    <div class="w-full px-8">
      <div class="relative bg-gray-100 rounded-3xl pb-5 my-12">
        <div>
          <h1 class="text-center text-3xl font-bold">NPV and IRR</h1>
          <CostAnalysis />
        </div>
      </div>
    </div>
    <CostAnalysisTheory />
  </div>
  <!-- END cost analysis app -->
  <!-- pump system curve -->
  <div class="mb-32" v-if="open===1">
    <h1 class="text-center text-5xl font-bold pb-12">Pump System Curve Generator</h1>
    <SystemCurveInstructions />
    <div class="w-full px-8">
      <div class="relative bg-gray-100 rounded-3xl pb-5 my-12">
        <div>
          <h1 class="text-center text-3xl font-bold">Pump System Curve</h1>
          <SystemCurve />
        </div>
      </div>
    </div>
    <SystemCurveTheory />
  </div>
  <!-- END pump system curve -->
  <!-- duct sizing -->
  <div class="mb-32" v-if="open===2">
    <div class="text-center text-5xl font-bold pb-12">
      <h1>Duct Sizing</h1>
    </div>
    <DuctSizingInstructions />
    <div class="w-full px-8">
      <div class="relative bg-gray-100 rounded-3xl pb-5 my-12" v-for="(branch,index) in branches" :key="branch">
        <div class="">
          <h1 class="text-center text-3xl font-bold">Branch {{index+1}}</h1>
          <DuctSizing />
        </div>
        <button class="absolute top-0 right-0 text-3xl text-gray-400 px-3 transition-all duration-250 hover:text-bondi-blue-500 transform hover:scale-110" @click="removeComponent(index)"><i class="fas fa-times"></i></button>
      </div>
    </div>
    <div class="text-center my-5">
      <button 
        class="bg-bondi-blue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" 
        style="border-radius: 75px; width:130px" 
        @click="addComponent"
      >
        New Branch
      </button>
    </div>
    <DuctSizingTheory />
  </div>
  <!-- END duct sizing -->
  <!-- next prev button -->
  <div class="flex pb-20 justify-between mx-12">
    <button class="bg-bondi-blue-400 text-gray-200 mx-2 p-1 w-20 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" @click="prevApp"><i class="fas fa-chevron-left"></i> Prev</button>
    <button class="bg-bondi-blue-400 text-gray-200 mx-2 p-1 w-20 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" @click="nextApp">Next <i class="fas fa-chevron-right"></i></button>
  </div>
  <!-- END next prev button -->
</div>
</template>

<script>
import Banner from "../components/Banner";
import DuctSizing from "../components/DuctSizing";
import SystemCurve from "../components/SystemCurve";
import CostAnalysis from "../components/CostAnalysis";
import SystemCurveInstructions from '../components/SystemCurveInstructions';
import SystemCurveTheory from '../components/SystemCurveTheory';
import DuctSizingInstructions from '../components/DuctSizingInstructions';
import DuctSizingTheory from '../components/DuctSizingTheory';
import CostAnalysisInstructions from '../components/CostAnalysisInstructions';
import CostAnalysisTheory from '../components/CostAnalysisTheory';
export default {
  data(){
    return {
      open: 2,
      branches:[0],
      count:1,
      banner:{
        picture: "laptop",
        heading: "PROGRAMS"
      },
    }
  },
  mounted(){
    // scroll to top when enter page
    window.scrollTo(0,0)
  },
  methods:{
    // add branch
    addComponent(){
      this.branches.push(this.branches.length)
    },
    // remove branch
    removeComponent(index){
      this.branches.splice(index,1)
    },
    // open application
    openApp(index){
      document.getElementById("top").scrollIntoView({ behavior: 'smooth'});
      this.open = index
    },
    // next application
    nextApp(){
      if(this.open !=2){
        document.getElementById("top").scrollIntoView({ behavior: 'smooth'});
        this.open++
      } else{
        document.getElementById("top").scrollIntoView({ behavior: 'smooth'});
        this.open = 0
      }
    },
    // previous application
    prevApp(){
      if(this.open !=0){
        document.getElementById("top").scrollIntoView({ behavior: 'smooth'});
        this.open--
      } else{
        document.getElementById("top").scrollIntoView({ behavior: 'smooth'});
        this.open = 2
      }
    },
  },
components:{Banner,DuctSizing, SystemCurve,SystemCurveInstructions, SystemCurveTheory, DuctSizingInstructions, DuctSizingTheory, CostAnalysis, CostAnalysisInstructions, CostAnalysisTheory}
}
</script>

<style>
.instruction-width{
  width: 450px
}
@media(max-width:600px){
  .instruction-width{
    width:400px;
  }
}
</style>