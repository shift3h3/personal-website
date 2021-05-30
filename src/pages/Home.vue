<template>
<!-- first main container -->
<div class="md:pb-48">
  <!-- white -->
  <div 
    class="mx-auto bg-gradient-to-b from-white via-gray-300 to-white" 
  >
    <!-- carousel -->
    <div class="mb-28">
      <Carousel :data-sliders="sliders"/>
    </div>
    <!-- end carousel -->
    <!-- about -->
    <div id="about" class="h-32"></div>
    <h1 class="sm:text-8xl text-6xl font-bold text-center text-gray-700 pb-12">
      ABOUT
    </h1>
    <div class="mb-28">
      <Text :data-text-info="textAbout" />
    </div>
    <!-- END about -->
    <!-- about slider -->
    <div id="overview" class="h-32"></div>
    <CarouselAbout :data-carousel="carouselContents" />
    <!-- END about slider -->
  </div>
  <!-- END white -->
</div>
<!-- END first main container -->
<!-- second main container -->
<div class="bg-black md:py-48 py-0">
  <!-- black -->
  <div 
    class="mx-auto bg-gradient-to-b from-black via-gray-900 to-black"
  >
    <!-- experiences -->
    <div id="career" class="md:h-32 h-24"></div>
    <div>
      <div class="text-center text-white pt-16 ">
        <h1 class="text-bondi-blue-500">Career and Professional Work</h1>
        <h1 class="sm:text-7xl text-4xl mx-auto mb-20">EXPERIENCES</h1>
      </div>
      <div class="overflow-x-hidden">
        <Hexagon />
      </div>
    </div>
    <!-- END experiences -->
    <div id="project" class="h-32"></div>
    <!-- projects -->
    <!-- text -->
    <h1 class="text-bondi-blue-500 text-center md:mx-5 mx-12">Design and Programming</h1>
    <div class="grid md:grid-cols-2 text-white">
      <router-link to="/modeling">
        <div class="transition-all duration-500 hover:text-blue-200 cursor-pointer">
          <h1 class="md:text-right text-center sm:text-7xl text-4xl font-bold md:mx-5 mx-12">DESIGN</h1>
          <h1 class="md:text-right text-center sm:text-5xl text-2xl md:mx-5 mx-12" v-for="content in designContent" :key="content">
            {{content.title}}
          </h1>
          <div class="pt-12 md:text-center md:ml-12 md:mr-5 mx-12" v-for="content in designContent" :key="content">
            <h1 class="sm:text-2xl text-xl font-bold md:text-right text-center">{{content.title}}</h1>
            <p v-for="sentence in content.text" :key="sentence" class="text-lg md:text-right text-center">{{sentence}}</p>
          </div>
        </div>
      </router-link>
      <router-link to="programming">
        <div class="md:mt-0 mt-12 mb-24 md:border-l-2 md:border-white transition-all duration-500 hover:text-red-200 cursor-pointer">
          <h1 class="md:text-left sm:text-7xl text-center text-4xl font-bold md:mx-5 mx-12">CODING</h1>
          <h1 class="md:text-left text-center sm:text-5xl text-2xl md:mx-5 mx-12" v-for="content in codeContent" :key="content">
            {{content.title}}
          </h1>
          <div class="pt-12 md:text-center md:mr-12 md:ml-5 mx-12" v-for="content in codeContent" :key="content">
            <h1 class="sm:text-2xl md:text-left text-center text-xl font-bold">{{content.title}}</h1>
            <p v-for="sentence in content.text" :key="sentence" class="text-lg md:text-left text-center">{{sentence}}</p>
          </div>
        </div>
      </router-link>
    </div>
    <!-- END text -->
    <!-- END projects -->
  </div>
  <!-- END black -->
</div>
<!-- END second main container -->
</template>

<script>
import Carousel from "../components/Carousel";
import Text from "../components/Text";
// import CardDropDown from "../components/CardDropDown";
import Hexagon from "../components/Hexagon";
import CarouselAbout from "../components/CarouselAbout";
export default {
  data() {
    return {
      randomVariable: 0,
      designPic: {
        title:"DESIGN",
        picture:"canada",
      },
      programPic: {
        title:"PROGRAMING",
        picture:"projects",
      },

      textAbout:{
        headings: ['MECHANICAL', 'ENGINEER', 'IN TRAINING'],
        texts: [
          "Hi there! I’m Michael He, an EIT who graduated from University of Alberta.",
          "I’m continually learning and always excited to apply my degree in mechanical engineering to solve real world problems. This is my personal website, where I showcase my engineering knowledge as well as programming experience. This website was made using html/css/js, using vue.js.",
        ]

      },
      sliders: [
        {
          picture:"star", 
          link:"#overview", 
          title:"MICHAEL HE",
          text:"MECHANICAL ENGINEER IN TRAINING",
        },
        {
          picture:"book", 
          link:"#about", 
          title:"ABOUT",
          text:"INNOVATIVE | ADAPTIVE | CURIOUS",
        },
        {
          picture:"industry", 
          link:"#career", 
          title:"CAREER",
          text:"READY TO TAKE ON ANY CHALLENGE",
        },
        {
          picture:"computer", 
          link:"#project", 
          title:"PROJECTS",
          text:"DESIGNING AND PROGRAMMING",
        },
        
      ],
      carouselContents: [
        {
          show: 0,
          heading: "EDUCATION",
          picture: "abstract2",
          texts: [
            "I graduated from University of Alberta in 2020 with a Bachelor of Science in Mechanical Engineering, Faculty of Engineering.",
            "Prior to my Engineering degree, I enrolled in Neuroscience at the University of Alberta.",
          ]
        },
        {
          show: 1,
          heading: "VOLUNTEERING",
          picture: "abstract3",
          texts: [
            'As the Volunteer Coordinator for a student-organized university club, I managed a team of volunteers to help with organizing events.',
            'I tutored junior high and high school math as an independent tutor.',
            'I hosted a booth to promote workplace safety for a University of Alberta event.',
            'I participated and volunteered at the Alberta Student Leadership Summit.',

          ]
        },
        {
          show: 2,
          heading: 'INTERESTS',
          picture: "abstract4",
          texts: [
            "I often snowboard in the mountains, I frequently climb, either bouldering or top roping, and I enjoy playing badminton leisurely and competitively.",
            "Overall, I enjoy working out and maintaining an active and healthy lifestyle; I am always open to trying new things.",
            "I maintain, fix, and repair my motorcycle as a hobby.",
          ]
        },
      ],
      designContent:[
        {
          title:"AUTOCAD",
          text: [
            "Designed building upgrade projects.",
            "Designed a liquid waste disposal system.",
            "Created a floor plan for a sport facility.", 
            "designed HVAC and plumbing system using AutoCAD.",
            "Designed electrical lines system for an emergency stop button.",
          ]
        },
        {
          title:"STAR-CCM",
          text: [
            "optimized the simulation to reduce computation time.", 
            "Modeled laminar and turbulent flow for liquids and air.",
          ]
        },
        {
          title:"SOLIDWORKS",
          text: [
            "Perform Finite Element Analysis.",
            "Design a remote-controlled vehicle for case competitions which was awarded first place.",
            "Design different assemblies as needed such as a wheelchair ergometer for university research groups.",


          ]
        },
      ],
      codeContent:[
        {
          title:"PYTHON",
          text: [
            "Web scraping/data collection.",
            "Conducted data analysis.",
            "Blog design with Django.",
            "HVAC and pipe sizing calculation scripts.",

          ]
        },
        {
          title:"JAVASCRIPT",
          text: [
            "Experienced with Node.js", 
            "Implementation with Vue.js for front end web development.",
            "Implementation with Express for back end web development.",

          ]
        },
        {
          title:"MATLAB",
          text: [
            "Developed algorithms to solve solid mechanics, heat transfer, and fluid flow problems.",
            "Solved math problems including linear and non-linear systems, regression, integration and differentiation, interpolation, and ordinary differential equations.",
            "Used MATLAB for math heavy calculations that required an iterative approach.",

          ]
        },
      ],
    };
  },
  mounted(){  
    window.addEventListener('resize', ()=> this.randomVariable++)
    window.scrollTo(0,0)
  },
  components: {Carousel, Text, Hexagon, CarouselAbout},
}
</script>
<style scoped>

</style>