<template>
  <div class="relative text-pickled-bluewood-600">
    <div class="mx-auto px-4 py-12" :class="dataCardInfo.main.colorMobile">
      <h1 class="py-4 sm:text-5xl text-3xl text-center font-semibold">{{dataCardInfo.main.heading}}</h1>
      <img 
        class=" bg-gradient-to-l from-nepal-200 to-nepal-300 rounded-3xl" 
        :class="dataCardInfo.main.border" 
        :src="dataCardInfo.main.picture" 
        @click="openModal(dataCardInfo.main.picture)"
        alt="main picture">
      <h1 class="text-center py-2">{{dataCardInfo.main.text}}</h1>
      <div class="text-center">

        <button class="my-1 bg-bondi-blue-500 text-gray-200 mx-2 p-2 w-28 transition-all duration-250 hover:bg-bondi-blue-400 hover:text-white transform hover:scale-105 hover:shadow-2xl" style="border-radius: 75px; width:130px" @click="revealPictures=!revealPictures">{{buttonTitle}}</button>
      </div>
    </div>
    <transition name="cardDrop" mode="out-in">
      <div v-show="revealPictures" class="grid grid-cols-2">
        <div class="py-6" v-for="card in dataCardInfo.sub" :key="card">
          <div class="p-5">
            <img 
              class="rounded-xl" 
              :src="card.picture" 
              @click="openModal(card.picture)"
              :alt="card.alternative">
          </div>
          <h1 class=" py-5 px-5 text-center">{{card.text}}</h1>
        </div>
      </div>
  </transition>
  </div>
</template>

<script>
export default {
  emits:["openModal"],
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
  methods: {
    openModal(picture){
      this.$emit("openModal", picture)
    }
  },
}
</script>

<style>

</style>
