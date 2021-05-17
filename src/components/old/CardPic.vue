<template>
<div class="w-full sm:px-24 px-4 text-gray-700">
  <div class="shadow-xl">
    <div class="">
      <div 
      class="relative w-full rounded-3xl bg-no-repeat bg-center bg-cover md:h-96 sm:h-52 h-48 shadow-xl z-10"
      :class="dataCardInfo.picture"
      >
        <div class="absolute md:bottom-10 bottom-3 w-full px-5">
          <div class="text-center text-white">
            <h1 class="md:text-7xl sm:text-5xl text-4xl font-bold">
              {{dataCardInfo.mainHeading}}
            </h1>
            <h1 class="md:text-5xl sm:text-3xl text-2xl font-bold">
              {{dataCardInfo.uni}}
            </h1>
            <h1 class="md:text-3xl sm:text-2xl text-1xl font-bold">
              {{dataCardInfo.subHeading}}           
            </h1>
          </div>
        </div>
      </div>

    </div>
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