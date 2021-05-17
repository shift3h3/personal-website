<template>
<ul id="hexGrid">
  <li class="hex">
  </li>
  <li class="hex">
    <div class="hexIn">
      <div 
        class="hexLink relative transition-all duration-250 bg-black"
      >
        <h1 
          class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%); z-index:1;"
        >
          SYNCRUDE CANADA
        </h1>
        <div class="absolute background1 bg-no-repeat bg-center bg-cover w-full h-full opacity-70">
        </div>
      </div>
    </div>
  </li>
  <li class="hex">
  </li>

  <li class="hex el-bot-right">
    <div class="hexIn">
      <div 
        class="hexLink relative transition-all duration-250 bg-black"
      >
        <h1 
          class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%); z-index:1;"
        >
          SYNCRUDE CANADA
        </h1>
        <div class="absolute background3 bg-no-repeat bg-center bg-cover w-full h-full opacity-70">
        </div>
      </div>
    </div>
  </li>

  <li class="hex ">
    <div class="hexIn">
      <div 
        class="hexLink relative transition-all duration-250 bg-black"
      >
        <h1 
          class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%); z-index:1;"
        >
          SYNCRUDE CANADA
        </h1>
        <div class="absolute background4 bg-no-repeat bg-center bg-cover w-full h-full opacity-70">
        </div>
      </div>
    </div>
  </li>
</ul>
</template>

<script>
export default {
}
</script>
<style scoped>

#hexGrid {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
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
  padding-bottom: 88.602%;  /* =  100 / tan(60) * 1.5 */
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
    padding-bottom: 7.4%
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(5n+4){ /* first hexagon of even rows */
    margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */
  }
}
</style>