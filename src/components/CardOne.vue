<template>
  <div class="relative">
    <div class="grid grid-cols-12 card-dim">
      <div class="col-span-8 bg-gradient-to-r" :class="dataCardInfo.main.color">
        <div class="relative top-1/2 ml-12 w-2/3" style="transform:translateY(-50%)">
          <h1 class="text-5xl text-center">{{dataCardInfo.main.heading}}</h1>
          <p class="text-center">{{dataCardInfo.main.text}}</p>
          <div class="text-center my-2">
            <button class="my-1 bg-bondi-blue-500 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-bondi-blue-400 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px; width:130px" @click="revealPictures=!revealPictures">{{buttonTitle}}</button>
          </div>
        </div>
      </div>
      <div class="col-span-4 bg-pickled-bluewood-500"></div>
    </div>
    <img 
      class="absolute bg-gradient-to-l from-nepal-200 to-nepal-300 right-0 top-1/2 pic-dim cursor-pointer"  
      style="transform:translateY(-50%)" 
      :src="dataCardInfo.main.picture" 
      @click="openModal(dataCardInfo.main.picture)"
      alt="main picture">
  </div>
  <transition name="cardDrop" mode="out-in">
    <div v-show="revealPictures" class="grid grid-cols-2">
      <div class="py-6" v-for="card in dataCardInfo.sub" :key="card">
        <div class="p-5 cursor-pointer transition-all transform hover:scale-105">
          <img 
            class="rounded-xl" 
            @click="openModal(card.picture)"
            :src="card.picture" 
            :alt="card.alternative">
        </div>
        <h1 class=" py-5 px-5 text-center">{{card.text}}</h1>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["dataCardInfo"],
  emits:["openModal"],
  data(){
    return{
      revealPictures: false,
    }
  },
  computed:{
    buttonTitle(){
      if(this.revealPictures === false){
        return "More"
      } else {
        return "Less"
      }
    }
  },
  methods: {
    openModal(picture){
      this.$emit("openModal", picture)
    }
  },
}
</script>

<style>
.cardDrop-enter-active, .cardDrop-leave-active {
  transition: max-height 1s ease;
  max-height: 2000px;
}
.cardDrop-enter-from, .cardDrop-leave-to{
  max-height: 0;
  overflow: hidden;
}
.pic-dim{
  width:700px;
}
.card-dim{
  height:600px;
}
@media only screen and (max-width: 1370px) and (min-width: 1180px){
  .pic-dim{
    width:600px;
  }
  .card-dim{
    height:550px;
  }
}
@media only screen and (max-width: 1180px) and (min-width: 980px){
  .pic-dim{
    width:500px;
  }
  .card-dim{
    height:500px;
  }
}
@media only screen and (max-width: 980px) and (min-width: 850px){
  .pic-dim{
    width:400px;
  }
  .card-dim{
    height:400px;
  }
}
@media only screen and (max-width: 850px) and (min-width: 768px){
  .pic-dim{
    width:350px;
  }
  .card-dim{
    height:350px;
  }
}
</style>