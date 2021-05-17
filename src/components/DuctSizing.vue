<template>
<!-- main container -->
<div class="mx-5 my-2">
    <!-- section card -->
  <div class="relative section-form bg-gray-200 py-1 px-2 rounded-3xl my-12 shadow-2xl" v-for="(section,parent_index) in sections" :key="section">
    <h1 class="text-center text-2xl my-5 font-bold">Section {{parent_index+1}}</h1>
    <!-- section data -->
    <div class="data-form grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2 sm:px-2 text-center my-5">
      <div class="text-md">
        <input class="w-28 rounded-md text-center" type="number" min="0" @onkeypress="isNumberKey(this, event);" 
        v-model="section.data.fluidQuantity">
        <h1 class="text-sm">Fluid Quantity<br>(CFM)</h1>
      </div>
      <div class="text-md">
        <input class="w-28 rounded-md text-center" type="number" min="0" @onkeypress="isNumberKey(this, event);" v-model="section.data.ductLength">
        <h1 class="text-sm">Length<br>(ft)</h1>
      </div>
      <div class="text-md">
        <input class="w-28 rounded-md text-center" type="number" min="0" @onkeypress="isNumberKey(this, event);" v-model="section.data.headLoss">
        <h1 class="text-sm">Head Loss<br>(in H2O/100ft)</h1>
      </div>
      <div>
        <input class="w-28 rounded-md text-center" type="number" min="0" @onkeypress="isNumberKey(this, event);" v-model="section.data.addedPressure">
        <h1 class="text-sm">Added Pressure <br> (in H2O/100ft)</h1>
      </div>
      <div>
        <input class="w-28 rounded-md text-center" type="number" min="0" @onkeypress="isNumberKey(this, event);" v-model="section.data.fluidDensity">
        <h1 class="text-sm">Fluid Density <br> (lb/ft3)</h1>
      </div>
      <div>
        <input class="w-28 rounded-md text-center" type="number" min="0" @onkeypress="isNumberKey(this, event);" v-model="section.data.waterDensity">
        <h1 class="text-sm">Water Density <br> (lb/ft3)</h1>
      </div>
      <div>
        <input class="w-28 rounded-md text-center" type="number" min="0" @onkeypress="isNumberKey(this, event);" v-model="section.data.roughness">
        <h1 class="text-sm">Roughness <br> (ft)</h1>
      </div>
      <div>
        <input class="w-28 rounded-md text-center" type="text" min="0" @onkeypress="isNumberKey(this, event);" v-model="section.data.viscosity">
        <h1 class="text-sm">Viscosity <br> (lb/ft min)</h1>
      </div>
    </div>
    <!-- END section data -->
    <!-- section fitting -->
    <div class="fitting-form text-center" v-for="(fitting,child_index) in section.fittings" :key="fitting">
      <div>
        <input class="w-28 rounded-md text-center" type="number" min="0" @onkeypress="isNumberKey(this, event);" v-model="fitting.fittingAmount">
        <select class="w-32 rounded-md text-center ml-4" v-model="fitting.fittingType">
          <option value="none" selected="select">None</option>
          <option value="Pleated 90">Pleated 90</option>
          <option value="Pleated 45">Pleated 45</option>
          <option value="Mitered 90">Mitered 90</option>
          <option value="Mitered Vanes">Mitered Vanes</option>
          <option value="Converging 20">Converging 20</option>
          <option value="Diverging 120">Diverging 120</option>
          <option value="Abrupt 90">Abrupt 90</option>
          <option value="Bellmouth">Bellmouth</option>
          <option value="Wye branch">Wye branch</option>
          <option value="Wye through">Wye through</option>
          <option value="Tee branch">Tee branch</option>
          <option value="Tee through">Tee through</option>
        </select>
        <button class="my-2 bg-cusblue-400 text-gray-200 mx-2 p-1 w-20 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" @click="deleteFitting(parent_index,child_index)">Remove</button>
        <h1 class="mb-2">Fitting {{child_index + 1 }}: Quantity and Type </h1>
      </div>
    </div>
    <div class="text-center mb-4">
      <button class="bg-cusblue-400 text-gray-200 mx-2 p-1 w-20 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" @click="addFitting(parent_index)">Add</button>
    </div>
    <!-- END section fitting -->
    <br>
    <!-- section exit button -->
    <button class="absolute right-0 top-0 text-3xl px-3 text-gray-400 transition-all duration-250 hover:text-cusblue-500 transform hover:scale-110" @click="deleteSection(parent_index)"><i class="fas fa-times"></i></button>
    <!-- END section exit button -->
  </div>
  <!-- END section card -->
  <!-- section bottom buttons -->
  <div class="text-center">
    <button class="bg-cusblue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px" @click="clearEntry()">Clear</button>
  </div> 
  <div class="text-center mt-5">
    <button class="bg-cusblue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px; width:130px" @click="addSection">New Section</button>
    <button class="bg-cusblue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-cusblue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px; width:130px" type="submit" @click="calculateAll" @submit.prevent="calculateAll">Calculate</button>
  </div>
  <!-- END section bottom buttons -->
  <!-- charts -->
  <div v-if="showTable" class="transform sm:scale-100 scale-75">
    <!-- rounded diameter -->
    <div class="relative bg-gray-200 shadow-2xl py-1 my-12 rounded-3xl" v-if="!this.charts.roundedD">
      <h1 class="text-3xl my-5 text-center">Rounded Diameter with cooresponding changes in Head Loss</h1>
      <table class="mx-auto my-5 md:text-lg text-xs">
        <tr class="">
          <th class="sm:px-2">Section</th>
          <th class="sm:px-2">Diameter (in)</th>
          <th class="sm:px-2">Head Loss (in H2O/100ft)</th>
          <th class="sm:px-2">Velocity (fpm)</th>
          <th class="sm:px-2">Reynolds Number</th>
          <th class="sm:px-2">Pressure (in H2O)</th>
        </tr>
        <tr class="text-center" v-for="index in roundedDiameterList.length" :key="index">
          <td>{{index}}</td>
          <td>{{roundedDiameterList[index-1]}}</td>
          <td>{{roundedDiameterHLList[index-1].toFixed(3)}}</td>
          <td>{{roundedVelocityList[index-1].toFixed()}}</td>
          <td>{{roundedReynoldList[index-1].toFixed()}}</td>
          <td>{{roundedPressureList[index-1].toFixed(3)}}</td>
        </tr>
      </table>
      <div class="text-center">
        <h1> <span class="font-bold">Total Pressure:</span> {{pBranch.toFixed(3)}}</h1>
      </div>
      <button class="absolute right-0 top-0 text-3xl px-3 text-gray-400 transition-all duration-250 hover:text-cusblue-500 transform hover:scale-110" @click="deleteChart(0)"><i class="fas fa-times"></i></button>
    </div>
    <!-- END rounded diameter -->
    <!-- actual diameter -->
    <div class="relative bg-gray-200 shadow-2xl py-1 my-12 rounded-3xl" v-if="!this.charts.actualD">
      <h1 class="text-3xl my-5 text-center">Unrounded Diameter with target Head Loss</h1>
      <table class="mx-auto my-5 md:text-lg text-xs">
        <tr class="">
          <th class="sm:px-2">Section</th>
          <th class="sm:px-2">Diameter (in)</th>
          <th class="sm:px-2">Head Loss (in H2O/100ft)</th>
          <th class="sm:px-2">Velocity (fpm)</th>
          <th class="sm:px-2">Reynolds Number</th>
          <th class="sm:px-2">Pressure (in H2O)</th>
        </tr>
        <tr class="text-center" v-for="index in actualDiameterList.length" :key="index">
          <td>{{index}}</td>
          <td>{{actualDiameterList[index-1].toFixed(2)}}</td>
          <td>{{actualDiameterHLList[index-1]}}</td>
          <td>{{actualVelocityList[index-1].toFixed()}}</td>
          <td>{{actualReynoldList[index-1].toFixed()}}</td>
          <td>{{actualPressureList[index-1].toFixed(3)}}</td>
        </tr>
      </table>
      <div class="text-center">
        <h1> <span class="font-bold">Total Pressure:</span> {{pBranchActual.toFixed(3)}}</h1>
      </div>
      <button class="absolute right-0 top-0 text-3xl px-3 text-gray-400 transition-all duration-250 hover:text-cusblue-500 transform hover:scale-110" @click="deleteChart(1)"><i class="fas fa-times"></i></button>
    </div>
    <!-- END actual diameter -->
    <!-- square ducts -->
    <div class="relative bg-gray-200 shadow-2xl py-1 my-12 rounded-3xl" v-if="!this.charts.squareD">
      <h1 class="text-3xl my-5 text-center">Equivalent Square Ducts</h1>
      <table class="mx-auto my-5 md:text-lg text-xs" v-for="(sections,section_index) in squareDuctList" :key="sections">
        <tr> 
          <th align="center" colspan="4">Section {{section_index+1}}: Diameter {{roundedDiameterList[section_index]}} inches</th>
        </tr>
        <tr>
          <th class="sm:px-2">Offset (in)</th>
          <th class="sm:px-2">Side A (in)</th>
          <th class="sm:px-2">Side B (in)</th>
          <th class="sm:px-2">Aspect Ratio</th>
        </tr>
        <tr class="text-center" v-for="object in sections" :key="object">
          <td>{{object.precision.toFixed(3)}}</td>
          <td>{{object.sideA}}</td>
          <td>{{object.sideB}}</td>
          <td>{{object.aspectR.toFixed(1)}}</td>
        </tr>
      </table>
      <button class="absolute right-0 top-0 text-3xl px-3 text-gray-400 transition-all duration-250 hover:text-cusblue-500 transform hover:scale-110" @click="deleteChart(2)"><i class="fas fa-times"></i></button>
    </div>
    <!-- END square ducts -->
  </div>
  <!-- END charts -->
</div>
<!-- END main container -->
</template>

<script>
export default {
  data(){
    return {
      showTable: false,
      charts: {"roundedD": false, "actualD":false, "squareD":false},
      roundedDiameterList: [],
      roundedVelocityList:[],
      roundedReynoldList:[],
      roundedDiameterHLList: [],
      roundedPressureList: [],
      actualDiameterList: [],
      actualVelocityList:[],
      actualReynoldList:[],
      actualDiameterHLList:[],
      actualPressureList: [],
      pBranch: 0,
      pBranchActual: 0,
      squareDuctList: [],
      sections: [
        {
          data:{
            fluidQuantity:100,
            ductLength:100,
            headLoss:0.1,
            addedPressure:0,
            fluidDensity:0.07088,
            waterDensity:62,
            roughness:0.000492,
            viscosity:0.0007686,            
          },
          fittings:[
            {
              fittingAmount:0,
              fittingType:'none',
            }
          ]
        }
      ],
      allFittings: 
        {
          'none':0, 
          'Pleated 90': 15, 
          'Pleated 45':9, 
          'Mitered 90': 60, 
          'Mitered Vanes':10, 
          'Converging 20':4, 
          'Diverging 120':40, 
          'Abrupt 90':30, 
          'Bellmouth':12, 
          'Wye branch':20, 
          'Wye through':8, 
          'Tee branch':40,
          'Tee through':8,
        },
      // allFittingsList: 
      //   [
      //     {'None':0}, 
      //     {'Pleated 90': 15}, 
      //     {'Pleated 45':9}, 
      //     {'Mitered 90': 60}, 
      //     {'Mitered Vanes':10}, 
      //     {'Converging 20':4}, 
      //     {'Diverging 120':40}, 
      //     {'Abrupt 90':30}, 
      //     {'Bellmouth':12}, 
      //     {'Wye branch':20}, 
      //     {'Wye through':8}, 
      //     {'Tee branch':40},
      //     {'Tee through':8},
      //   ],
    }
  },

  methods:{
    // validate input
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
          (charCode < 48 || charCode > 57) && charCode===109)
          return false;
      }
      return true;
    }, 
    addSection(){
      this.sections.push(
        {
          data:{
            fluidQuantity:0,
            ductLength:0,
            headLoss:0.1,
            addedPressure:0,
            fluidDensity:0.07088,
            waterDensity:62,
            roughness:0.000492,
            viscosity:0.0007686,            
          },
          fittings:[
            {
              fittingAmount: 0,
              fittingType:'none',
            }
          ]
        }
      )
    },
    deleteSection(indexParent){
      this.sections.splice(indexParent, 1)
    },
    addFitting(indexParent){
      this.sections[indexParent].fittings.push({
        fittingAmount:0,
        fittingType:'none',        
      })
    },
    deleteFitting(indexParent,indexChild){
      this.sections[indexParent].fittings.splice(indexChild,1)
    },
    clearEntry(){
      this.showTable = false
      this.sections= [
        {
          data:{
            fluidQuantity:0,
            ductLength:0,
            headLoss:0,
            addedPressure:0,
            fluidDensity:0,
            waterDensity:0,
            roughness:0,
            viscosity:0,            
          },
          fittings:[
            {
              fittingAmount:0,
              fittingType:'none',
            }
          ]
        }
      ]
    },
    deleteChart(index){
      if (index === 0){
        this.charts.roundedD = !this.charts.roundedD
      }
      if (index === 1){
        this.charts.actualD = !this.charts.actualD
      }
      if (index === 2){
        this.charts.squareD = !this.charts.squareD
      }

    },
    // calculate reynolds number diameter in ft (unitless)
    reyoldNumber(rhof,q,mu,d){
      return (4*rhof*q)/(Math.PI*mu*d)
    },
    // Calculate the friction factor using Colebrooks equation (unitless)
    frictionFactor(e, d, mu, rhof, q){
      let f = 1
      let step = 0.1
      let re = this.reyoldNumber(rhof,q,mu,d)
      let i = 0
      while(d > 0 && i++<200){
        let rhs = -2*(Math.log(e/(3.7*d) + 2.51/(re*f**0.5))/Math.LN10)*f**0.5
        let lhs = 1
        if (Math.abs(lhs - rhs) < 0.01){
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
    // calculate equivalent length with fittings (ft)
    equivalentLength(d,fitting,quantity){
      for(let prop in this.allFittings){
        if(prop===fitting){
          return (this.allFittings[prop]*d/12)*quantity
        }
      }
    },
    // pressure in the section (in w.g.)
    sectionPressure(hlw, l_eq, p_added){
      return (hlw*(l_eq))/100 + p_added
    },
    // converts desired head loss from inch H2O to (ft air)
    airHeadLoss (rhof, rhow, l , hlw){
      return (hlw*l*rhow)/(rhof*100)/12
    },
    // calculate the head loss (in air)
    darcyHeadLoss(f, l, d, q){
      let hl = (f*8*l*q**2)/(3600*Math.PI**2*d**5*32.2)
      return hl
    },
    // head loss used for rounded diameter (in wg / 100ft)
    waterHeadLoss(hla,rhof,rhow,l){
      return (12*hla*rhof*100)/(rhow*l)
    },
    // velocity require diameter in inches (fpm)
    velocity(q,d){
      return 144*q/(Math.PI*(d/2)**2)
    },
    // calculate diameter (in)
    diameter(e, mu, rhof, rhow, q, l, hlw){
      let d = 100
      let step = 0.01
      let hl = this.airHeadLoss(rhof, rhow, l , hlw) //ft
      let i = 0
      while (d > 0 && i++ < 20000){
        let f = this.frictionFactor(e, d, mu, rhof, q)
        let hl_calc = this.darcyHeadLoss(f, l, d, q) //ft
        if (Math.abs(hl - hl_calc)<0.01){
          return d*12
        }
        if(hl_calc > hl){
          d = d + step
          step = step/10
        }
        else{
          d -= step
        }
      }
      return null
    },
    // returns equivalent square ducts with aspect ratio of less than 4 and precision within +- 1 inch of diameter
    squareDuct(diameter){
      let x= function(a,b,c,d){d=[];c=b-a+1;while(c--){d[c]=b--}return d}
      let abList = x(diameter-4,diameter+4);
      let dList = []
      while (abList.length!=0){
        for(let i=0; i<abList.length; i++){
          let a = abList[0]
          let b = abList[i]
          let rhs = 0
          rhs = 1.3*(a*b)**0.625/(a+b)**0.25
          if (Math.abs(rhs-diameter) < 1){
            if(b/a < 2.5 && b/a > 0.4){
              if(b>a){
                dList.push({"precision":Math.abs(rhs-diameter), "sideA":a, "sideB":b, "aspectR": b/a})
              } else{
                dList.push({"precision":Math.abs(rhs-diameter), "sideA":a, "sideB":b, "aspectR": a/b})
              }
            }
          }
          if (i+1===abList.length){
            abList.shift()
          }
        }
      }
      return dList.sort((a,b)=>{
        return a.precision-b.precision
      })
    },
    calculateAll(){
      this.charts.roundedD = false
      this.charts.actualD = false
      this.charts.squareD = false
      this.roundedDiameterList = []
      this.roundedVelocityList = []
      this.roundedReynoldList = []
      this.roundedDiameterHLList = []
      this.roundedPressureList = []
      this.actualDiameterList = []
      this.actualVelocityList = []
      this.actualReynoldList = []
      this.actualPressureList = []
      this.actualDiameterHLList=[]
      this.squareDuctList= []
      this.pBranch = null
      this.pBranchActual = null
      for(let index=0; index<this.sections.length; index++){
        const e = Number(this.sections[index].data.roughness)
        const mu = Number(this.sections[index].data.viscosity)
        const rhof = Number(this.sections[index].data.fluidDensity)
        const rhow = Number(this.sections[index].data.waterDensity)
        const l = Number(this.sections[index].data.ductLength)
        const hlData =  Number(this.sections[index].data.headLoss)
        const q = Number(this.sections[index].data.fluidQuantity)
        const p_added = Number(this.sections[index].data.addedPressure)
        const sectionFittings = this.sections[index].fittings
        if(e>1 || mu>1 || rhof>10000 || hlData>10000 || rhow>500){
          alert("Invalid Input: numbers out of bound")
          break
        }
        // actual diameter to reach desired head loss (0.1 inch w.g. / 100 ft)
        let d = this.diameter(e, mu, rhof, rhow, q, l, hlData)
        if (d===null){
          alert("invalid input: diameter did not converge")
          return null
        }
        let v = this.velocity(q,d)
        let re = this.reyoldNumber(rhof,q,mu,d/12)
        this.actualDiameterList.push(d)
        this.actualVelocityList.push(v)
        this.actualReynoldList.push(re)
        this.actualDiameterHLList.push(hlData)
        // calculate rounded diameter with corresponding head loss in (in wg / 100ft)
        let dRounded = Number(this.diameter(e, mu, rhof, rhow, q, l, hlData).toFixed(0))
        let vRounded = this.velocity(q,dRounded)
        let reRounded = this.reyoldNumber(rhof,q,mu,dRounded/12)
        let f = this.frictionFactor(e, dRounded/12, mu, rhof, q)
        if (f===false){
          alert("invalid input: friction factor did not converge")
          return null
        }
        let hla = this.darcyHeadLoss(f, l, dRounded/12, q)
        let hlw = this.waterHeadLoss(hla,rhof,rhow,l)
        this.roundedDiameterList.push(dRounded)
        this.roundedDiameterHLList.push(hlw)
        this.roundedVelocityList.push(vRounded)
        this.roundedReynoldList.push(reRounded)
        // calculate equivalent square ducts
        let squareDucts = this.squareDuct(dRounded).splice(0,5)
        this.squareDuctList.push(squareDucts)
        // calculate pressure in each section
        let l_eq = l
        for(let i=0; i<sectionFittings.length; i++){
          let fitting = sectionFittings[i].fittingType
          let quantity = Number(sectionFittings[i].fittingAmount)
          l_eq += this.equivalentLength(dRounded,fitting,quantity)
        }
        let p = this.sectionPressure(hlw, l_eq, p_added)
        let p_acutal = this.sectionPressure(hlData, l_eq, p_added)
        this.roundedPressureList.push(p)
        this.actualPressureList.push(p_acutal)
      }
      // calculate total branch pressure
      this.pBranch = this.roundedPressureList.reduce((a, b) => a + b, 0)
      this.pBranchActual = this.actualPressureList.reduce((a, b) => a + b, 0)
      this.showTable = true
    }
  }
}
</script>

<style>

</style>