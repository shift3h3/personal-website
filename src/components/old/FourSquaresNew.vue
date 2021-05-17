<template>
    <div class="relative grid lg:grid-cols-2 grid-cols-1 sm:mx-24 mx-4 mt-10 text-white">
      <div 
        class="top-left  lg:mr-5 lg:py-10 bg-no-repeat bg-center bg-cover pt-52"
        style=""
      >
        <h1 class="text-center text-4xl font-bold pb-3">{{dataCardInfo[0].heading}}</h1>
        <p class="px-4">{{dataCardInfo[0].text}}</p>
      </div>
      <div 
        class="top-right  ml-5 py-10 background4 bg-no-repeat bg-center bg-cover rounded-3xl"
        style="border-radius:75px;"
      >
      </div>
    </div>
    <div class="relative z-10 grid lg:grid-cols-2 grid-cols-1 sm:mx-24 mx-4 mt-10 text-white">
      <div 
        class="bot-left  mr-5 py-10 projects bg-no-repeat bg-center bg-cover rounded-3xl"
        style="border-radius:75px;"
      >
      </div>
      <div 
        class="bot-right lg:ml-5 py-10 bg-no-repeat bg-center bg-cover rounded-3xl"
        style=""
      >
        <h1 class="text-center text-4xl font-bold pb-3">{{dataCardInfo[1].heading}}</h1>
        <p class="px-4">{{dataCardInfo[1].text}}</p>
      </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  props: ["dataCardInfo"],
  computed: {
    ...mapGetters(['mobileView'])
  },
  mounted() {

  },
  methods :{

  },
}
</script>

<style>

</style>