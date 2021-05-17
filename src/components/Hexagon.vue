<template>
<ul id="hexGrid">
  <!-- syncrude text -->
  <li class="hex el-bot-right">
    <div class="hexIn">
      <div 
      class="hexLink cursor-pointer transition-all duration-250"
      @click="changeSlide(7)"
      @mouseover="hoverSync=true"
      @mouseleave="hoverSync=false"
      :class="{'syncrude-color':hoverSync}"
      >
        <router-link
          to="/experience"
          class="w-full py-10 xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%);"
        >
          SYNCRUDE CANADA
        </router-link>
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
        :class="{'syncrude-color':hoverSync}"
        >
          <div class="absolute truck bg-no-repeat bg-center bg-cover w-full h-full opacity-50">
            <div class="h-full w-full" @click="changeSlide(7)">
              <router-link to="/experience" class="h-full w-full" style="transform:translate(-50%,0)">
              </router-link>
            </div>
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
        :class="{'gov-color':hoverGov}"
        >
          <div class="absolute canada bg-no-repeat bg-center bg-cover w-full h-full opacity-50">
            <div class="h-full w-full" @click="changeSlide(6)">
              <router-link to="/experience" class="h-full w-full" style="transform:translate(-50%,0)">
              </router-link>
            </div>
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
      @click="changeSlide(6)"
      @mouseover="hoverGov=true"
      @mouseleave="hoverGov=false"
      :class="{'gov-color':hoverGov}"
      >
        <router-link
          to="/experience"
          class="w-full py-10 xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%);"
        >
          GOVERNMENT OF CANADA
        </router-link>
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
        :class="{'syncrude-color':hoverSync}"
      >
        <div class="absolute oilgas bg-no-repeat bg-center bg-cover w-full h-full opacity-50">
          <div class="h-full w-full" @click="changeSlide(7)">
            <router-link to="/experience" class="h-full w-full" style="transform:translate(-50%,0)">
            </router-link>
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
      @click="changeSlide(0)"
      @mouseover="hoverCen=true"
      @mouseleave="hoverCen=false"
      :class="{'bg-purple-500 bg-opacity-20':hoverCen}"
      >
        <router-link
          to="/experience"
          class="w-full py-10 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%);"
        >
          WHAT I DO
        </router-link>
      </div>
    </div>
  </li>
  <!-- END center text -->
  <!-- gov pic -->
  <li class="hex el-bot-left">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
        @mouseover="hoverGov=true"
        @mouseleave="hoverGov=false"
        :class="{'gov-color':hoverGov}"
      >
        <div class="absolute helmet bg-no-repeat bg-center bg-cover w-full h-full opacity-50">
          <div class="h-full w-full" @click="changeSlide(6)">
            <router-link to="/experience" class="h-full w-full" style="transform:translate(-50%,0)">
            </router-link>
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
        @mouseover="hoverUA=true"
        @mouseleave="hoverUA=false"
        :class="{'u-color':hoverUA}"
      >
        <div class="absolute uofa bg-no-repeat bg-center bg-cover w-full h-full opacity-50">
          <div class="h-full w-full" @click="changeSlide(5)">
            <router-link to="/experience" class="h-full w-full" style="transform:translate(-50%,0)">
            </router-link>
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
        @mouseover="hoverUA=true"
        @mouseleave="hoverUA=false"
        :class="{'u-color':hoverUA}"
      >
        <div class="absolute glassware bg-no-repeat bg-center bg-cover w-full h-full opacity-50">
          <div class="h-full w-full" @click="changeSlide(5)">
            <router-link to="/experience" class="h-full w-full" style="transform:translate(-50%,0)">
            </router-link>
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
      @click="changeSlide(5)"
      @mouseover="hoverUA=true"
      @mouseleave="hoverUA=false"
      :class="{'u-color':hoverUA}"
      >
        <router-link
          to="/experience"
          class="w-full py-10 xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm left-1/2 top-1/2 text-white"
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
import {mapActions} from "vuex";
gsap.registerPlugin(ScrollTrigger);
export default {
  data(){
    return{
      hoverSync:false,
      hoverGov:false,
      hoverCen:false,
      hoverUA:false,
    }
  },
  // computed:{
  //   ...mapGetters(['reveal'])
  // },
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
        },
        xPercent: 50,
        yPercent: 50,
        opacity:0,
      })        
    },
    ...mapActions(['changeSlide'])
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