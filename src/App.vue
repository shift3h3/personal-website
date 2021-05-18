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
.main{background-image:url("./assets/images/main.jpg");}
.laptop{background-image:url("./assets/images/laptop.jpg");}
.buildings{background-image:url("./assets/images/buildings.jpg");}
.abstract1{background-image:url("./assets/images/abstract1.jpg");}
.abstract2{background-image:url("./assets/images/abstract2.jpg");}
.abstract3{background-image:url("./assets/images/abstract3.jpg");}
.abstract4{background-image:url("./assets/images/abstract4.jpg");}
.watch{background-image:url("./assets/images/watch.jpg");}
.hello{background-image:url("./assets/images/hello.jpg");}
.glassware{background-image:url("./assets/images/glassware.jpg");}
.mountain{background-image:url("./assets/images/mountain.jpg");}
.helmet{background-image:url("./assets/images/helmet.jpg");}
.truck{background-image:url("./assets/images/truck.jpg");}
.snowboarding{background-image:url("./assets/images/snowboarding.jpg");}
.volunteer{background-image:url("./assets/images/volunteer.jpg");}
.education{background-image:url("./assets/images/education.jpg");}
.book{background-image:url("./assets/images/book.jpg");}
.star{background-image:url("./assets/images/star.jpg");}
.steampunk{background-image:url("./assets/images/steampunk.jpg");}
.gears{background-image:url("./assets/images/gears.jpg");}
.lightbulb{background-image:url("./assets/images/lightbulb.jpg");}
.industry{background-image:url("./assets/images/industry.jpg");}
.computer{background-image:url("./assets/images/computer.jpg");}
.graduation{background-image:url("./assets/images/graduation.jpg");}
.phone{background-image:url("./assets/images/phone.jpg");}
.uofa{background-image:url("./assets/images/ppe.jpg");}
.back{background-image:url("./assets/images/back.jpg");}
.projects{background-image:url("./assets/images/drawings.jpg");}
.oilgas{background-image:url("./assets/images/oilgas.jpg");}
.canada{background-image:url("./assets/images/canada.jpg");}
.hourglass{background-image:url("./assets/images/hourglass.jpg");}
.brain{background-image:url("./assets/images/brain.jpg");}
.technology{background-image:url("./assets/images/technology.jpg");}
.code{background-image:url("./assets/images/code.jpg");}
.nature{background-image:url("./assets/images/nature.jpg");}
.engineering{background-image:url("./assets/images/engineering.jpg");}
.colorful{background-image:url("./assets/images/colorful.jpg");}
.carfront{background-image:url("./assets/images/carfront.png");}
.cariso{background-image:url("./assets/images/cariso.png");}
.carside{background-image:url("./assets/images/carside.png");}
.cartop{background-image:url("./assets/images/cartop.png");}
.pasta1{background-image:url("./assets/images/pasta1.png");}
.pasta2{background-image:url("./assets/images/pasta2.png");}
.we1{background-image:url("./assets/images/we1.png");}
.we2{background-image:url("./assets/images/we2.png");}
.we3{background-image:url("./assets/images/we3.png");}
.we4{background-image:url("./assets/images/we4.png");}
.we7{background-image:url("./assets/images/we7.png");}
.b1{background-image:url("./assets/images/b1.jpg");}
.b2{background-image:url("./assets/images/b2.jpg");}
.b3{background-image:url("./assets/images/b3.jpg");}
.b4{background-image:url("./assets/images/b4.jpg");}
.b5{background-image:url("./assets/images/b5.jpg");}

</style>
