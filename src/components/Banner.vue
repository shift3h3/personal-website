<template>
<div class="py-4">
  <div 
    class="relative mx-5 h-80 bg-no-repeat bg-center bg-cover rounded-3xl"
    :class="dataBannerInfo.picture"
  >
    <div 
      class="absolute top-1/2 left-1/2"
      style="transform:translate(-50%,-50%)"
    >
    <h1 class="md:text-8xl sm:text-6xl text-5xl font-bold text-center text-white">
      {{dataBannerInfo.heading}}
    </h1>
    </div>
  </div>
</div>
</template>

<script>
export default {
  // recieve information from main page
  props: ["dataBannerInfo"]
}
</script>

<style>

</style>