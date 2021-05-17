<template>
<div class="mx-5 my-2">
  <!-- data section -->
  <div class="relative section-form bg-gray-200 py-1 px-2 rounded-3xl my-12 shadow-2xl">
    <div class="data-form grid lg:grid-cols-7 sm:grid-cols-4 grid-cols-2 sm:px-2 text-center my-5">
      <div class="text-md" v-for="pump in dataList" :key="pump">
        <input 
          class="w-28 rounded-md text-center" type="number" min="0" step="1" @onkeypress="isNumberKey(this, event);" 
          v-model="$data[pump.data]"
        >
          <h1 class="text-sm">{{pump.heading}}<br>{{pump.unit}}</h1>
      </div>
    </div>
    <div class="text-center">
      <button class="bg-cusblue-400 text-gray-200 mx-2 p-1 w-20 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" @click="clearEntry()">Clear</button>
    </div>    
    <div class="text-center my-5">
      <button class="bg-cusblue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" type="submit" @click="calculate" @submit.prevent="calculate">Calculate</button>
    </div>
  </div>
  <!-- END data section -->
  <!-- chart section -->
  <div class="relative bg-gray-200 shadow-2xl py-1 my-12 rounded-3xl" v-if="displayChart">
    <line-chart 
      class="mx-auto md:px-24 pt-6" 
      :data="chartData" 
      :points="false" 
      :min="0" 
      xtitle="Flow Rate (GPM)" 
      ytitle="Pump Head (ft)" 
      height="500px"
    ></line-chart>
    <button class="absolute right-0 top-0 text-3xl px-3 text-gray-400 transition-all duration-250 hover:text-cusblue-500 transform hover:scale-110" @click="deleteTable()"><i class="fas fa-times"></i></button>
  </div>
  <h1 class="text-3xl my-5 text-center" v-if="displayChart">Pump head at {{flowRate}} (gpm): {{pumpHeadData.toFixed(2)}} (ft)</h1>
  <!-- END chart section -->
</div>
</template>

<script>
export default {
  data(){
    return {
      flowRate: 1000,
      diameter: 5,
      pipeLength: 100,
      kValue: 0,
      heightRes: 0,
      heightPump: 0,
      pressureAtm: 0,
      pressureVap: 0,
      initialVelocity: 0,
      finalVelocity: 0,
      fluidDensity: 62.3,
      safetyFactor: 5,
      viscosity: 0.0008538,
      roughness: 0.00000656,
      pumpHeadData: 0,
      NPSHA:0,
      displayChart:false,
      chartData: null,
      dataList:[
        {data:'flowRate', heading: 'Flow Rate', unit: '(gpm)'}, 
        {data:'diameter', heading: 'Diameter', unit: '(in)'}, 
        {data:'pipeLength', heading: 'Length', unit: '(ft)'}, 
        {data:'kValue', heading: 'K value', unit: ''}, 
        {data:'heightRes', heading: 'Reservoir Height', unit: '(ft)'}, 
        {data:'heightPump', heading: 'Pump Height', unit: '(ft)'}, 
        {data:'pressureAtm', heading: 'Initial Pressure', unit: '(psi)'}, 
        {data:'pressureVap', heading: 'Final Pressure', unit: '(psi)'}, 
        {data:'initialVelocity', heading: 'Initial Velocity', unit: '(ft/s)'}, 
        {data:'finalVelocity', heading: 'Final Velocity', unit: '(ft/s)'}, 
        {data:'fluidDensity', heading: 'Fluid Density', unit: '(lb/ft3)'}, 
        {data:'viscosity', heading: 'Viscosity', unit: '(lb/ft min)'}, 
        {data:'roughness', heading: 'Roughness', unit: '(ft)'}, 
        {data:'safetyFactor', heading: 'Safety Factor', unit: '(ft)'}, 
      ],
    }
  },
  methods:{
    deleteTable(){
      this.displayChart = false
    },
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
    clearEntry(){
      this.displayChart=false
      this.flowRate= 0
      this.diameter= 0
      this.pipeLength= 0
      this.kValue= 0
      this.heightRes= 0
      this.heightPump= 0
      this.pressureAtm= 0
      this.pressureVap= 0
      this.initialVelocity= 0
      this.finalVelocity= 0
      this.fluidDensity= 0
      this.safetyFactor= 0
      this.viscosity= 0
      this.roughness= 0

    },
    // calculate Reynolds Number
    reyoldNumber(rhof,q,mu,d){
      return (4*rhof*q)/(Math.PI*mu*d)
    },
    // calculate friction factor diameter in feet
    frictionFactor(e, d, mu, rhof, q){
      let f = 1
      let step = 0.1
      let re = this.reyoldNumber(rhof,q,mu,d)
      let i = 0
      while(d > 0 && i++<200){
        let rhs = -2*(Math.log(e/(3.7*d) + 2.51/(re*f**0.5))/Math.LN10)*f**0.5
        let lhs = 1
        if (Math.abs(lhs - rhs) < 0.001){
          // console.log(f)
          return f
        }
        if (lhs > rhs){
          f = f + step
          step = step/10
        }
        else{
          f -= step
        }
      }
      return false
    },
    // calculate velocity d must be in inches
    velocity(q,d){
      return 2.4*q/(Math.PI*(d/2)**2)
    },
    // units of ft for now
    darcyHeadLoss(f, l, d, q){
      let hl = (f*8*l*q**2)/(3600*Math.PI**2*(d/12)**5*32.2)
      return hl
    },
    // calculate minor losses
    minor(k,v){
      return k*v**2/(2*32.2)
    },
    // the first 32.2 and 144 is used as conversion second one is gravity **NOT USED**
    netPosSucHeadActual(p1, p2, z1, z2, v1, v2, rhof, major, minor){
      return 32.2*144*(p1-p2)/(rhof*32.2) + (z1-z2) + (v1**2-v2**2)/(2*32.2)- major - minor 
    },
    // calculate pump head
    pumpHead(p1, p2, z1, z2, v1, v2, rhof, major, minor){
      return  (z2-z1) + 32.2*144*(p2-p1)/(rhof*32.2)+ (v2**2-v1**2)/(2*32.2)  + major + minor
    },
    calculate(){
      let gpm = Number(this.flowRate)
      let d = Number(this.diameter)
      let l = Number(this.pipeLength)
      let k = Number(this.kValue)
      let z1 = Number(this.heightRes)
      let z2 = Number(this.heightPump)
      let p1 = Number(this.pressureAtm)
      let p2 = Number(this.pressureVap)
      let v1 = Number(this.initialVelocity)
      let v2 = Number(this.finalVelocity)
      let rhof = Number(this.fluidDensity)
      let mu = Number(this.viscosity)
      let e = Number(this.roughness)
      let sf = Number(this.safetyFactor)
      let q = gpm*0.13368055419447
      console.log(Number("10-00"))
      let checkDataList = [gpm,d,l,k,rhof,mu,e,sf]
      for (let i = 0; i<checkDataList.length; i++){
        if (checkDataList[i]<0 || checkDataList[i]>100000){
          alert("out of range, input must be between 0 to 100000")
          return null
        }
      }
      if(e>1 || mu>1 || rhof>10000){
        alert("roughness and viscosity is limited to less than 1. fluid density is limited to less than 10000")
        return null
      } else {
        let f = this.frictionFactor(e, d/12, mu, rhof, q)
        if (f===false){
          alert("invalid inputs")
          return null
        }
        this.displayChart = true
        let majorHL = this.darcyHeadLoss(f, l, d, q)
        let v = this.velocity(q,d)
        let minorHL = this.minor(k,v)
        this.pumpHeadData = this.pumpHead(p1, p2, z1, z2, v1, v2, rhof, majorHL, minorHL)-sf
        this.NPSHA = this.netPosSucHeadActual(p1, p2, z1, z2, v1, v2, rhof, majorHL, minorHL)
        let pumpHeadList = []
        let gpmMax = (gpm + gpm/2)
        let x= function(a,b,c,d){d=[];c=b-a+1;while(c--){d[c]=b--}return d}
        let gpmList = x(1,Math.round(gpmMax));
        for (let i=0; i<gpmList.length; i++){
          let cfm = gpmList[i]*0.13368055419447
          let f = this.frictionFactor(e, d/12, mu, rhof, cfm)
          let majorHL = this.darcyHeadLoss(f, l, d, cfm)
          let v = this.velocity(cfm,d)
          let minorHL = this.minor(k,v)
          let pumpHeadData = this.pumpHead(p1, p2, z1, z2, v1, v2, rhof, majorHL, minorHL)
          pumpHeadList.push([gpmList[i],pumpHeadData-sf])
        }
        this.chartData = pumpHeadList
      }
    }
  }
}
</script>

<style>

</style>