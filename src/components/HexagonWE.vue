<template>
<ul id="hexGrid">
  <!-- fill -->
  <li class="hex el-bot-right">
  </li>
  <!-- fill -->
  <!-- pic we1 -->
  <li class="hex el-bot-right">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
        >
          <div class="absolute we1 bg-no-repeat bg-center bg-cover w-full h-full">
            <div class="h-full w-full">
            </div>
          </div>
      </div>
    </div>
  </li>
  <!-- END pic -->
  <!-- pic we2 -->
  <li class="hex el-bot-left">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
        >
          <div class="absolute we2 bg-no-repeat bg-center bg-cover w-full h-full">
            <div class="h-full w-full">
            </div>
          </div>
      </div>
    </div>
  </li>
  <!-- END pic we2 -->
  <!-- fill -->
  <li class="hex el-bot-left">
  </li>
  <!-- END fill -->
  <!-- pic we3 -->
  <li class="hex el-bot-right">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
      >
        <div class="absolute we3 bg-no-repeat bg-center bg-cover w-full h-full">
          <div class="h-full w-full">
          </div>
        </div>
      </div>
    </div>
  </li>
  <!-- END syncrude pic -->
  <!-- center text -->
  <li class="hex el-center">
    <div class="hexIn">
      <div 
      class="hexLink cursor-pointer transition-all duration-250"
      >
      </div>
    </div>
  </li>
  <!-- END center text -->
  <!-- gov pic -->
  <li class="hex el-bot-left">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
      >
        <div class="absolute back bg-no-repeat bg-center bg-cover w-full h-full">
          <div class="h-full w-full">
          </div>
        </div>
      </div>
    </div>
  </li>
  <!-- END gov pic -->
  <li class="hex">
  </li>
  <!-- uofa pic -->
  <li class="hex el-top">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
      >
        <div class="absolute uofa bg-no-repeat bg-center bg-cover w-full h-full">
          <div class="h-full w-full">
          </div>
        </div>
      </div>
    </div>
  </li>
  <!-- END uofa pic -->
  <!-- uofa pic -->
  <li class="hex el-top">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
      >
        <div class="absolute background1 bg-no-repeat bg-center bg-cover w-full h-full">
          <div class="h-full w-full">
          </div>
        </div>
      </div>
    </div>
  </li>
  <!-- END uofa pic -->
  <li class="hex">
  </li>
  <li class="hex">
  </li>
  <li class="hex el-top">
    <div class="hexIn">
      <div 
      class="hexLink cursor-pointer transition-all duration-250"
      >
        <router-link
          to="/experience"
          class="w-full py-10 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%);"
        >
          UNIVERSITY OF ALBERTA
        </router-link>
      </div>
    </div>
  </li>
  <!-- END center text -->
</ul>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
export default {
  data(){
    return{
    }
  },
  mounted(){
    this.fromBotLeft(".el-bot-left")
    this.fromBotRight(".el-bot-right")
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
  },
}
</script>

<style scoped>
.syncrude-color{
  background-color:rgba(255,0,0,0.2);
}
.gov-color{
  background-color:rgba(0,100,255,0.2);
}
.u-color{
  background-color:rgb(238, 130, 238,0.2)
}
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