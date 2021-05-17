<template>
  <div class="mt-4">
    <div class="carousel-content w-full h-screen relative overflow-x-hidden">
      <!-- main slide: picture, title, and text -->
      <div class="absolute w-full px-5" v-for="(slide, index) in sliders" :key="slide">
        <transition name="fade">
          <div
            v-if="currentSlide == index"
            class="carousel-content bg-no-repeat bg-center bg-cover rounded-3xl sm:mx-3 mx-0 transition-all duration-500"
            :class="slide.picture"
            style="height:95vh;"
          >
            <div class="absolute top-1/2 left-1/2 w-full" style="transform:translate(-50%,-50%)">
              <div class="text-center text-white">
                <a :href="slide.link">
                  <h1 class="sm:text-8xl text-5xl pb-2">{{slide.title}}</h1>
                </a>
                <p class="sm:text-xl text-md px-10 font-medium">
                  {{slide.text}}
                </p>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- END main slide: picture, title, and text -->
      <!-- slide indicator buttons -->
      <div class="w-full" style="height:340px">
        <div class="absolute bottom-24 w-full flex justify-center">
          <div
            v-for="(slider, index) in sliders"
            :key="slider"
            @click="makeActive(index)"
            :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
            class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md z-20 hover:bg-cusblue-500"
          ></div>
        </div>
      </div>
      <!-- END slide indicator buttons -->
      <!-- slide next prev buttons -->
      <div class="absolute text-white  bottom-24 px-16 flex justify-between w-full z-10">
        <button @click="prev" class="hover:text-cusblue-500"><i class="fas fa-chevron-left"></i></button>
        <button @click="next" class="hover:text-cusblue-500"><i class="fas fa-chevron-right"></i></button>
      </div>
      <!-- END slide next prev buttons -->
    </div> 
  </div>     

</template>

<script>
export default {
  props: ['dataSliders'],
  data() {
    return {
      currentSlide: 0,
      sliders: this.dataSliders,
      interval: "",
      isTitleShowing: true,
    };
  },
  methods: {
    // make current slide active
    makeActive(index) {
      this.currentSlide = index;
    },
    // move to previous slide
    prev(){
      if(this.currentSlide === 0){
        this.currentSlide = this.sliders.length-1
      } else{
        this.currentSlide--
      }
    },
    // move to next slide
    next(){
      if(this.currentSlide === this.sliders.length-1){
        this.currentSlide = 0
      } else{
        this.currentSlide++
      }
    },
  },
  mounted() {
    // move slide automatically 
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === this.sliders.length-1 ? 0 : this.currentSlide + 1;
    }, 10000);
  },
  beforeUnmount() {
    // clear current interval
    clearInterval(this.interval);
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: transform 1.5s ease, opacity 3s ease;
}
.fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
button:focus{
  outline:none;
}
@media (min-width: 2000px) {
  .carousel-content{
    height:1000px !important;
  }
}
@media (max-width: 640px){
  .carousel-content{
    border-radius: 50px !important;
  }
}

</style>