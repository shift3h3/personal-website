<template>
  <div class="mb-32">
    <div class="sm:p-5 grid lg:grid-cols-2 text-gray-700">
      <!-- headings -->
      <div 
        class="lg:text-right xl:text-7xl lg:text-6xl sm:text-5xl md:text-7xl text-3xl lg:bg-gradient-to-r from-transparent :to-white px-5"
        style="border-radius: 0 0 0 35px;"
      >
        <div class="relative top-1/2" style="transform:translateY(-50%)">
          <h1 
            v-for="(slide,index) in dataCarousel" :key="slide"
            class="lg:py-5 py-1 cursor-pointer transition-all transform hover:scale-105 hover:text-cusblue-400 lg:hover:-translate-x-10" 
            @click="changeSlide(index)"
            :class="{'text-cusblue-500': slideNumber === index}"
          >
            {{slide.heading}}
          </h1>
        </div>
      </div>
      <!-- END headings -->
      <!-- content -->
      <div 
        class="relative col-span-1 overflow-x-hidden lg:bg-white  change-border" 
        style="height:700px; border-radius: 0 35px 35px 0;"
      >
        <transition name="fade-about" v-for="slide in dataCarousel" :key="slide">
          <div 
            class="absolute text-white 2xl:text-2xl xl:text-xl md:text-md sm:text-md w-full h-full bg-green-500 bg-no-repeat bg-center bg-cover change-border"
            style="border-radius:0 35px 35px 0;"
            :class="slide.picture"
            v-if="slideNumber === slide.show"
          >
            <div class="absolute bg-black opacity-60 w-full h-full change-border"></div>
            <div class="absolute px-16 py-12 left-1/2 top-1/2 w-full" style="transform:translate(-50%,-50%)">
              <div v-for="text in slide.texts" :key="text">
                <p>{{text}}</p>
                <br>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- END content -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataCarousel'],
  data(){
    return{
      slideNumber: 0,
    }
  },
  methods : {
    changeSlide(num){
      this.slideNumber = num
    }
  },
}
</script>

<style>
.background1{background-image:url("../assets/images/gears.jpg");}
.fade-about-enter-active,
.fade-about-leave-active {
  transition: transform 0.5s ease, opacity 1s ease;
}
.fade-about-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.fade-about-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
@media (max-width: 1020px){
  .change-border{
    height:700px !important;
    border-radius: 35px 35px 35px 35px !important;
  }
}
</style>