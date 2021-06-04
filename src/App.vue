<template>
<div class="mx-auto" style="max-width:1600px; min-width:320px;">
  <div class="absolute z-30">
    <AppHeaderMobile v-if="mobileView"/>
    <AppHeader v-if="!mobileView"/>
  </div>
  <router-view></router-view>
  <Footer />
</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import AppHeader from "./components/AppHeader";
import AppHeaderMobile from "./components/AppHeaderMobile";
import Footer from "./components/Footer";
export default {
  data (){
    return {
      showNav: false,
    }
  },
  computed:{
    ...mapGetters(['mobileView'])
  },
  mounted(){
    
  },
  methods: {
    ...mapActions(['handleView'])
  },
  created(){
    this.handleView()
    window.addEventListener('resize',this.handleView);
  },
  components: {AppHeader, AppHeaderMobile, Footer},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
html{
  font-family: 'Montserrat', sans-serif !important;
}
.laptop{background-image:url("./assets/images/laptop.jpg");}
.buildings{background-image:url("./assets/images/buildings.jpg");}
.abstract2{background-image:url("./assets/images/abstract2.jpg");}
.abstract3{background-image:url("./assets/images/abstract3.jpg");}
.abstract4{background-image:url("./assets/images/abstract4.jpg");}
.glassware{background-image:url("./assets/images/glassware.jpg");}
.helmet{background-image:url("./assets/images/helmet.jpg");}
.truck{background-image:url("./assets/images/truck.jpg");}
.book{background-image:url("./assets/images/book.jpg");}
.industry{background-image:url("./assets/images/industry.jpg");}
.computer{background-image:url("./assets/images/computer.jpg");}
.graduation{background-image:url("./assets/images/graduation.jpg");}
.phone{background-image:url("./assets/images/phone.jpg");}
.uofa{background-image:url("./assets/images/ppe.jpg");}
.oilgas{background-image:url("./assets/images/oilgas.jpg");}
.canada{background-image:url("./assets/images/canada.jpg");}
.hourglass{background-image:url("./assets/images/hourglass.jpg");}
.brain{background-image:url("./assets/images/brain.jpg");}
.technology{background-image:url("./assets/images/technology.jpg");}
.nature{background-image:url("./assets/images/nature.jpg");}
.engineering{background-image:url("./assets/images/engineering.jpg");}
.colorful{background-image:url("./assets/images/colorful.jpg");}
.sky{background-image:url("./assets/images/sky.jpg");}




</style>
