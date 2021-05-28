<template>
<!-- banner -->
<Banner class="mb-40" :data-banner-info="banner" />
<!-- END banner -->
<div class="text-center mb-40 overflow-hidden">
  <a href="https://www.linkedin.com/in/michael-he-93b6591b7/">  
    <h1 class="cursor-pointer transition-all duration-250 transform hover:scale-125 text-5xl font-bold linkedin-color"><i class="fab fa-linkedin"></i> LinkedIn</h1>
  </a>
  <h1 class="my-12 lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold"> michaelhe3078@gmail.com</h1>
</div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  data(){
    return {
      banner:{
        picture: "phone",
        heading: "CONTACT"
      },
    }
  },
  mounted(){
    window.scrollTo(0,0)
  },
  components:{Banner}
}
</script>

<style>
.linkedin-color{
  color: #0072b1;
}
</style>