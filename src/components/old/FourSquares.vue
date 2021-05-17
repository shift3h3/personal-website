<template>
    <div class="relative z-10 grid lg:grid-cols-2 grid-cols-1 sm:mx-24 mx-4 mt-10 text-gray-700">
      <div 
        class="top-left opacity-0 lg:mr-5 lg:py-10 bg-no-repeat bg-center bg-cover rounded-3xl pt-52"
        style="transform:translate(-50px,-50px)"
      >
        <h1 class="text-center text-4xl font-bold pb-3">{{dataCardInfo[0].heading}}</h1>
        <p class="px-4">{{dataCardInfo[0].text}}</p>
      </div>
      <div 
        class="top-right opacity-0 ml-5 py-10 background4 bg-no-repeat bg-center bg-cover rounded-3xl"
        :class="{'hidden': mobileView}"
        style="transform:translate(50px,-50px)"
      >
      </div>
    </div>
    <div class="relative z-10 grid lg:grid-cols-2 grid-cols-1 sm:mx-24 mx-4 mt-10 text-gray-700">
      <div 
        class="bot-left opacity-0 mr-5 py-10 projects bg-no-repeat bg-center bg-cover rounded-3xl"
        :class="{'hidden': mobileView}"
        style="transform:translate(-50px,50px)"
      >
      </div>
      <div 
        class="bot-right opacity-0 lg:ml-5 py-10 bg-no-repeat bg-center bg-cover rounded-3xl"
        style="transform:translate(50px,50px)"
      >
        <h1 class="text-center text-4xl font-bold pb-3">{{dataCardInfo[1].heading}}</h1>
        <p class="px-4">{{dataCardInfo[1].text}}</p>
      </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export default {
  props: ["dataCardInfo"],
  computed: {
    ...mapGetters(['mobileView'])
  },
  mounted() {
      this.toTopRight(".top-right", ".top-right")
      this.toTopLeft(".top-left", ".top-right")
      this.toBotRight(".bot-right", ".top-right")
      this.toBotLeft(".bot-left", ".top-right")
  },
  methods :{
    toTopLeft: (el, trig) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: trig,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        x:0,
        y:0,
        duration:1,
        opacity: 1,
      })  
    },
    toTopRight: (el,trig) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: trig,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        x:0,
        y:0,
        duration:1,
        opacity: 1,
      })  
    },
    toBotLeft: (el, trig) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: trig,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        x:0,
        y:0,
        duration:1,
        opacity: 1,
      })  
    },
    toBotRight: (el,trig) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: trig,
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        x:0,
        y:0,
        duration:1,
        opacity: 1,
      })  
    },
  },
}
</script>

<style>

</style>