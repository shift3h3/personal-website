<template>
<div class="" style="">
  <div class="h-full w-full bg-black" style="">
    <!-- years -->
    <div 
      class="fixed px-5 text-xl text-white font-bold top-1/2 right-0 z-10" style="transform:translateY(-50%)">
      <div 
        v-for="(year,index) in years" :key="year" 
        @click="changeSlide(index)" 
        :class="{'text-bondi-blue-500 transition-all transform scale-125': color === index}"
        class="my-2 cursor-pointer hover:text-bondi-blue-300"
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
          <h1 class="text-bondi-blue-500 text-md">Enrolled in</h1>
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
        <div class="text-md text-bondi-blue-500 top-2013-a">
          <h1>What I learned...</h1>
        </div>
        <div class="md:text-lg text-sm text-white w-10/12">
          <div class="my-5 left-2013-a">
            <h1 class="text-xl tracking-widest">PHYSCOLOGY</h1>
            <h1>Human Psychology, Brain and Behavior, Individual and Social Behavior, Behavior Modification, and Cognitive Psychology</h1>
          </div>
          <div class="my-5 left-2013-b">
            <h1 class="text-xl tracking-widest">BIOLOGY</h1>
            <h1>Cell Biology, Molecular Genetics and Heredity, Human Physiology, Cellular Neuroscience, and Functional Neuroanatomy</h1>
          </div>
          <div class="my-5 left-2013-c">
            <h1 class="text-xl tracking-widest">PHYSICS</h1>
            <h1>Particles, Fluids, Fields, Radiation, Waves Motion, Optics, and Sound</h1>
          </div>
          <div class="my-5 left-2013-d">
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
        <div class="text-white top-2014-a">
          <h1 class="text-md text-bondi-blue-500">I discovered my passion for</h1>
          <h1 class="text-xl">ENGINEERING AND COMPUTER SCIENCE</h1>
        </div>
        <div class="text-md text-white pt-5 left-2014-a">
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
        <h1 class="text-bondi-blue-500 top-2015-a">Enrolled in</h1>
        <div class="text-xl text-white ">
          <h1 class="left-2015-a">BACHELOR OF SCIENCE IN</h1>
          <h1 class="left-2015-b">MECHANICAL ENGINEERING</h1>
          <h1 class="left-2015-c">FACULTY OF ENGINEERING</h1>
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
        <div class="text-xl font-bold tracking-widest text-white top-2016-a">
          <h1>WHAT I LEARNED</h1>
        </div>
        <div class="sm:text-md text-xs text-white pt-10 tracking-widest">
          <h1 class="left-2016-a">STATISTICS</h1>
          <h1 class="left-2016-b">MATERIAL SCIENCE</h1>
          <h1 class="left-2016-c">ADVANCE CALCULUS</h1>
          <h1 class="left-2016-d">ENGINEERING ECONOMY</h1>
          <h1 class="left-2016-e">THERMO-FLUID SCIENCE</h1>
          <h1 class="left-2016-f">ENGINEERING MECHANICS</h1>
          <h1 class="left-2016-g">DIFFERENTIAL EQUATIONS</h1>
          <h1 class="left-2016-h">ENGINEERING THERMODYNAMICS</h1>
          <h1 class="left-2016-i">MECHANICS DEFORMABLE BODIES</h1>
          <h1 class="left-2016-j">FUNDAMENTALS OF ELECTRICAL ENGINEERING</h1>
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
        <h1 class="text-bondi-blue-500 top-2017-a">Worked at</h1>
        <div class="text-white tracking-widest top-2017-b">
          <h1 class="font-bold text-xl">UNIVERSITY OF ALBERTA</h1>
          <h1 class="text-sm">DEPARTMENT OF ENVIRONMENT, HEALTH, AND SAFETY</h1>
          <h1 class="text-lg"></h1>
        </div>
        <div class="text-md text-white pt-10">
          <h1 class="left-2017-a">Inspected machinery equipment in laboratories.</h1>
          <h1 class="left-2017-b">Implemented strategies for machinery equipment maintenance.</h1>
          <h1 class="left-2017-c">Conducted safety inspections to make sure lab workers are working safely.</h1>
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
        <h1 class="text-bondi-blue-500 top-2018-a">Worked at</h1>
        <div class="text-white tracking-widest top-2018-b">
          <h1 class="font-bold text-xl">GOVERNMENT OF CANADA</h1>
          <h1 class="text-sm">DEPARTMENT OF NATIONAL DEFENSE</h1>
          <h1 class="text-lg"></h1>
        </div>
        <div class="text-md text-white pt-10">
          <h1 class="left-2018-a">Designed a waste liquid disposal system.</h1>
          <h1 class="left-2018-b">Created specifications for building upgrades.</h1>
          <h1 class="left-2018-c">Conducted research on renewable energy.</h1>
          <h1 class="left-2018-d">Managed a solar farm project.</h1>
          <h1 class="left-2018-e">Conducted cost analysis on various projects.</h1>
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
        <h1 class="text-bondi-blue-500 top-2019-a">Worked at</h1>
        <div class="text-white tracking-widest top-2019-b">
          <h1 class="font-bold text-xl">SYNCRUDE CANADA</h1>
          <h1 class="text-sm">DEPARTMENT OF UTILITIES AND OFFSITE</h1>
          <h1 class="text-lg"></h1>
        </div>
        <div class="text-md text-white pt-10">
          <h1 class="left-2019-a">Determined the root cause for machinery failure.</h1>
          <h1 class="left-2019-b">Provided field support and onsite troubleshooting</h1>
          <h1 class="left-2019-c">Created engineering packages for filter replacement</h1>
          <h1 class="left-2019-d">Conducted vibration and oil sample tests for equipments</h1>
          <h1 class="left-2019-e">Recommend changes to prevent future machinery failures</h1>
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
        <div class="text-xl font-bold text-white tracking-widest top-2020-a">
          <h1>GRADUATED 2020</h1>
          <h1>WHAT I LEARNED</h1>
        </div>
        <div class="sm:text-md text-xs text-white tracking-widest pt-10">
            <h1 class="left-2020-a">MATLAB</h1>
            <h1 class="left-2020-b">SOLIDWORKS</h1>
            <h1 class="left-2020-c">HEAT TRANSFER</h1>
            <h1 class="left-2020-d">FLUID MECHANICS</h1>
            <h1 class="left-2020-e">NUMERICAL METHODS</h1>
            <h1 class="left-2020-f">VIBRATIONS AND SOUND</h1>
            <h1 class="left-2020-g">STRENGTH OF MATERIALS</h1>
            <h1 class="left-2020-h">FINITE ELEMENT ANALYSIS</h1>
            <h1 class="left-2020-i">MECHANICS OF MACHINES</h1>
            <h1 class="left-2020-j">ADVANCE BOUNDARY VALUE</h1>
            <h1 class="left-2020-k">MECHANICAL MEASUREMENTS</h1>
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
        <div class="text-xl tracking-widest text-white top-2021-a">
          <h1>STARTED MANY PERSONAL PROJECTS</h1>
        </div>
        <div class="text-md text-white pt-10">
          <h1 class="left-2021-a">I learned AutoCAD and created floor plan, HVAC, and plumbing drawings</h1>
          <h1 class="left-2021-b">I wrote programs using Python for data analysis and  web-scrapping</h1>
          <h1 class="left-2021-c">I learned HTML, CSS, JavaScript, Vue.js, Django, and SQL for web design</h1>
        </div>
      </div>
    </div>
    <!-- END slide 2021 -->



  </div>


</div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import $ from "jquery";
import {mapGetters, mapActions} from "vuex";
gsap.registerPlugin(ScrollTrigger);
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
    this.fromTop('.top-2013-a')
    this.fromLeft('.left-2013-a')
    this.fromLeft('.left-2013-b')
    this.fromLeft('.left-2013-c')
    this.fromLeft('.left-2013-d')

    this.fromTop('.top-2014-a')
    this.fromLeft('.left-2014-a')

    this.fromTop('.top-2015-a')
    this.fromLeft('.left-2015-a')
    this.fromLeft('.left-2015-b')
    this.fromLeft('.left-2015-c')

    this.fromTop('.top-2016-a')
    this.fromLeft('.left-2016-a')
    this.fromLeft('.left-2016-b')
    this.fromLeft('.left-2016-c')
    this.fromLeft('.left-2016-d')
    this.fromLeft('.left-2016-e')
    this.fromLeft('.left-2016-f')
    this.fromLeft('.left-2016-g')
    this.fromLeft('.left-2016-h')
    this.fromLeft('.left-2016-i')
    this.fromLeft('.left-2016-j')

    this.fromTop('.top-2017-a')
    this.fromTop('.top-2017-b')
    this.fromLeft('.left-2017-a')
    this.fromLeft('.left-2017-b')
    this.fromLeft('.left-2017-c')

    this.fromTop('.top-2018-a')
    this.fromTop('.top-2018-b')
    this.fromLeft('.left-2018-a')
    this.fromLeft('.left-2018-b')
    this.fromLeft('.left-2018-c')
    this.fromLeft('.left-2018-d')
    this.fromLeft('.left-2018-e')

    this.fromTop('.top-2019-a')
    this.fromTop('.top-2019-b')
    this.fromLeft('.left-2019-a')
    this.fromLeft('.left-2019-b')
    this.fromLeft('.left-2019-c')
    this.fromLeft('.left-2019-d')
    this.fromLeft('.left-2019-e')

    this.fromTop('.top-2020-a')
    this.fromLeft('.left-2020-a')
    this.fromLeft('.left-2020-b')
    this.fromLeft('.left-2020-c')
    this.fromLeft('.left-2020-d')
    this.fromLeft('.left-2020-e')
    this.fromLeft('.left-2020-f')
    this.fromLeft('.left-2020-g')
    this.fromLeft('.left-2020-h')
    this.fromLeft('.left-2020-i')
    this.fromLeft('.left-2020-j')
    this.fromLeft('.left-2020-k')

    this.fromTop('.top-2021-a')
    this.fromLeft('.left-2021-a')
    this.fromLeft('.left-2021-b')
    this.fromLeft('.left-2021-c')
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
    fromTop: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "0 80%",
          end: "+=600",
          toggleActions: "play none none none",
        },
        duration: 0.5,
        yPercent:-50,
        opacity:0,
      })    
    },
    fromLeft: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "0 80%",
          end: "+=600",
          toggleActions: "play none none none",
        },
        duration:0.5,
        xPercent:-50,
        opacity:0,
      })    
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