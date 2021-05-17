<template>
<ul id="hexGrid">
  <!-- syncrude text -->
  <li class="hex el-bot-right">
    <div class="hexIn">
      <div 
      class="hexLink cursor-pointer transition-all duration-250"
      @mouseover="hoverSync=true"
      @mouseleave="hoverSync=false"
      :class="{'bg-red-500 bg-opacity-20':hoverSync}"
    >
        <h1 
          class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%);"
        >
          SYNCRUDE CANADA
        </h1>
      </div>
    </div>
  </li>
  <!-- END syncrude text -->
  <!-- syncrude pic -->
  <li class="hex el-bot-right">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
        @mouseover="hoverSync=true"
        @mouseleave="hoverSync=false"
        :class="{'bg-red-500 bg-opacity-20':hoverSync}"
      >
        <div class="absolute background3 bg-no-repeat bg-center bg-cover w-full h-full opacity-70">
        </div>
      </div>
    </div>
  </li>
  <!-- END syncrude pic -->
  <!-- gov pic -->
  <li class="hex el-bot-left">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
        @mouseover="hoverGov=true"
        @mouseleave="hoverGov=false"
        :class="{'bg-blue-500 bg-opacity-20':hoverGov}"
      >
        <div class="absolute background4 bg-no-repeat bg-center bg-cover w-full h-full opacity-70">
        </div>
      </div>
    </div>
  </li>
  <!-- END gov pic -->
  <!-- gov text -->
  <li class="hex el-bot-left">
    <div class="hexIn">
      <div 
      class="hexLink cursor-pointer transition-all duration-250"
      @mouseover="hoverGov=true"
      @mouseleave="hoverGov=false"
      :class="{'bg-blue-500 bg-opacity-20':hoverGov}"
    >
        <h1 
          class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%);"
        >
          GOVERNMENT OF CANADA
        </h1>
      </div>
    </div>
  </li>
  <!-- END gov text -->
  <!-- syncrude pic -->
  <li class="hex el-bot-right">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
        @mouseover="hoverSync=true"
        @mouseleave="hoverSync=false"
        :class="{'bg-red-500 bg-opacity-20':hoverSync}"
      >
        <div class="absolute oilgas bg-no-repeat bg-center bg-cover w-full h-full opacity-70">
        </div>
      </div>
    </div>
  </li>
  <!-- END syncrude pic -->
      <li class="hex el-center">
        <div class="hexIn text-white hover:text-cusblue-500">
          <a class="hexLink" href="#">
            <h1 class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md">WHAT I'VE</h1>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md">DONE</p>
          </a>
        </div>
      </li>
      <li class="hex el-bot-left">
        <div class="hexIn text-white hover:text-cusblue-500">
          <a class="hexLink oilgas bg-no-repeat bg-center bg-cover" href="#">
          </a>
        </div>
      </li>
      <li class="hex">
      </li>
      <li class="hex">
        <div class="hexIn el-top text-white hover:text-cusblue-500">
          <a class="hexLink uofa bg-no-repeat bg-center bg-cover" href="#">
            <!-- <h1 class="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md">Safety</h1>
            <p class="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md">Inspector</p> -->
          </a>
        </div>
      </li>
      <li class="hex el-top">
        <div class="hexIn text-white hover:text-cusblue-500">
          <a class="hexLink background1 bg-no-repeat bg-center bg-cover" href="#">
            <!-- <h1 class="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md">Equipment</h1>
            <p class="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md">Maintenance</p> -->
          </a>
        </div>
      </li>
      <li class="hex">
      </li>
      <li class="hex">
      </li>
      <li class="hex el-top">
        <div class="hexIn text-white hover:text-cusblue-500">
          <a class="hexLink" href="#">
            <h1 class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md">UNIVERSITY</h1>
            <p class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md">OF ALBERTA</p>
          </a>
        </div>
      </li>
    </ul>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted(){
    this.fromBotLeft(".el-bot-left")
    this.fromLeft(".el-left")
    this.fromBotRight(".el-bot-right")
    this.fromRight(".el-right")
    this.fromTopLeft(".el-top-left")
    this.fromTopRight(".el-top-right")
    this.fromTop(".el-top")
  },
  methods :{
    fromTop: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: ".el-center",
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
          trigger: ".el-center",
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
    fromLeft: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: ".el-center",
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        xPercent: -50,
        opacity:0,
      })
    },
    fromTopRight: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: ".el-center",
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
    fromRight: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: ".el-center",
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        xPercent: 50,
        opacity:0,
      })        
    },
    fromBot: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: ".el-center",
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        yPercent:50,
        opacity:0,
      })        
    },
    fromBotLeft: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: ".el-center",
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        xPercent: -50,
        yPercent: 50,
        opacity:0,
      })        
    },
    fromBotRight: (el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: ".el-center",
          start: "0 100%",
          end: "+=600",
          toggleActions: "play none none none",
          scrub:true,
        },
        xPercent: 50,
        yPercent: 50,
        opacity:0,
      })        
    },
  }
}
</script>

<style>

#hexGrid {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  /* overflow: hidden; */
  list-style-type: none;
}

.hex {
  position: relative;
  visibility:hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hex::after{
  content:'';
  display:block;
  padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
}
.hexIn{
  position: absolute;
  width:96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin:0 2%;
  overflow: hidden;
  visibility: hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
      -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
          transform: rotate3d(0,0,1,-60deg) skewY(30deg);
}
.hexIn * {
  position: absolute;
  visibility: visible;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hexLink {
    display:block;
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: visible;
    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
        -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
            transform: skewY(-30deg) rotate3d(0,0,1,60deg);
}

/*** HEX CONTENT **********************************************************************/


/*** HOVER EFFECT  **********************************************************************/


/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
@media (min-width:0px) { /* <- 4-3  hexagons per row */
  #hexGrid{
    padding-bottom: 5.5%
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(7n+5){ /* first hexagon of even rows */
    margin-left:12.5%;  /* = width of .hex / 2  to indent even rows */
  }
}

</style>