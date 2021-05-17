<template>
  <div class="w-full bg-blue-500">
    <div class="bg-red-500 h-28"></div>
    <div class="bg-green-500">
      <h1 v-for="diameter in diameterList" :key="diameter">{{diameter}}</h1>
      <button class="bg-blue-500" @click="addSection">add new section</button>
      <br>
      <br>
      <br>
      <div class="section-form" v-for="(section,index) in sections" :key="section">
        <h1>section {{index}}</h1>
        <button class="bg-blue-500" @click="deleteSection(index)">remove new section</button>
        <h1>FLuid quantity (CFM)</h1>
        <input type="number" min="0" step="1" oninput="validity.valid||(value='');" v-model="section.fluidQuantity">
        <br>
        <h1>Length (ft)</h1>
        <input type="number" min="0" step="1" oninput="validity.valid||(value='');" v-model="section.length">
        <br>
        <h1>Head Loss (in H2O/100ft)</h1>
        <input type="number" min="0" step="1" oninput="validity.valid||(value='');" v-model="section.headLoss">
        <br>
        <h1>Fluid Density (lb/ft3)</h1>
        <input type="number" min="0" step="1" oninput="validity.valid||(value='');" v-model="section.fluidDensity">
        <br>
        <h1>Water Density (lb/ft3)</h1>
        <input type="number" min="0" step="1" oninput="validity.valid||(value='');" v-model="section.waterDensity">
        <br>
        <h1>Roughness Coefficient (ft)</h1>
        <input type="number" min="0" step="1" oninput="validity.valid||(value='');" v-model="section.roughness">
        <br>
        <h1>Viscosity (lb/ft min)</h1>
        <input type="text" min="0" step="1" oninput="validity.valid||(value='');" v-model="section.viscosity">
        <div class="fitting-form">
          <div class="fitting" v-for="(fitting,index) in fittings" :key="fitting">
            <h1>number of fittings</h1>
            <input type="number" min="0" step="1" oninput="validity.valid||(value='');" v-model="fitting.fittingAmount">
            <label>pick fitting</label>
            <select v-model="fitting.fitting">
              <option value="pleated90">pleated 90</option>
              <option value="pleated45">pleated 45</option>
              <option value="wye">wye</option>
              <option value="tee">tee</option>
            </select>
            <button  class="bg-yellow-500" @click="deleteFitting(index)">Remove fitting</button>
          </div>
          <button  class="bg-yellow-500" @click="addFitting">Add fitting</button>
        </div>
        <br>
        <br>
        <br>
        <!-- <button class="bg-blue-500" type="submit" @click="diameter(index)" @submit.prevent="diameter">Submit</button> -->
      </div>
      <button class="bg-blue-500" type="submit" @click="calculateAll" @submit.prevent="calculateAll">Submit all</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      diameterList: [],
      sections: [
        {
          fluidQuantity:100,
          length:100,
          headLoss:0.1,
          fluidDensity:0.07088,
          waterDensity:62,
          roughness:0.000492,
          viscosity:0.0007686,
        }
      ],
      fittings:[
        {
          fittingAmount:0,
          fittingType:'',
        }
      ]
    }
  },
  mounted(){
  },
  methods:{
    addSection(){
      this.sections.push({
        fluidQuantity:200,
        length:100,
        headLoss:0.1,
        fluidDensity:0.07088,
        waterDensity:62,
        roughness:0.000492,
        viscosity:0.0007686,        
      })
    },
    deleteSection(index){
      this.sections.splice(index, 1)
    },
    addFitting(){
      this.fittings.push({
        fittingAmount:0,
        fittingType:'',        
      })
    },
    deleteFitting(index){
      this.fittings.splice(index,1)
    },
    // Calculate the friction factor using Colebrooks equation (unitless)
    frictionFactor(e, d, mu, rhof, q){
      let f = 1
      let step = 0.1
      let re = (4*rhof*q)/(Math.PI*mu*d)
      while(d > 0){
        let rhs = -2*(Math.log(e/(3.7*d) + 2.51/(re*f**0.5))/Math.LN10)*f**0.5
        let lhs = 1
        if (Math.abs(lhs - rhs) < 0.001){
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
    },
    // converts desired head loss from inch H2O to ft air
    airHeadLoss (rhof, rhow, l , hlw){
      return (hlw*l*rhow)/(rhof*100)/12
    },
    // calculate the head loss
    headLoss(f, l, d, q){
      let hl = (f*8*l*q**2)/(3600*Math.PI**2*d**5*32.2)
      return hl
    },
    // calculate diameter
    diameter(index){
      let d = 5
      let step = 0.01
      let hl = this.airHeadLoss(this.sections[index].fluidDensity, this.sections[index].waterDensity, this.sections[index].length, this.sections[index].headLoss)
      while (d > 0){
        let f = this.frictionFactor(this.sections[index].roughness, d, this.sections[index].viscosity, this.sections[index].fluidDensity, this.sections[index].fluidQuantity)
        let hl_calc = this.headLoss(f, this.sections[index].length, d, this.sections[index].fluidQuantity)
        if (Math.abs(hl - hl_calc)<0.001){
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
    },
    calculateAll(){
      this.diameterList = []
      for(let i=0; i<this.sections.length; i++){
        this.diameterList.push(this.diameter(i))
      }
      console.log(this.sections[0].fitting)

    }
  }
}
</script>

<style>

</style>