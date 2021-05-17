<template>
<div 
  class="h-72 relative text-center cursor-pointer rounded-3xl text-gray-300 lg:text-5xl text-4xl py-auto mx-10 bg-no-repeat bg-center bg-cover  transition-all duration-250 hover:text-white transform hover:scale-105 white-shadow "
  :class="dataPictureInfo.picture"
  style="border-radius: 75px;"
>
  <div class="absolute top-1/2 left-1/2" style="transform:translate(-50%,-50%);">
    <h1>{{dataPictureInfo.title}}</h1>
  </div>
</div>
</template>

<script>
export default {
  props:["dataPictureInfo"]
}
</script>

<style>
/* .white-shadow:hover {
  box-shadow: white 0px 0px 1px, white 0px -1px 1px, white 0px 1px 1px, white 0px 1px 1px, white 0px -1px 1px;
} */

</style>