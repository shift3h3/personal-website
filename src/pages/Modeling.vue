<template>
<div class="bg-nepal-200">
  <!-- banner -->
  <Banner class="mb-20" :data-banner-info="banner" />
  <!-- END banner -->
  <!-- modals -->
  <!-- <div>
    <img :src="modalPicture" alt="">
  </div> -->
  <div>
    <div>
      <Modal v-if="modalOn" @close="modalOn = false">
        <template #title>
          <h1 class="text-center font-bold"></h1> 
        </template>
        <template #body>
          <div 
            class="overflow-auto relative modal-dim" 
            :class="{'modal-dim':changeDim, 'small-modal-dim': !changeDim}"
          >
            <img class="w-full" style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%)" :src="modalPicture" alt="">
          </div>
        </template>
      </Modal>
    </div>
  </div>
  <!-- END modals -->
  <div class="pb-20">
    <h1 class="md:text-8xl sm:text-6xl text-5xl font-bold text-center">DESIGN</h1>
    <h1 class="md:text-8xl sm:text-6xl text-5xl font-bold text-center">PROJECTS</h1>
    <h1 class="md:text-6xl sm:text-4xl text-3xl font-bold text-center">AutoCAD</h1>
    <h1 class="md:text-6xl sm:text-4xl text-3xl font-bold text-center">SolidWorks</h1>
  </div>
  <div class="text-pickled-bluewood-600" v-if="!mobileCard">
    <CardTwo @openModal="revealModal($event)" :data-card-info="cardInfoFive"/>
    <CardOne @openModal="revealModal($event)" :data-card-info="cardInfoSix"/>
    <CardTwo @openModal="revealModal($event)" :data-card-info="cardInfoTwo"/>
    <CardOne @openModal="revealModal($event)" :data-card-info="cardInfoThree"/>
    <CardTwo @openModal="revealModal($event)" :data-card-info="cardInfoOne"/>
    <CardOne @openModal="revealModal($event)" :data-card-info="cardInfoFour"/>
  </div>
  <div v-else>
    <CardMobile @openModal="revealModal($event)" :data-card-info="cardInfoFive"/>
    <CardMobile @openModal="revealModal($event)" :data-card-info="cardInfoSix"/>
    <CardMobile @openModal="revealModal($event)" :data-card-info="cardInfoTwo"/>
    <CardMobile @openModal="revealModal($event)" :data-card-info="cardInfoThree"/>
    <CardMobile @openModal="revealModal($event)" :data-card-info="cardInfoOne"/>
    <CardMobile @openModal="revealModal($event)" :data-card-info="cardInfoFour"/>
  </div>
</div>
</template>

<script>
import Banner from "../components/Banner";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import CardMobile from "../components/CardMobile";
import Modal from "../components/Modal";
export default {
  data(){
    return{
      changeDim: true,
      modalOn: false,
      modalPicture:null,
      mobileCard: false,
      banner:{
        picture: "buildings",
        heading: "MODELING"
      },
      cardInfoOne: {
        main:{
          heading:"SPORT FACILITY",
          text:"Floor plan, HVAC system, and plumbing system.",
          picture:require('../assets/images/b1.jpg'),
          color:"from-matisse-600 to-matisse-500",
          colorSide: "from-fun-green-500 to-fun-green-400",
          colorMobile: "bg-matisse-500",
          },
        sub:[
          {
            picture:require('../assets/images/b2.jpg'), 
            alternative:'overview', 
            text:"The general layout of the badminton facility, featuring eight courts, a store, bathroom, change room, and kitchen.",
          },
          {
            picture:require('../assets/images/b3.jpg'), 
            alternative:'overview', 
            text:"HVAC duct sized to meet the required air flow for each room.",
          },
          {
            picture:require('../assets/images/b4.jpg'), 
            alternative:'overview', 
            text:"Plumbing system delivering hot and cold water to the kitchen and washrooms.",
          },
          {
            picture:require('../assets/images/b5.jpg'), 
            alternative:'overview', 
            text:"A close up view of the washroom and the plumbing system.",
          },
        ]
      },
      cardInfoTwo: {
        main:{
          heading:"VEHICLE",
          text:"Remote control vehicle designed to traverse obstacle courses.",
          picture:require('../assets/images/cariso.png'),
          color:"from-california-400 to-california-500",
          colorSide: "from-matisse-600 to-matisse-500",
          colorMobile: "bg-california-500",
          },
        sub:[
          {
            picture:require('../assets/images/cartop.png'), 
            alternative:'overview', 
            text:"Top-down view of the vehicle, showing the gear system and motor mount.",
          },
          {
            picture:require('../assets/images/carfront.png'), 
            alternative:'overview', 
            text:"Front view of the vehicle, showcasing the axial system.",
          },
        ]
      },
      cardInfoThree: {
        main:{
          heading:"ERGOMETER",
          text:"A lightweight and portable ergometer, used to assess shoulder injury risk while operating a wheelchair.",
          picture:require('../assets/images/ergofull.png'),
          color:"from-glacier-400 to-glacier-600",
          colorSide: "from-biscay-400 to-biscay-500",
          colorMobile: "bg-glacier-500",
          },
        sub:[
          {
            picture:require('../assets/images/ergoside.png'), 
            alternative:'overview', 
            text:"The ergometer can accommodate various wheelchair sizes.",
          },
          {
            picture:require('../assets/images/ergostand.png'), 
            alternative:'overview', 
            text:"The ergometer stand is used to simulate incline slopes of various heights.",
          },
          {
            picture:require('../assets/images/ergodrawingfull.jpg'), 
            alternative:'overview', 
            text:"The assembly drawing for the two piece ergometer and the stand.",
          },
          {
            picture:require('../assets/images/ergodrawingside.jpg'), 
            alternative:'overview', 
            text:"The assembly drawing for the ergometer and the brake system.",
          },
        ]
      },
      cardInfoFour: {
        main:{
          heading:"PASTA MAKER",
          text:"Created using SolidWorks.",
          picture:require('../assets/images/pasta1.png'),
          color:"from-biscay-400 to-biscay-500",
          colorSide: "from-glacier-600 to-glacier-500",
          colorMobile: "bg-biscay-500",
          },
        sub:[
          {
            picture:require('../assets/images/case.png'), 
            alternative:'overview', 
            text:"Used to create the dough and pasta.",
          },
          {
            picture:require('../assets/images/gearbox.png'), 
            alternative:'overview', 
            text:"Assembly of the gearbox and motor.",
          },
          {
            picture:require('../assets/images/gearbox2.png'), 
            alternative:'overview', 
            text:"How the gears will be arranged in the case.",
          },
          {
            picture:require('../assets/images/gearbox3.png'), 
            alternative:'overview', 
            text:"Close up view of the gears and shafts.",
          },
        ]
      },
      cardInfoFive: {
        main:{
          heading:"CENTRIFUGAL PUMP",
          text:"Models and drawings of a centrifugal pump.",
          picture:require('../assets/images/pumpMotorAssembly.png'),
          color:"from-fun-green-400 to-fun-green-500",
          colorSide: "from-california-500 to-california-400",
          colorMobile: "bg-fun-green-500",
          },
        sub:[
          {
            picture:require('../assets/images/pumpAssembly.png'), 
            alternative:'overview', 
            text:"Section view of the pump assembly.",
          },
          {
            picture:require('../assets/images/shaft.png'), 
            alternative:'overview', 
            text:"An image of the pump shaft.",
          },
          {
            picture:require('../assets/images/pumpCase.png'), 
            alternative:'overview', 
            text:"A inside view of the pump casing.",
          },
          {
            picture:require('../assets/images/impeller.png'), 
            alternative:'overview', 
            text:"A view of the pump impeller.",
          },
          {
            picture:require('../assets/images/pumpDrawing1.jpg'), 
            alternative:'overview', 
            text:"Exploded view of the pump-motor assembly.",
          },
          {
            picture:require('../assets/images/pumpDrawing2.jpg'), 
            alternative:'overview', 
            text:"Exploded view of the pump assembly.",
          },
        ]
      },
      cardInfoSix: {
        main:{
          heading:"HYRDAULIC PUMP",
          text:"Models of an external gear hydraulic pump.",
          picture:require('../assets/images/hydraulicPump.png'),
          color:"from-biscay-400 to-biscay-500",
          colorSide: "from-matisse-500 to-matisse-400",
          colorMobile: "bg-biscay-500",
          },
        sub:[
          {
            picture:require('../assets/images/hydraulicPumpSide.png'), 
            alternative:'overview', 
            text:"Side view of the hydraulic pump.",
          },
          {
            picture:require('../assets/images/hydraulicPumpTop.png'), 
            alternative:'overview', 
            text:"Top view of the hydraulic pump.",
          },
          {
            picture:require('../assets/images/hydraulicPumpSectionR.png'), 
            alternative:'overview', 
            text:"The right section view of the hydraulic pump.",
          },
          {
            picture:require('../assets/images/hydraulicPumpSectionF.png'), 
            alternative:'overview', 
            text:"The front section view of the hydraulic pump.",
          },
        ]
      },
    }
  },
  mounted(){
    window.addEventListener('resize',this.changeCard)
    window.addEventListener('resize',this.changeModalDim)
    window.scrollTo(0,0)
  },
  created(){
    this.changeCard()
    window.addEventListener('resize',this.changeCard)
  },
  unmounted(){
    window.removeEventListener('resize',this.changeModalDim);
    window.removeEventListener('resize',this.changeCard)
  },
  methods:{
    changeCard(){
      this.mobileCard = window.innerWidth < 768;
    },
    revealModal(picture){
      this.modalPicture = picture
      this.modalOn = true
    },
    changeModalDim(){
      this.changeDim = window.innerWidth > 766;
    }
  },
  components:{Banner,CardOne,CardTwo, CardMobile,Modal}
}
</script>

<style>
.modal-dim{
  height: 70vh;
  width: 80vw;
}
.small-modal-dim{
  height: 50vh;
  width: 80vw;
}
</style>