<template>
<div class="bg-white pb-48">
  <!-- white -->
  <div 
    class="mx-auto bg-gradient-to-b from-white via-gray-300 to-white" 
    style="max-width:1600px; min-width:460px;"
  >
    <!-- carousel -->
    <div class="mb-32">
      <Carousel :data-sliders="sliders"/>
      <div class="text-center text-lg ">
        <p>To whom that is reading this</p>
        <p>I am writing a message to you so pay attention</p>
        <p>I just wanted to say hi</p>
        <p>now continue</p>
      </div>
    </div>
    <!-- end carousel -->
    <!-- about -->
    <h1 class="text-8xl font-bold text-center text-gray-700 pb-12">
      ABOUT
    </h1>
    <div class="mb-48">
      <Text :data-text-info="textAbout" />
    </div>
    <!-- END about -->
    <!-- education -->
    <div class="">
      <CardDropDown :data-card-info="cardEducation" />
    </div>
    <!-- END education -->
  </div>
  <!-- END white -->
</div>
  <!-- black -->
<div class="bg-black py-48" style=" min-width:460px;">
  <div 
    class="mx-auto bg-gradient-to-b from-black via-gray-900 to-black"
    style="max-width:1600px; min-width:460px;"
  >
    <!-- experiences -->
    <div class="mb-32">
      <div class="text-center text-white pt-16 mb-20">
        <h1 class="text-cusblue-500">CAREER AND PROFESSIONAL WORK</h1>
        <h1 class="sm:text-8xl text-7xl mx-auto">EXPERIENCES</h1>
      </div>
      <Collage :key="randomVariable" :data-collage-info="collages" />
      <div class="text-center text-white mx-10 text-2xl pb-32">
        <p>Hello everyone here i will let you know a little bit about my work experiences in different places Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, adipisci quis atque cumque ipsum molestias nobis necessitatibus veritatis eveniet, aut velit reiciendis nesciunt voluptatibus asperiores.</p>
      </div>
      <div class="grid md:grid-cols-2 text-white text-center py-10 cursor-pointer transition-all duration-250 transform hover:scale-105 hover:text-cusblue-500">
        <div class="lg:text-3xl md:text-right">
          <h1>Utilities and Off-site</h1>
          <h1>Machinery Engineering co-op Student</h1>
        </div>
        <h1 class="lg:text-7xl text-5xl md:text-left mx-5">SYNCRUDE CANADA LTD.</h1>
      </div>
      <div class="grid md:grid-cols-2 text-white text-center py-10 cursor-pointer transition-all duration-250 transform hover:scale-105 hover:text-cusblue-500">
        <div class="lg:text-3xl md:text-right">
          <h1>Department of National Defense</h1>
          <h1>Green Energy Analyst / Project Coordinator</h1>
        </div>
        <h1 class="lg:text-7xl text-5xl md:text-left mx-5 cursor-pointer">GOVERNMENT OF CANADA</h1>
      </div>
      <div class="grid md:grid-cols-2 text-white text-center py-10 cursor-pointer transition-all duration-250 transform hover:scale-105 hover:text-cusblue-500">
        <div class="lg:text-3xl md:text-right">
          <h1>Environment, Health, and Safety</h1>
          <h1>Mechanical Engineering co-op Student</h1>
        </div>
        <h1 class="lg:text-7xl text-5xl md:text-left mx-5 cursor-pointer">UNIVERSITY OF ALBERTA</h1>
      </div>
    </div>
    <!-- END experiences -->
    <!-- projects -->
    <div class="text-center text-white pt-16">
      <h1 class="text-cusblue-500">MECHANICAL DESIGN AND PROGRAMMING</h1>
      <h1 class="sm:text-8xl text-7xl mx-auto">PROJECTS</h1>
    </div>
    <div class="grid md:grid-cols-2 my-10 mx-12">
      <PictureButton class="mb-8" :data-picture-info="designPic"/>
      <PictureButton class="mb-8" :data-picture-info="programPic"/>
    </div>
    <div class="text-white py-10 md:px-36 px-10 text-center text-2xl" style="">
      <p>Here i will tell you a little bit about what kind of design work i do Lorem ipsum dolor sit amet consectetur adipisicing eliaboriosam quod eius laudantium you a little bit about what kind of design work i do Lorem ipsum dolor sit amet consectetur adipisicing eliaboriosam quod eius laudantium quos, ex repellendus nam maiores. Dicta non ab hic fuga optio nemo consequuntur.</p>
    </div>
    <!-- END projects -->
  </div>
</div>
  <!-- END black -->

</template>

<script>
// import {mapGetters,mapActions} from "vuex";
import Carousel from "../components/Carousel";
import Text from "../components/Text";
import CardDropDown from "../components/CardDropDown";
import PictureButton from "../components/PictureButton";
import Collage from "../components/Collage";
// import CardPicText from "../components/CardPicTextNew";
// import FourSquares from "../components/FourSquaresNew";


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
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
      cardEducation:{
        picture: "education",
        mainHeading: "KNOWLEDGE AND SKILLS",
        subHeading: "UNIVERSITY OF ALBERTA",
        subSubHeading: "Bachelor of Science in Mechanical Engineering Faculty of Engineering",
        buttonOne: "DESIGN",
        buttonTwo: "CODING",
        mainText: 
          "MAIN text Design text im goin to add some more words so that i can see if things are changign in a weird way when i click on the btton hopefully i can figure out how to do the annimations maybe i might have to look at the old ones i made Design text im goin to add some more words so that i can see if things are changign in a weird way when i click on the btton hopefully i can figure out how to do the annimations maybe i might have to look at the old ones",
        buttonOneText: 
          "n a weird way when i click on the btton hopefully i can figure out how to do the annimations maybe i might have to look at the old ones i made Design text im goin to add some more words so that i can see if things are changign in a weird way when i click on the btton hopefully i can figure out how to do the annimations maybe i might have to look at the old ones",
        buttonTwoText: 
          "Program text Design text im goin to add some more words so that i can see if things are changign in a weird way when io look at the old ones"
      },
      textAbout:{
        headings: ["MICHAEL HE", 'MECHANICAL', 'ENGINEER', 'IN TRAINING'],
        texts: [
          "Lorem ipsum dolor sit amet conipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae ullam fugit nam accusamus nesciunt nobis repellendus a adipuipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae ullam fugit nam accusamus nesciunt nobis repellendus a adipusectetur adipisicing elit. Impedit enim debitis modi voluptatibus minima molliticabo consequuntur totam maiores placeat voluptate id, sit nesciunt illum sapiente quasi, vero tenetur sequi maxime ipsum asperiores.",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae ullam fugit nam accusamus nesciunt nobis repellendus a adipuaipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae ullam fugit nam accusamus nesciunt nobis repellendus adipuipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae ullam fugit nam accusamus nesciunt nobis repellendus a adipum!",
        ]

      },
      sliders: [
        {
          picture:"background1", 
          title:"MICHAEL HE",
          text:"Mechanical Engineer in Training",
        },
        {
          picture:"background2", 
          title:"ABOUT",
          text:"Looking for a job",
        },
        {
          picture:"background3", 
          title:"CAREER",
          text:"Ready for employment",
        },
        {
          picture:"background4", 
          title:"PROJECTS",
          text:"I code and design stuff",
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
      collages:[
        {
          picture: "background1",
          pictureClass: "left-1/2 el-top",
          pictureStyle: `transform:translate(-50%,0)`,
        },
        {
          picture: "background2",
          pictureClass: "left-1/4 top-1/4 el-top-left",
          pictureStyle: `transform:translate(-25%,-25%)`,
        },
        {
          picture: "background3",
          pictureClass: "left-3/4 top-1/4 el-top-right",
          pictureStyle: `transform:translate(-75%,-25%)`,
        },
        {
          picture: "background4",
          pictureClass: "left-0 top-1/2 el-top-left",
          pictureStyle: `transform:translate(0,-50%)`,
        },
        {
          picture: "education",
          pictureClass: "left-1/2 top-1/2 el-bot",
          pictureStyle: `transform:translate(-50%,-50%)`,
        },
        {
          picture: "uofa",
          pictureClass: "right-0 top-1/2 el-top-right",
          pictureStyle: `transform:translate(0,-50%)`,
        },
        {
          picture: "back",
          pictureClass: "left-1/4 top-3/4 el-bot-left",
          pictureStyle: `transform:translate(-25%,-75%)`,
        },
        {
          picture: "oilgas",
          pictureClass: "left-3/4 top-3/4 el-bot-right",
          pictureStyle: `transform:translate(-75%,-75%)`,
        },
        {
          picture: "canada",
          pictureClass: "left-1/2 bottom-0 el-bot",
          pictureStyle: `transform:translate(-50%,0)`,
        },
      ],
    };
  },
  mounted(){  
    window.addEventListener('resize', ()=> this.randomVariable++)
  },
  // computed: {
  //   ...mapGetters(['mobileView'])
  // },
  // methods: {
  //   ...mapActions(['beforeEnter'])
  // },
  components: {Carousel,CardDropDown, Text, PictureButton, Collage},
}
</script>
<style>
.background1{background-image:url("../assets/images/gears.jpg");}
.background2{background-image:url("../assets/images/lightbulb.jpg");}
.background3{background-image:url("../assets/images/industry.jpg");}
.background4{background-image:url("../assets/images/computer.jpg");}
.education{background-image:url("../assets/images/graduation.jpg");}
.uofa{background-image:url("../assets/images/ppe.jpg");}
.back{background-image:url("../assets/images/back.jpg");}
.projects{background-image:url("../assets/images/drawings.jpg");}
.oilgas{background-image:url("../assets/images/oilgas.jpg");}
.canada{background-image:url("../assets/images/canada.jpg");}



</style>