<template>
<!-- first main container -->
<div class="pb-48">
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
<div class="bg-black py-48">
  <!-- black -->
  <div 
    class="mx-auto bg-gradient-to-b from-black via-gray-900 to-black"
  >
    <!-- experiences -->
    <div id="career" class="h-32"></div>
    <div>
      <div class="text-center text-white pt-16 ">
        <h1 class="text-cusblue-500">Career and Professional Work</h1>
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
    <h1 class="text-cusblue-500 md:text-center md:mx-5 mx-12">Mechanical Design and Programming</h1>
    <div class="grid md:grid-cols-2 text-white">
      <router-link to="/modeling">
        <div class="transition-all duration-500 hover:text-blue-200 cursor-pointer">
          <h1 class="md:text-right sm:text-7xl text-3xl font-bold md:mx-5 mx-12">DESIGN</h1>
          <h1 class="md:text-right sm:text-5xl text-2xl md:mx-5 mx-12" v-for="content in designContent" :key="content">
            {{content.title}}
          </h1>
          <div class="pt-12 md:text-right md:ml-12 md:mr-5 mx-12" v-for="content in designContent" :key="content">
            <h1 class="sm:text-2xl text-xl font-bold">{{content.title}}</h1>
            <p class="text-lg md:text-justify">{{content.text}}</p>
          </div>
        </div>
      </router-link>
      <router-link to="programming">
        <div class="md:mt-0 mt-12 md:border-l-2 md:border-white transition-all duration-500 hover:text-red-200 cursor-pointer">
          <h1 class="text-left sm:text-7xl text-3xl font-bold md:mx-5 mx-12">CODING</h1>
          <h1 class="text-left sm:text-5xl text-2xl md:mx-5 mx-12" v-for="content in codeContent" :key="content">
            {{content.title}}
          </h1>
          <div class="pt-12 text-left md:mr-12 md:ml-5 mx-12" v-for="content in codeContent" :key="content">
            <h1 class="sm:text-2xl text-xl font-bold">{{content.title}}</h1>
            <p class="text-lg md:text-justify">{{content.text}}</p>
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
          "I am a diligent and hardworking individual who is looking to apply my knowledge and skills towards working in a team to deliver noteworthy and innovative programming and engineering services. This website is fully coded by myself with HTML, CSS, and Javascript. The front-end framework used is Vue.js.",
          "With the world becoming more technologically reliant, I want to apply my mechanical engineering and programming knowledge and skills in designing reliable products and implementing automation for design processes. Feel free to view the programming and modeling projects showcased on this website.",
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
      cardProjects: {
        mainHeading: "DESIGN",
        textHeading: "HIGHLIGHTS",
        picture:"projects",
        texts: [
          {
            textContent: "project project project test my name is Michael as it said on the titled. if you are reading this it must mean i told you to come look at it and show you what im about, so here i will give you a brief description of who i am and i hope you will hire me to some jobs"
          },
          {
            textContent: "project project project test i will display so that you can tell if something is good or not mainly the purpose of this paragraph is to determine how much space i have to work with before it looks weird."
          }
        ]
      },
      carouselContents: [
        {
          show: 0,
          heading:"INTRODUCTION",
          picture: "abstract1",
          texts: [
            "My name is Michael He, I am currently a Mechanical Engineer in Training. I have experience working for the private and public sectors. I worked for Syncrude Canada Ltd., where I inspected rotatary equipment and conducted loss investigations. I also worked for the Government of Canada as a researcher for green energy alternatives and a project coordinator.",
          ]
        },
        {
          show: 1,
          heading: "EDUCATION",
          picture: "abstract2",
          texts: [
            "I graduation from University of Alberta in 2020 with Bachelor of Science in Mechanical Engineering Faculty of Engineering.",
            "Prior to my Engineering degree, I enrolled in Neuroscience at the University of Alberta",
          ]
        },
        {
          show: 2,
          heading: "VOLUNTEERING",
          picture: "abstract3",
          texts: [
            'As the Volunteer Coordinator for a student-organized university club, I managed a team of volunteers to help with organizing events',
            'I tutored junior high and high school math',
            'I hosted a booth to promote workplace safety for a University of Alberta event',
            'I participated and volunteered at the Alberta Student Leadership Summit',

          ]
        },
        {
          show: 3,
          heading: 'INTERESTS',
          picture: "abstract4",
          texts: [
            "I often snowboard in the mountains, I frequently climb, either bouldering or top roping, and I enjoy playing badminton leisurely and competitively ",
            "Overall, I enjoy working out and maintaining an active and healthy lifestyle; I am always open to trying new things.",
            "I maintain, fix, and take apart my motorcycle for fun",
          ]
        },
      ],
      designContent:[
        {
          title:"AUTOCAD",
          text: "I used AutoCAD to design a few building upgrade project during my work term at Government of Canada. One project involves designing to piping system for a waste liquid disposal system. The second project is designing the electrical lines for an emergency stop button for a fueling station. I became interested in the software, so I decided to take an online course to farther my skills. I designed the floor plan for a sport facility using AutoCAD as a personal project. Along with the floor plan, I designed HVAC and plumbing system using AutoCAD."
        },
        {
          title:"STAR-CCM",
          text: "Star-CCM is a Finite Element Analysis (FEA) program. I learned to use Star-CCM during a university course where it went indepth about the theory behind FEA. I understand the best way to optimize the simulation, the best mesh to use for different situations, and different techniques to simulate different fluids flowing through unique circumstances. I learned how to model laminar and turbulent flow for liquids and air."
        },
        {
          title:"SOLIDWORKS",
          text: "I learned SolidWorks in University where I took a course dedicated to the subject. The course teaches all the necessary tools for designing parts and assemblies. The course also introduced best practice for drawings and annotation. I also used SolidWorks for FEA. During a University competition, my team designed a remote control vehicle using Solidworks. The parts and assembly drawings are made from Solidworks. We used the drawings to manufacture the vehicle which ultimately won the first place prize for the competition. I used SolidWorks in future projects such as designing a pasta maker and wheelchair ergometer for a research group at U of A."
        },
      ],
      codeContent:[
        {
          title:"MATLAB",
          text: "MATLAB was one of the first languages I was introduced too, which made in interested in programming as a whole. In school we learned how to use MATLAB extensively in one of the classes. I learned how to develop algorithms to solve solid mechanics, heat transfer, and fluid flow problems. I also Solved math problems including linear and non-linear systems, regression, integration and differentiation, interpolation, and ordinary differential equations. For personal use, I often use MATLAB for math heavy calculations that requires an iterative approach."
        },
        {
          title:"PYTHON",
          text: "Python is the first programming language that I became comfortable with. taught myself Python during my studies as a Mechanical Engineer. Over the years my skills in Python has developed dramatically. Some my skills include using Python for webscrapping, where I retrieve data from multiple webpages for data analysis. One example of websrapping is that i built a script that retrieve keyword searches from a website. I also scrapped Indeed to collect data on the jobs that i am interested in. I used Python's Panda package to conduct data analysis. I also used Python's Django web framework to design a blog website. I can also use python to write scripts to conduct engineering calculations. For example I designed a script that sizes HVAC ducts, pipes, and pump."
        },
        {
          title:"JAVASCRIPT",
          text: "I learned JavaScript for the purpose of web design. I also want to use web browsers as an interface for the other scripts that I wrote. I learned node.js, Vue web framework, and Express for backend coding. This website is designed fully by myself with Vue. I use JavaScript in conjunction with HTML and CSS to create responsive websites. If you are interested in creating a website, I can help with that."
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