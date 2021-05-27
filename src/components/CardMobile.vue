<template>
  <div class="relative text-nepal-500">
    <div class="mx-auto px-4 py-12" :class="dataCardInfo.main.colorMobile">
      <h1 class="py-2 text-2xl text-center font-semibold">{{dataCardInfo.main.heading}}</h1>
      <img class=" bg-gradient-to-l from-nepal-200 to-nepal-300" :class="dataCardInfo.main.border" :src="dataCardInfo.main.picture" alt="main picture">
      <h1 class="text-center py-2">{{dataCardInfo.main.text}}</h1>
      <div class="text-center">

        <button class="my-1 bg-bondi-blue-400 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-bondi-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px; width:130px" @click="revealPictures=!revealPictures">{{buttonTitle}}</button>
      </div>
    </div>
    <transition name="cardDrop" mode="out-in">
      <div v-show="revealPictures" class="grid grid-cols-2">
        <div class="py-6" v-for="card in dataCardInfo.sub" :key="card">
          <div class="p-5">
            <img class="rounded-xl" :src="card.picture" :alt="card.alternative">
          </div>
          <h1 class=" py-5 px-5 text-center">{{card.text}}</h1>
        </div>
      </div>
  </transition>
  </div>
</template>

<script>
export default {
  props: ["dataCardInfo"],
  data(){
    return{
      revealPictures: false,
    }
  },
  computed:{
    buttonTitle(){
      if(this.revealPictures === false){
        return "Continue"
      } else {
        return "Less"
      }
    }
  },
}
</script>

<style>

</style>
