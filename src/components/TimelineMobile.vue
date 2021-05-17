<template>
<div class="" style="">
  <div class="h-full w-full bg-black" style="">
    <!-- years -->
    <div 
      class="fixed px-5 text-xl text-white font-bold top-1/2 right-0 z-10" style="transform:translateY(-50%)">
      <div 
        v-for="(year,index) in years" :key="year" 
        @click="changeSlide(index)" 
        :class="{'text-cusblue-500 transition-all transform scale-125': color === index}"
        class="my-2 cursor-pointer hover:text-cusblue-300"
      >
        <a :href="'#'+year">{{year}}</a>
      </div>
    </div>
    <!-- END years -->
    <!-- slide 2012 -->
    <div 
      id="2012" 
      class="relative div-height hourglass bg-no-repeat bg-center bg-cover bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-50" style="height:100%"></div>
      <div class="absolute top-1/4 ml-5 mr-20" style="">
        <div class="tracking-widest">
          <h1 class="text-cusblue-500 text-md">Enrolled in</h1>
          <h1 class="font-bold text-xl text-white">UNIVERSITY OF ALBERTA</h1>
        </div>
        <div class="sm:text-lg text-sm text-white pt-5">
          <h1 class="font-bold tracking-widest">AWARDS</h1>
          <h1>Faculty of Science Academic Excellence Scholarship</h1>
          <h1>University of Alberta Academic Excellence Scholarship</h1>
          <h1>Univsersity of Alberta Undergraduate Academic Scholarship</h1>
        </div>
      </div>
    </div>
    <!-- END slide 2012 -->
    <!-- slide 2013 -->
    <div 
      id="2013" 
      class="relative brain bg-no-repeat bg-center bg-cover top-bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-50" style="height:100%"></div>
      <div class="absolute top-1/4 ml-5 mr-20" style="">
        <div class="text-md text-cusblue-500 ">
          <h1>What I learned...</h1>
        </div>
        <div class="md:text-lg text-sm text-white w-2/3">
          <div class="my-5">
            <h1 class="text-xl tracking-widest">PHYSCOLOGY</h1>
            <h1>Human Psychology, Brain and Behavior, Individual and Social Behavior, Behavior Modification, and Cognitive Psychology</h1>
          </div>
          <div class="my-5">
            <h1 class="text-xl tracking-widest">BIOLOGY</h1>
            <h1>Cell Biology, Molecular Genetics and Heredity, Human Physiology, Cellular Neuroscience, and Functional Neuroanatomy</h1>
          </div>
          <div class="my-5">
            <h1 class="text-xl tracking-widest">PHYSICS</h1>
            <h1>Particles, Fluids, Fields, Radiation, Waves Motion, Optics, and Sound</h1>
          </div>
          <div class="my-5">
            <h1 class="text-xl tracking-widest">CHEMISTRY</h1>
            <h1>Inorganic Chemistry, Organic Chemistry, Pharmacology, and Biochemistry</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- END slide 2013 -->
    <!-- slide 2014 -->
    <div 
      id="2014" 
      class="relative technology bg-no-repeat bg-center bg-cover top-bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-50" style="height:100%"></div>
      <div class="absolute top-1/3 ml-5 mr-20" style="">
        <div class="text-white ">
          <h1 class="text-md text-cusblue-500">I discovered my passion for</h1>
          <h1 class="text-xl">ENGINEERING AND COMPUTER SCIENCE</h1>
        </div>
        <div class="text-md text-white pt-5">
          <h1>I taught myself how to program</h1>
          <h1>Pursued a degree in Engineering.</h1>
        </div>
      </div>
    </div>
    <!-- END slide 2014 -->
    <!-- slide 2015 -->
    <div 
      id="2015" 
      class="relative engineering bg-no-repeat bg-center bg-cover top-bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-50" style="height:100%"></div>
      <div class="absolute top-1/3 ml-5 mr-20" style="">
        <h1 class="text-cusblue-500">Enrolled in</h1>
        <div class="text-xl text-white ">
          <h1>BACHELOR OF SCIENCE IN</h1>
          <h1>MECHANICAL ENGINEERING</h1>
          <h1>FACULTY OF ENGINEERING</h1>
        </div>
      </div>
    </div>
    <!-- END slide 2015 -->
    <!-- slide 2016 -->
    <div 
      id="2016" 
      class="relative colorful bg-no-repeat bg-center bg-cover top-bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-50" style="height:100%"></div>
      <div class="absolute top-1/4 ml-5 mr-20" style="">
        <div class="text-xl font-bold tracking-widest text-white ">
          <h1>WHAT I LEARNED</h1>
        </div>
        <div class="text-md text-white pt-10 tracking-widest">
          <h1>STATISTICS</h1>
          <h1>MATERIAL SCIENCE</h1>
          <h1>ADVANCE CALCULUS</h1>
          <h1>ENGINEERING ECONOMY</h1>
          <h1>THERMO-FLUID SCIENCE</h1>
          <h1>ENGINEERING MECHANICS</h1>
          <h1>DIFFERENTIAL EQUATIONS</h1>
          <h1>ENGINEERING THERMODYNAMICS</h1>
          <h1>MECHANICS DEFORMABLE BODIES</h1>
          <h1>FUNDAMENTALS OF ELECTRICAL ENGINEERING</h1>
        </div>
      </div>
    </div>
    <!-- END slide 2016 -->
    <!-- slide 2017 -->
    <div 
      id="2017" 
      class="relative nature bg-no-repeat bg-center bg-cover top-bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-50" style="height:100%"></div>
      <div class="absolute top-1/3 ml-5 mr-20" style="">
        <h1 class="text-cusblue-500">Worked at</h1>
        <div class="text-white tracking-widest">
          <h1 class="font-bold text-xl">UNIVERSITY OF ALBERTA</h1>
          <h1 class="text-sm">DEPARTMENT OF ENVIRONMENT, HEALTH, AND SAFETY</h1>
          <h1 class="text-lg"></h1>
        </div>
        <div class="text-md text-white pt-10">
          <h1>Inspected machinery equipment in laboratories.</h1>
          <h1>Implemented strategies for machinery equipment maintenance.</h1>
          <h1>Conducted safety inspections to make sure lab workers are working safely.</h1>
        </div>
      </div>
    </div>
    <!-- END slide 2017 -->
    <!-- slide 2018 -->
    <div 
      id="2018" 
      class="relative canada bg-no-repeat bg-center bg-cover top-bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-50" style="height:100%"></div>
      <div class="absolute top-1/3 ml-5 mr-20" style="">
        <h1 class="text-cusblue-500">Worked at</h1>
        <div class="text-white tracking-widest">
          <h1 class="font-bold text-xl">GOVERNMENT OF CANADA</h1>
          <h1 class="text-sm">DEPARTMENT OF NATIONAL DEFENSE</h1>
          <h1 class="text-lg"></h1>
        </div>
        <div class="text-md text-white pt-10">
          <h1>Designed a waste liquid disposal system.</h1>
          <h1>Created specifications for building upgrades.</h1>
          <h1>Conducted research on renewable energy.</h1>
          <h1>Managed a solar farm project.</h1>
          <h1>Conducted cost analysis on various projects.</h1>
        </div>
      </div>
    </div>
    <!-- END slide 2018 -->
    <!-- slide 2019 -->
    <div 
      id="2019" 
      class="relative oilgas bg-no-repeat bg-center bg-cover top-bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-60" style="height:100%"></div>
      <div class="absolute top-1/3 ml-5 mr-20" style="">
        <h1 class="text-cusblue-500">Worked at</h1>
        <div class="text-white tracking-widest">
          <h1 class="font-bold text-xl">SYNCRUDE CANADA</h1>
          <h1 class="text-sm">DEPARTMENT OF UTILITIES AND OFFSITE</h1>
          <h1 class="text-lg"></h1>
        </div>
        <div class="text-md text-white pt-10">
          <h1>Determined the root cause for machinery failure.</h1>
          <h1>Provided field support and onsite troubleshooting</h1>
          <h1>Created engineering packages for filter replacement</h1>
          <h1>Conducted vibration and oil sample tests for equipments</h1>
          <h1>Recommend changes to prevent future machinery failures</h1>
        </div>
      </div>
    </div>
    <!-- END slide 2019 -->
    <!-- slide 2020 -->
    <div 
      id="2020" 
      class="relative graduation bg-no-repeat bg-center bg-cover top-bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-50" style="height:100%"></div>
      <div class="absolute top-1/3 ml-5 mr-20" style="">
        <div class="text-xl font-bold text-white tracking-widest">
          <h1>GRADUATED 2020</h1>
          <h1>WHAT I LEARNED</h1>
        </div>
        <div class="text-md text-white tracking-widest pt-10">
            <h1>MATLAB</h1>
            <h1>SOLIDWORKS</h1>
            <h1>HEAT TRANSFER</h1>
            <h1>FLUID MECHANICS</h1>
            <h1>NUMERICAL METHODS</h1>
            <h1>VIBRATIONS AND SOUND</h1>
            <h1>STRENGTH OF MATERIALS</h1>
            <h1>FINITE ELEMENT ANALYSIS</h1>
            <h1>MECHANICS OF MACHINES</h1>
            <h1>ADVANCE BOUNDARY VALUE</h1>
            <h1>MECHANICAL MEASUREMENTS</h1>
            <!-- <h1>THERMO-FLUID SYSTEM DESIGN</h1>
            <h1>SAFETY AND RISK MANAGEMENT </h1>
            <h1>FEEDBACK CONTROL DESIGN DYNAMIC SYSTEMS</h1> -->
        </div>
      </div>
    </div>
    <!-- END slide 2020 -->
    <!-- slide 2021 -->
    <div 
      id="2021" 
      class="relative computer bg-no-repeat bg-center bg-cover top-bot-shadow" 
      style="height:135vh;"
    >
      <div class="aboslute bg-black opacity-50" style="height:100%"></div>
      <div class="absolute top-1/3 ml-5 mr-20" style="">
        <div class="text-xl tracking-widest text-white ">
          <h1>STARTED MANY PERSONAL PROJECTS</h1>
        </div>
        <div class="text-md text-white pt-10">
          <h1>I learned AutoCAD and created floor plan, HVAC, and plumbing drawings</h1>
          <h1>I wrote programs using Python for data analysis and  web-scrapping</h1>
          <h1>I learned HTML, CSS, JavaScript, Vue.js, Django, and SQL for web design</h1>
        </div>
      </div>
    </div>
    <!-- END slide 2021 -->



  </div>


</div>
</template>

<script>
import $ from "jquery";
import {mapGetters, mapActions} from "vuex";
export default {
  data(){
    return{
      color: 0,
      years:[2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
    }
  },
  computed: {
      ...mapGetters(['reveal'])
  },
  mounted(){
    window.addEventListener('scroll',this.changeColor);
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    setTimeout(()=>{
      for (let i=0; i<3; i++){
        if(this.reveal === i+5){
          document.getElementById(`201${i+7}`).scrollIntoView({ behavior: 'smooth'});
        }
      }
    },100)
  },
  unmounted(){
    window.removeEventListener('scroll',this.changeColor);
    this.changeSlide(0)
  },
  methods: {
    changeColor(){
      let height = document.getElementById("2012").offsetHeight
      let scrollHeight = window.scrollY
      if (scrollHeight <= height){
        this.color = 0
      }
      for (let i=1; i<this.years.length; i++){
        if ((i)*height-20 < scrollHeight && scrollHeight <= (i+1)*height){
          this.color = i
        }
      }
    },
    ...mapActions(['changeSlide'])
  },

  components: {}
}
</script>

<style scoped>

.bot-shadow{
  box-shadow: inset 0px -850px 500px -550px black;
  border-bottom: 2px solid black;
}
.top-bot-shadow{
  box-shadow: inset 0px -850px 500px -550px black, inset 0px 850px 500px -550px black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
</style>