<template>

  <div class="relative mx-12 my-12 small-width" style="height:700px">
    <div 
      class="absolute rounded-3xl sm:h-48 xl:w-96 lg:w-80 md:w-60 sm:w-48 h-32 w-36 bg-no-repeat bg-center bg-cover" 
      v-for="collage in dataCollageInfo"
      :key="collage"
      :class="[collage.picture, collage.pictureClass]"
      :style="collage.pictureStyle"
    ></div>
    <!-- <div 
      class="el-top-left absolute rounded-3xl sm:h-48 xl:w-96 lg:w-80 md:w-60 sm:w-48 h-32 w-36 left-1/4 top-1/4 background4 bg-no-repeat bg-center bg-cover" 
      style="transform:translate(-25%,-25%)"
    ></div>
    <div 
      class="el-top-right absolute rounded-3xl sm:h-48 xl:w-96 lg:w-80 md:w-60 sm:w-48 h-32 w-36 left-3/4 top-1/4 background4 bg-no-repeat bg-center bg-cover" 
      style="transform:translate(-75%,-25%)"
    ></div>
    <div 
      class="el-top-left absolute rounded-3xl sm:h-48 xl:w-96 lg:w-80 md:w-60 sm:w-48 h-32 w-36 left-0 top-1/2 background4 bg-no-repeat bg-center bg-cover" 
      style="transform:translate(0,-50%)"
    ></div>
    <div 
      class="el-bot absolute rounded-3xl sm:h-48 xl:w-96 lg:w-80 md:w-60 sm:w-48 h-32 w-36 left-1/2 top-1/2 background4 bg-no-repeat bg-center bg-cover" 
      style="transform:translate(-50%,-50%)"
    ></div>
    <div 
      class="el-top-right absolute rounded-3xl sm:h-48 xl:w-96 lg:w-80 md:w-60 sm:w-48 h-32 w-36 right-0 top-1/2 background4 bg-no-repeat bg-center bg-cover" 
      style="transform:translate(0,-50%)"
    ></div>
    <div 
      class="el-bot-left absolute rounded-3xl sm:h-48 xl:w-96 lg:w-80 md:w-60 sm:w-48 h-32 w-36 left-1/4 top-3/4 background4 bg-no-repeat bg-center bg-cover" 
      style="transform:translate(-25%,-75%)"
    ></div>
    <div 
      class="el-bot-right absolute rounded-3xl sm:h-48 xl:w-96 lg:w-80 md:w-60 sm:w-48 h-32 w-36 left-3/4 top-3/4 background4 bg-no-repeat bg-center bg-cover" 
      style="transform:translate(-75%,-75%)"
    ></div>
    <div 
      class="el-bot absolute rounded-3xl sm:h-48 xl:w-96 lg:w-80 md:w-60 sm:w-48 h-32 w-36 left-1/2 bottom-0 background4 bg-no-repeat bg-center bg-cover" 
      style="transform:translate(-50%,0)"
    ></div>  -->
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
export default {
  props: ['dataCollageInfo'],
  mounted(){
    this.fromTop(".el-top")
    this.fromTopLeft(".el-top-left")
    this.fromTopRight(".el-top-right")
    this.fromBot(".el-bot")
    this.fromBotLeft(".el-bot-left")
    this.fromBotRight(".el-bot-right")
  },
  methods: {
    fromTop: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        yPercent:-50,
        opacity:0,
      })    
    },
    fromTopLeft: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        xPercent: -50,
        yPercent: -50,
        opacity:0,
      })
    },
    fromTopRight: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        xPercent: 50,
        yPercent: -50,
        opacity:0,
      })        
    },
    fromBot: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        yPercent:20,
        opacity:0,
      })        
    },
    fromBotLeft: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        xPercent: -50,
        yPercent: 20,
        opacity:0,
      })        
    },
    fromBotRight: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        xPercent: 50,
        yPercent: 20,
        opacity:0,
      })        
    },
  }
}
</script>

<style>
@media (max-width:640px){
  .small-width{
    height: 500px !important;
  }
}
</style>