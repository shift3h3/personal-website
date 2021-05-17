<template>
  <div class="mx-auto w-36 h-12">
    <div 
      class="text-center bg-gray-100 text-gray-700 py-3 cursor-pointer transition-all duration-250 hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-2xl" 
      style="border-radius:75px;"
    >
      <h1 class="text-xl">LEARN MORE</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: [""]
}
</script>

<style>
@media (max-width:768px){
  .change-width{
    width:360px !important;
  }
}
</style>