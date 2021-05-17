<template>
<div class="bg-gradient-to-b from-white via-white to-gray-100">
  <!-- banner -->
  <Banner class="mb-40" :data-banner-info="banner" />
  <!-- END banner -->
  <!-- modals -->
  <div v-if="modalOn">
    <div v-for="modal in modalPicture" :key="modal">
      <Modal v-if="modal.toggle" @close="modal.toggle = false">
        <template #title>
          <h1 class="text-center font-bold">{{modal.title}}</h1> 
        </template>
        <template #body>
          <div 
            class="bg-gray-100 relative modal-dim bg-no-repeat bg-center bg-cover" 
            :class="modal.picture"

          ></div>
        </template>
      </Modal>
    </div>
  </div>
  <!-- END modals -->
  <!-- autocad -->
  <div class="mx-5 mb-96">
    <h1 class="text-center text-5xl font-bold pb-12">AUTOCAD DRAWINGS</h1>
    <div class="grid lg:grid-cols-2 lg:mx-0 md:mx-24 mx-5 pb-12">
      <div 
        class="bg-gray-100 cursor-pointer relative box-height b1 mt-4 mx-5 h-96 bg-no-repeat bg-center bg-cover transition-all transform hover:bg-gray-200 hover:scale-105" 
        @click="modalPicture[8].toggle = true"
      ></div>
      <div class=" py-4">
        <div class="lg:text-4xl md:text-3xl sm:text-2xl text-md font-bold">
          <h1>BADMINTON FACILITY</h1>
        </div>
        <p class="sm:text-2xl py-5">
          The following drawing is created using AutoCAD. I self taught AutoCAD by taking an online course. After I learned the basics, I decided to design a sports facility as a practice project. The following badminton facility floor plan includes a reception room, change room, store, kitchen, bathroom, cafeteria, and badminton courts. Because of my mechanical engineering background, I designed the HVAC and plumbing system.
          <br>
          <br>
          There is still a lot for me to learn, since these drawings are by no means perfect. I tried to incorporate as many codes and standards as I can, but there is still lots of room for improvement.
        </p>
      </div>
    </div>
    <div class="my-5 lg:px-12 lg:mx-0 md:mx-24 mx-5">
      <div class="lg:text-4xl md:text-3xl sm:text-2xl text-md font-bold">
        <h1>HVAC SYSTEM</h1>
      </div>
      <p class="sm:text-2xl py-5">
        I first determined the air flow rate required for a standard large facility, and I sized the diameter of the HVAC ducts according the air flow rate requirements. The material of the air ducts are chosen to be galvanized steel. The central HVAC unit was decided to be placed on the roof of the building. The HVAC system delivers air to all rooms and facilities. A drawing of the rooms and HVAC system is displayed below.
      </p>
    </div>
    <div class="grid lg:grid-cols-2 lg:mx-0 md:mx-24 mx-5 pb-12">
      <div 
        class="bg-gray-100 cursor-pointer relative box-height b2 mt-4 mx-5 h-96 bg-no-repeat bg-center bg-cover transition-all transform hover:bg-gray-200 hover:scale-105" 
        @click="modalPicture[9].toggle = true"
      ></div>
      <div 
        class="bg-gray-100 cursor-pointer relative box-height b3 mt-4 mx-5 h-96 bg-no-repeat bg-center bg-cover transition-all transform hover:bg-gray-200 hover:scale-105" 
        @click="modalPicture[10].toggle = true"
      ></div>
    </div>
    <div class="my-5 lg:px-12 lg:mx-0 md:mx-24 mx-5">
      <div class="lg:text-4xl md:text-3xl sm:text-2xl text-md font-bold">
        <h1>PLUMBING SYSTEM</h1>
      </div>
      <p class="sm:text-2xl py-5">
        The plumbing system was created by sizing the hot and cold water pipes. I first determined the fixture units required for each plumbing equipment. I sized the hot and cold water pipes to deliver the required fixture units facuets, urinals, toilets and water fountains. The cold water is recieved from outside the building. The cold water is then ran through a boiler for the hot water pipes.
      </p>
    </div>
    <div class="grid lg:grid-cols-2 lg:mx-0 md:mx-24 mx-5 pb-12">
      <div 
        class="bg-gray-100 cursor-pointer relative box-height b4 mt-4 mx-5 h-96 bg-no-repeat bg-center bg-cover transition-all transform hover:bg-gray-200 hover:scale-105" 
        @click="modalPicture[11].toggle = true"
      ></div>
      <div 
        class="bg-gray-100 cursor-pointer relative box-height b5 mt-4 mx-5 h-96 bg-no-repeat bg-center bg-cover transition-all transform hover:bg-gray-200 hover:scale-105" 
        @click="modalPicture[12].toggle = true"
      ></div>
    </div>
  </div>
  <!-- END autocad -->
  <!-- remote control vehicle -->
  <div class="mx-5 mb-96">
    <h1 class="text-center text-5xl font-bold pb-12">REMOTE CONTROL VEHICLE</h1>
    <div class="grid lg:grid-cols-2 lg:mx-0 md:mx-24 mx-5 pb-12">
      <div 
        class="bg-gray-100 cursor-pointer relative box-height carfront mt-4 mx-5 h-96 bg-no-repeat bg-center bg-cover transition-all transform hover:bg-gray-200 hover:scale-105" 
        style="border-radius:75px"
        @click="modalPicture[0].toggle = true"
      ></div>
      <div 
        class="bg-gray-100 cursor-pointer relative box-height cariso mt-4 mx-5 h-96 bg-no-repeat bg-center bg-cover transition-all transform hover:bg-gray-200 hover:scale-105" 
        style="border-radius:75px"
        @click="modalPicture[1].toggle = true"
      ></div>
    </div>
    <div class="my-5 px-12" style="border-radius:75px">
      <div class="pb-5 lg:text-4xl md:text-3xl sm:text-2xl text-md font-bold">
        <h1>MODELED WITH SOLIDWORKS</h1>
        <h1>DESIGNED PARTS AND ASSEMBLY</h1>
        <h1>PRODUCED ENGINEERING DRAWINGS</h1>
        <h1>MANUFACTURED AND ASSEMBLED THE VEHICLE</h1>
      </div>
      <p class="sm:text-2xl">The remote control vehicle is created to traverse through an obstacle course using a remote control. The obstacle course has multiple challenges that the robot must bypass. In the first challenge, the vehicle must travel up a 30° incline and over pits filled with artificial grass, sandpaper and marbles; This is a timed section, and if there is a tie breaker needed, the fastest time in this section will be awarded the win. The second challenge requires the vehicle to move a rectangular block into a hole. Once pushed into the hole, a switch is activated commencing the start of the third challenge. A foam block decorated as a boulder comes rolling down a ramp located. The bonus stage requires the vehicle to fall into a hole at the end of the ramp the “boulder” had just come from with diameter of 9”. The vehicle requires the fastest time, as well as being efficiently traverse different materials with different coefficients of friction. The biggest challenge will be to design a driving system that will allow the vehicle to climb ramp rapidly and maneuver the block into the hole.</p>
    </div>
  </div>
  <!-- END remote control vehicle -->
  <!-- pasta -->
  <div class="mx-5 mb-96">
    <h1 class="text-center text-5xl font-bold pb-12">PASTA MAKER</h1>
    <div class="grid lg:grid-cols-2 lg:mx-0 md:mx-24 mx-5 my-12">
      <div 
        class="bg-gray-100 relative pasta-height pasta1 mx-5 h-96 bg-no-repeat bg-center bg-cover transition-all transform hover:bg-gray-200 hover:scale-105" 
        style="border-radius:75px"
        @click="modalPicture[2].toggle = true"
      ></div>
      <div class="mx-5">
        <div class="pb-5 lg:text-4xl md:text-3xl sm:text-2xl text-md font-bold">
          <h1>GEAR ANALYSIS</h1>
          <h1>SOLID MODELING</h1>
          <h1>FINITE ELEMENT ANALYSIS</h1>
        </div>
        <p class="sm:text-2xl">This pasta maker has two main rotating components: a mixing blade and a screw, each powered by a separate motor. During the mixing stage, the mixing blade creates dough, while the screw rotates in reverse, sending the dough back into the mixing compartment. After the dough is ready, the screw reverses direction, pushing the pasta out of an interchangeable nozzle. A potential additional feature, not included in the solid model, is a rotating cutting blade attached to the outside of the nozzle, powered by the mixing blade shaft. The cutting blade angular speed will determine the length of the pasta, while the nozzle type will determine the pasta shape. 
        </p>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 my-12 lg:mx-0 md:mx-24 mx-5">
      <div class="mx-5">
        <div class="pb-5 lg:text-4xl md:text-3xl sm:text-2xl text-md font-bold text-right">
          <h1>SIZED MOTORS</h1>
          <h1>GEAR REDUCTION</h1>
          <h1>FORCE CALUCATIONS</h1>
        </div>
        <p class="sm:text-2xl">The piston design will require the user to insert pre-made dough into the cylinder. The device uses a motor to drive a crank mechanism that generates enough force to push the dough out of the nozzle. The nozzle is interchangeable, allowing for more variety of pasta. After the piston extends to maximum length, it will return to its original position to repeat the process. The piston design is simple to maintain due to less moving parts.</p>
      </div>
      <div 
        class="bg-gray-100 relative pasta-height pasta2 mt-4 mx-5 h-96 bg-no-repeat bg-center bg-cover transition-all transform hover:bg-gray-200 hover:scale-105" 
        style="border-radius:75px"
        @click="modalPicture[3].toggle = true"
      ></div>
    </div>
  </div>
  <!-- END pasta -->
  <!-- wheelchair -->
  <div class="mx-5 pb-20">
    <h1 class="text-center text-5xl font-bold pb-12">WHEELCHAIR ERGOMETER</h1>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 mx-5 mb-8">
      <div 
        class="we1 cursor-pointer we-height mt-4 sm:mx-5 bg-no-repeat bg-center bg-cover transition-all transform hover:scale-105" 
        style="border-radius:75px"
        @click="modalPicture[4].toggle = true"
      ></div>
      <div 
        class="we2 cursor-pointer we-height mt-4 sm:mx-5 bg-no-repeat bg-center bg-cover transition-all transform hover:scale-105" 
        style="border-radius:75px"
        @click="modalPicture[5].toggle = true"
      ></div>
      <div 
        class="we3 cursor-pointer we-height mt-4 sm:mx-5 bg-no-repeat bg-center bg-cover transition-all transform hover:scale-105" 
        style="border-radius:75px"
        @click="modalPicture[6].toggle = true"
      ></div>
      <div 
        class="we4 cursor-pointer we-height mt-4 sm:mx-5 bg-no-repeat bg-center bg-cover transition-all transform hover:scale-105" 
        style="border-radius:75px"
        @click="modalPicture[7].toggle = true"
      ></div>
    </div>
    <div class="my-5 mx-2">
      <h1 class="text-4xl font-bold text-center mb-5">PROJECT PROPOSAL</h1>
      <p class="sm:text-2xl">
        We were contracted to design a lightweight, portable wheelchair ergometer. An ergometer is essentially a treadmill for a wheelchair. The client will use the ergometer, in a laboratory setting, to study the relationship between shoulder injuries and operating a wheelchair in everyday conditions. The client hopes to better understanding the biomechanics, which may lead to an insight to reduce injuries well using the wheelchair. The client requires the ergometer to simulate different environments using propulsion, resistance, slope adjustment, and independent wheelchair’s wheel movement. The given budget is $600.00 for materials and manufacturing. 
      </p>
    </div>
    <div 
      class="bg-gray-400 box-dim we7 my-12 bg-no-repeat bg-center bg-cover mx-auto rounded-3xl" 
    ></div>
    <div class="my-10 grid lg:grid-cols-2">
      <div class="my-5 mx-2">
        <h1 class="text-4xl font-bold text-center mb-5">ERGOMETER SPECS</h1>
        <p class="sm:text-2xl">
          The ergometer is capable of simulating 115 N of rolling resistance, and up to 15° of slope at 3° increments. The ergometer is easily portable as it is broken down into three pieces, two ergometers and one step. Each component is also equipped with wheels to improve portability. The final design’s total weight for all three pieces is 58.4 kg, with each ergometer weighing 18.5 kg and the step weighing 21.4 kg. Four cinching straps, attached to anchors on the platform, are used to secure the wheelchair in all directions. The center of gravity of the ergometer is designed to be low to the ground to reduce fall injuries and allow the wheelchair user to easily assess the ergometer.
        </p>
      </div>
      <div class="my-5 mx-2">
        <h1 class="text-4xl font-bold text-center mb-5">PROJECT COST</h1>
        <p class="sm:text-2xl">
          The cost of materials for the proposed design is $584.45, with an additional $400 for manufacturing. While this is over the given budget of $600 CAD, we minimized the cost where possible. Propulsion is excluded from the final design as it is unachievable if the client is trying to keep material costs as close to $600 as possible. We recommends the client revises the budget to $2500 in order to safely satisfy all the design specifications initially prescribed. The motor and gearbox assemblies are included in a future work section should the client receive a higher budget. 
        </p>
      </div>
    </div>
  </div>
  <!-- END wheelchair -->
</div>
</template>

<script>
import Banner from "../components/Banner";
import Modal from "../components/Modal";
export default {
  data(){
    return{
      modalOn: true,
      modalPicture:[
        {toggle:false, title: "Front View", picture:"carfront"},
        {toggle:false, title: "Isometric View", picture:"cariso"},
        {toggle:false, title: "Pasta Maker", picture:"pasta1"},
        {toggle:false, title: "Pasta Maker", picture:"pasta2"},
        {toggle:false, title: "Ergometer Ground", picture:"we1"},
        {toggle:false, title: "Ergometer Elevated", picture:"we2"},
        {toggle:false, title: "Stand FEA", picture:"we3"},
        {toggle:false, title: "Stand", picture:"we4"},
        {toggle:false, title: "Overview", picture:"b1"},
        {toggle:false, title: "Rooms", picture:"b2"},
        {toggle:false, title: "HVAC", picture:"b3"},
        {toggle:false, title: "Plumbing", picture:"b4"},
        {toggle:false, title: "Washroom", picture:"b5"},
      ],
      banner:{
        picture: "buildings",
        heading: "MODELING"
      },
    }
  },
  mounted(){
    window.addEventListener('resize',this.stopModal)
    window.scrollTo(0,0)
  },
  unmounted(){
    window.removeEventListener('resize',this.stopModal);
  },
  methods:{
    stopModal(){
      this.modalOn = window.innerWidth > 1024;
    }
  },
  components:{Banner, Modal}
}
</script>

<style>
.pasta-height{
  height:600px;
}
.we-height{
  height:250px;
}
.box-dim{
  height: 300px;
  width: 757.5px;
}
.modal-dim{
  height: 70vh;
  width: 80vw;
}
@media(max-width:820px){
  .box-dim{
    height: 200px;
    width: 505px;
  }
}
@media(max-width:550px){
  .box-dim{
    height: 150px;
    width: 378.75px;
  }
}
@media(max-width:1200px){
  .we-height{
  height:200px;
  }
}
@media(max-width:1024px){
  .pasta-height{
    height:400px;
  }
  .we-height{
  height:400px;
  }
}
@media(max-width:766px){
  .we-height{
  height:400px;
  }
}
</style>