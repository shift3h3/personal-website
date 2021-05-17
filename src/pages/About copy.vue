<template>
<div class="bg-white pb-48">
  <!-- white -->
  <div 
    class="mx-auto bg-gradient-to-b from-white via-gray-300 to-white" 
    style="max-width:1600px; min-width:460px;"
  >
    <Banner :data-banner-info="banner" />
    <div class="grid grid-cols-2 mb-32">
      <div class="lg:text-7xl md:text-5xl sm:text-4xl text-3xl text-right font-bold px-5 text-gray-700 border-r-2 border-gray-700">
        <h1 v-for="topHeading in topHeadings[0]" :key="topHeading">{{topHeading}}</h1>
      </div>
      <div class="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold px-5 text-gray-700">
        <h1 v-for="topHeading in topHeadings[1]" :key="topHeading">{{topHeading}}</h1>
      </div>
    </div>
    <div class="mx-auto pb-32 text-gray-700 font-bold text-center lg:text-7xl md:text-5xl sm:text-4xl text-3xl">
      <h1>To succeed in</h1>
      <h1>a changing world</h1>
      <h1>we must be... </h1>
    </div>
    <div class="pb-32">
      <HexagonThree class="" />

    </div>
    <div>
      <h1 class="font-bold text-center text-7xl">ABOUT ME</h1>
      <CarouselAbout :data-carousel="carouselContents" />
    </div>
    <div class="grid md:grid-cols-2">
      <div class="">
        <h1 class="md:text-right text-7xl font-bold md:mx-5 mx-12">DESIGN</h1>
        <h1 class="md:text-right text-5xl font-bold md:mx-5 mx-12" v-for="content in designContent" :key="content">
          {{content.title}}
        </h1>
        <div class="pt-12 md:text-right md:ml-12 md:mr-5 mx-12" v-for="content in designContent" :key="content">
          <h1 class="text-2xl font-bold">{{content.title}}</h1>
          <p class="text-lg text-justify">{{content.text}}</p>
        </div>
      </div>
      <div class="md:border-l-2 md:border-black">
        <h1 class="text-left text-7xl font-bold md:mx-5 mx-12">CODING</h1>
        <h1 class="text-left text-5xl font-bold md:mx-5 mx-12" v-for="content in codeContent" :key="content">
          {{content.title}}
        </h1>

        <div class="pt-12 text-left md:mr-12 md:ml-5 mx-12" v-for="content in codeContent" :key="content">
          <h1 class="text-2xl font-bold">{{content.title}}</h1>
          <p class="text-lg text-justify">{{content.text}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Banner from "../components/Banner";
import CarouselAbout from "../components/CarouselAbout";
import HexagonThree from "../components/HexagonThree";
export default {
  data(){
    return {
      banner:{
        picture: "background1",
        heading: "ABOUT"
      },
      slideNumber: 0,
      topHeadings:[
        ["MICHAEL HE", "MECHANICAL", "ENGINEER", "IN TRAINING"],
        ["DESIGN &", "PROGRAM", "INNOVATIVE", "PRODUCTS"],
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
      carouselContents: [
        {
          show: 0,
          heading:"INTRODUCTION",
          picture: "background1",
          texts: [
            "some texts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt ea excepturi culpa exercitationem aspernatur. Commodi maxime magnam eligendi eos quo, fugit quas unde nam cum sequi nulla in nisi perspiciatis earum? Quia cupiditate",
            "some texts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt ea excepturi culpa exercitationem aspernatur. Commodi maxime magnam eligendi eos quo, fugit quas unde nam cum sequi nulla in nisi perspiciatis earum? Quia cupiditate",
            "some texts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt ea excepturi culpa",
          ]
        },
        {
          show: 1,
          heading: "EDUCATION",
          picture: "background2",
          texts: [
            "some texts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt ea excepturi culpa exercitationem aspernatur. Commodi maxime magnam eligendi eos quo, fugit quas unde nam cum sequi nulla in nisi perspiciatis earum? Quia cupiditate",
            "some texts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt ea excepturi culpa exercitationem aspernatur. Commodi maxime magnam eligendi eos quo, fugit quas unde nam cum sequi nulla in nisi perspiciatis earum? Quia cupiditate",
          ]
        },
        {
          show: 2,
          heading: "VOLUNTEERING",
          picture: "background3",
          texts: [
            "some texts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt ea excepturi culpa exercitationem aspernatur. Commodi maxime magnam eligendi eos quo, fugit quas unde nam cum sequi nulla in nisi perspiciatis earum? Quia cupiditate",
          ]
        },
        {
          show: 3,
          heading: 'INTERESTS',
          picture: "background4",
          texts: [
            "some texts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt ea excepturi culpa exercitationem aspernatur. Commodi maxime magnam eligendi eos quo, fugit quas unde nam cum sequi nulla in nisi perspiciatis earum? Quia cupiditate",
            "some texts Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt ea excepturi culpa exercitationem aspernatur. Commodi maxime magnam eligendi eos quo, fugit quas unde nam cum sequi nulla in nisi perspiciatis earum? Quia s Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt ea excepturi culpa exercitationem aspernatur. Commodi maxime magnam eligendi eos quo, fugit quas unde nam cum sequi nulla in nisi perspiciatis earum? Quiacupiditate",
          ]
        },
      ]
    }
  },
  components: {Banner, CarouselAbout, HexagonThree}
}
</script>

<style>

</style>