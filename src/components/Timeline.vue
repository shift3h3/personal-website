<template>
<div class="relative mx-auto bg-gray-500">
  <div class="relative h-full w-full" style="height: 100vh;">
    <!-- years -->
    <div class="flex absolute text-white w-full bottom-10 justify-between px-10 text-xl font-bold z-20">
      <h1 
        v-for="(year,index) in years" :key="year"
        @click="changeSlide(index)" 
        :class="{'text-bondi-blue-500 transtition-all transform scale-125':index===reveal}"
        class="inline cursor-pointer hover:text-bondi-blue-300"
      >
        {{year}}
      </h1>
    </div>
    <!-- END years -->
    <!-- slides -->
    <div>
      <!-- slide 2012 -->
      <div 
        class="absolute w-full h-full hourglass opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 0}" 
        style="height:100vh;"
      >
        <div class="bg-black opacity-60" style="height:100vh"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
          <div class=" grid grid-cols-2 tracking-widest">
            <div class="text-right pr-4 border-r-2 border-white text-4xl font-bold">
              <h1>ENROLLED IN</h1>
              <h1>UNIVERSITY</h1>
              <h1>OF ALBERTA</h1>
            </div>
            <div class="pl-4 text-lg text-bondi-blue-500 font-medium">
              <h1>Faculty of Science</h1>
              <h1>BCs in Honors</h1>
              <h1>Neurosciences</h1>
            </div>
          </div>
          <h1 class="text-3xl text-center m-5" >Awards</h1>
          <div class="text-2xl text-center">
            <h1>Faculty of Science Academic Excellence Scholarship</h1>
            <h1>University of Alberta Academic Excellence Scholarship</h1>
            <h1>Univsersity of Alberta Undergraduate Academic Scholarship</h1>
          </div>
        </div>
      </div>
      <!-- END slide 2012 -->
      <!-- slide 2013 -->
      <div 
        class="absolute w-full h-full brain opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 1}" style="height:100vh;"
      >
        <div class="bg-black opacity-60" style="height:100vh"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
          <div class=" grid grid-cols-2">
            <!-- can put card.scale into insert-here for animation  -->
            <div 
              v-for="(card,index) in cardData" :key="card"
              class="relative m-3 transition-all duration-500 set-height"
              :class="[card.margin, showCard===index+1?'':'']"
              @mouseover="showCard=index+1"
              @mouseleave="showCard=0"
              style="height:25vh"
            >
              <div 
                class="absolute w-full h-full bg-black opacity-30 transition-all duration-500"
                :class="{'opacity-60':showCard===index+1}"
                style="border-radius:75px;"
              ></div>
              <div 
                class="absolute top-1/2 left-1/2 opacity-0 transition-all duration-500" 
                :class="{'opacity-100':showCard!=index+1}"
                style="transform:translate(-50%,-50%);"
              >
                <h1 class="w-full text-4xl tracking-widest">{{card.heading}}</h1>
              </div>
              <div 
                class="absolute top-1/2 left-1/2 opacity-0 w-full px-5 transition-all duration-500" 
                :class="{'opacity-100':showCard===index+1}"
                style="transform:translate(-50%,-50%)"
              >
                <div class="text-center tracking-widest">
                  <h1 v-for="text in card.text" :key="text" class="text-lg">{{text}}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END slide 2013 -->
      <!-- slide 2014 -->
      <div 
        class="absolute w-full h-full technology opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 2}" 
        style="height:100vh;"
      >
        <div class="bg-black opacity-70" style="height:100vh;"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
        <h1 class="text-4xl text-center m-5">I DISCOVERED MY PASSSION FOR ENGINEERING AND COMPUTER SCIENCE</h1>
          <div class=" grid grid-cols-2 text-bondi-blue-500">
            <h1 class="text-lg text-right px-5 border-r-2 border-bondi-blue-500">I taught myself how to program</h1>
            <h1 class="text-lg text-left px-5">Pursued a degree in Engineering.</h1>
          </div>
        </div>
      </div>
      <!-- END slide 2014 -->
      <!-- slide 2015 -->
      <div 
        class="absolute w-full h-full engineering opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 3}" 
        style="height:100vh;"
      >
        <div class="bg-black opacity-60" style="height:100vh;"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
        <h1 class="text-xl text-center m-5 text-bondi-blue-500">SWITCH TO...</h1>
        <h1 class="text-4xl text-center">BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING</h1>
        <h1 class="text-4xl text-center">FACULTY OF ENGINEERING</h1>
        </div>
      </div>
      <!-- END slide 2015 -->
      <!-- slide 2016 -->
      <div 
        class="absolute w-full h-full colorful opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 4}" 
        style="height:100vh;"
      >
        <div class="bg-black opacity-20" style="height:100vh;"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
          <h1 class="absolute text-6xl right-0 pr-10 font-bold">WHAT I LEARNED</h1>
          <div class="text-3xl tracking-widest">
            <h1>STATISTICS</h1>
            <h1>LINEAR ALGEBRA</h1>
            <h1>MATERIAL SCIENCE</h1>
            <h1>ADVANCE CALCULUS</h1>
            <h1>ENGINEERING ECONOMY</h1>
            <h1>THERMO-FLUID SCIENCE</h1>
            <!-- <h1>ENGINEERING MECHANICS</h1> -->
            <h1>DIFFERENTIAL EQUATIONS</h1>
            <!-- <h1>ENGINEERING THERMODYNAMICS</h1> -->
            <h1>MECHANICS DEFORMABLE BODIES</h1>
            <!-- <h1>FUNDAMENTALS OF ELECTRICAL ENGINEERING</h1> -->
          </div>
        </div>
      </div>
      <!-- END slide 2016 -->
      <!-- slide 2017 -->
      <div 
        class="absolute w-full h-full nature opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 5}" 
        style="height:100vh;"
      >
        <div class="bg-black opacity-40" style="height:100vh;"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
          <div class="grid grid-cols-2">
            <div class="text-right text-3xl px-5 tracking-widest">
              <h1 class="font-bold">WORKED AT</h1>
              <h1 class="font-bold">UNIVERSITY OF ALBERTA</h1>
              <h1 class="text-xl text-bondi-blue-500">DEPARTMENT OF</h1>
              <h1 class="text-xl text-bondi-blue-500">ENVIRONMENT, HEALTH, AND SAFETY</h1>
            </div>
            <div class="text-xl px-5">
              <h1>Inspected machinery equipment in laboratories.</h1>
              <h1>Implemented strategies for machinery equipment maintenance.</h1>
              <h1>Conducted safety inspections to make sure lab workers are working safely.</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- END slide 2017 -->
      <!-- slide 2018 -->
      <div 
        class="absolute w-full h-full canada opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 6}" 
        style="height:100vh;"
      >
        <div class="bg-black opacity-50" style="height:100vh;"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
          <div class="grid grid-cols-2">
            <div class="text-xl text-right px-5">
              <h1>Designed a waste liquid disposal system.</h1>
              <h1>Created specifications for building upgrades.</h1>
              <h1>Conducted research on renewable energy.</h1>
              <h1>Managed a solar farm project.</h1>
              <h1>Conducted cost analysis on various projects.</h1>
            </div>
            <div class="text-3xl px-5 tracking-widest">
              <h1 class="font-bold">WORKED AT</h1>
              <h1 class="font-bold">GOVERNMENT OF CANADA</h1>
              <h1 class="text-xl text-bondi-blue-500">DEPARTMENT OF</h1>
              <h1 class="text-xl text-bondi-blue-500">NATIONAL DEFENSE</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- END slide 2018 -->
      <!-- slide 2019 -->
      <div
        class="absolute w-full h-full oilgas opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 7}" 
        style="height:100vh;"
      >
        <div class="bg-black opacity-60" style="height:100vh;"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
          <div class="grid grid-cols-2">
            <div class="text-3xl text-right px-5 tracking-widest">
              <h1 class="font-bold">WORKED AT</h1>
              <h1 class="font-bold">SYNCRUDE CANADA LTD.</h1>
              <h1 class="text-xl text-bondi-blue-500">DEPARTMENT OF</h1>
              <h1 class="text-xl text-bondi-blue-500">UTILITIES AND OFF-SITE</h1>
            </div>
            <div class="text-xl px-5">
              <h1>Determined the root cause for machinery failure.</h1>
              <h1>Provided field support and onsite troubleshooting</h1>
              <h1>Created engineering packages for filter replacement</h1>
              <h1>Conducted vibration and oil sample tests for equipments</h1>
              <h1>Recommend changes to prevent future machinery failures</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- END slide 2020 -->
      <div 
        class="absolute w-full h-full graduation opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 8}" 
        style="height:100vh;"
      >
        <div class="bg-black opacity-20" style="height:100vh;"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
          <div class="absolute text-6xl font-bold">
            <h1>GRADUATED 2020</h1>
            <h1>I LEARNED... </h1>
            <h1></h1>
          </div>
          <div class="text-3xl text-right tracking-widest">
            <h1>MATLAB</h1>
            <h1>SOLIDWORKS</h1>
            <h1>HEAT TRANSFER</h1>
            <h1>FLUID MECHANICS</h1>
            <!-- <h1>NUMERICAL METHODS</h1> -->
            <h1>VIBRATIONS AND SOUND</h1>
            <h1>STRENGTH OF MATERIALS</h1>
            <h1>FINITE ELEMENT ANALYSIS</h1>
            <h1>MECHANICS OF MACHINES</h1>
            <!-- <h1>ADVANCE BOUNDARY VALUE</h1> -->
            <h1>MECHANICAL MEASUREMENTS</h1>
            <!-- <h1>THERMO-FLUID SYSTEM DESIGN</h1>
            <h1>SAFETY AND RISK MANAGEMENT </h1>
            <h1>FEEDBACK CONTROL DESIGN DYNAMIC SYSTEMS</h1> -->
          </div>
        </div>
      </div>
      <!-- END slide 2020 -->
      <!-- END slide 2021 -->
      <div 
        class="absolute w-full h-full computer opacity-0 bg-no-repeat bg-center bg-cover transition-all duration-500" 
        :class="{'opacity-100 z-10': reveal === 9}" 
        style="height:100vh;"
      >
        <div class="bg-black opacity-50" style="height:100vh;"></div>
        <div 
          class="absolute text-white w-full px-12 top-1/2 left-1/2" 
          style="transform:translate(-50%,-50%);"
        >
          <div class="text-2xl">
            <h1 class="text-4xl pb-5 tracking-widest font-bold">STARTED MANY PERSONAL PROJECTS</h1>
            <div class="tracking-widest">
              <h1>I learned AutoCAD and created floor plan, HVAC, and plumbing drawings</h1>
              <h1>I wrote programs using Python for data analysis and  web-scrapping</h1>
              <h1>I learned HTML, CSS, JavaScript, Vue.js, Django, and SQL for web design</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- END slide 2021 -->
    </div>
    <!-- END slides -->
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  data(){
    return{
      // reveal: 0,
      showCard: 0,
      cardData: [
        {
          heading:"PSYCHOLOGY",
          margin:"ml-36",
          scale: "transform scale-y-150 scale-x-125 -translate-y-14 -translate-x-14",
          text:["Human Psychology", "Brain and Behavior", "Individual and Social Behavior", "Behavior Modification", "Cognitive Psychology"]
        },
        {
          heading:"BIOLOGY",
          margin:"mr-36",
          scale: "transform scale-y-150 scale-x-125 -translate-y-14 translate-x-14",
          text:["Cell Biology", "Molecular Genetics and Heredity", "Human Physiology", "Cellular Neuroscience", "Functional Neuroanatomy"]
        },
        {
          heading:"PHYSICS",
          margin:"ml-36",
          scale: "transform scale-y-150 scale-x-125 translate-y-14 -translate-x-14",
          text:["Particles and Waves", "Fluids, Fields and Radiation", "Waves Motion, Optics, and Sound"]
        },
        {
          heading:"CHEMISTRY",
          margin:"mr-36",
          scale: "transform scale-y-150 scale-x-125 translate-y-14 translate-x-14",
          text:["Inorganic Chemistry", "Organic Chemistry", "Pharmacology", "Biochemistry"]
        },
      ],
      years:[2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
    }
  },
  mounted(){
  },
  unmounted(){
    this.changeSlide(0)
  },
  computed:{
    ...mapGetters(['reveal'])
  },
  methods: {
    ...mapActions(['changeSlide'])
  },

  components: {}
}
</script>

<style>
@media (min-width: 1600px){
  .set-height{
    height:300px !important;
  }
}
</style>