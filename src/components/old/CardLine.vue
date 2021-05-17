<template>
<div class="w-full sm:px-24 px-4 text-gray-700">
  <div class="bg-gray-100 rounded-3xl shadow-xl transition-all duration-500 hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-2xl">
    <div class=" mx-8 pt-8">
      <div 
        class="relative w-full rounded-3xl bg-no-repeat bg-center bg-cover h-48 shadow-xl"
        :class="dataCardInfo.picture"
      >
        <div class="absolute bottom-10 w-full">
          <div class="flex justify-center items-center text-white mdtext-7xl sm:text-5xl text-4xl font-bold">
            <h1>{{dataCardInfo.mainHeading}}</h1>
          </div>
        </div>
      </div>
    </div>
    <h1 class="sm:text-4xl text-3xl font-bold text-center p-2">
      {{dataCardInfo.uni}}
    </h1>
    <h1 class="sm:text-2xl text-xl text-center px-6 pb-6">
      {{dataCardInfo.subHeading}}
    </h1>
  </div>
</div>
</template>

<script>
export default {
  props: ["dataCardInfo"],
}
</script>

<style>

</style>