<template>
<div class="w-full text-gray-700">
  <div 
    class="py-10 sm:mx-24 mx-4 p-8 bg-gray-100 rounded-3xl shadow-xl grid lg:grid-cols-2 grid-cols-1 transition-all duration-250 hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-2xl"
  >
    <!-- right picture -->
    <div 
      class="relative w-full rounded-3xl bg-no-repeat bg-center bg-cover lg:h-auto md:h-72 h-48 shadow-xl"
      :class="dataCardInfo.picture"
    >
      <div class="absolute w-full bottom-10">
        <div class="flex justify-center items-center text-white md:text-7xl sm:text-5xl text-4xl font-bold">
          <h1>{{dataCardInfo.mainHeading}}</h1>
        </div>
      </div>
    </div>
    <!-- END right picture -->
    <!-- left text -->
    <div class="pt-6 sm:px-2 text-center z-10">
      <h1 class="md:text-6xl sm:text-4xl text-3xl pb-6 font-bold">{{dataCardInfo.textHeading}}</h1>
      <div v-for="text in dataCardInfo.texts" :key="text">
        <p class="sm:px-5 text-left text-sm">
          {{text.textContent}}
        </p>
        <br>
      </div>
    </div>
    <!-- END left text -->
  </div>
</div>
</template>

<script>
export default {
  props:['dataCardInfo'],
}
</script>

<style>

</style>