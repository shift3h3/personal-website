<template>
<div class="relative">
  <div class="flex justify-between mx-10 h-32 border-t-2 text-gray-700 border-gray-300 sm:p-5 font-bold sm:text-xl text-md">
    <div >
      <a href="https://www.linkedin.com/in/michael-he-93b6591b7/">  
        <h1 class="cursor-pointer transition-all duration-250 hover:text-black transform hover:scale-105"><i class="fab fa-linkedin"></i> LinkedIn</h1>
      </a>
      <router-link to="/contact">
        <h1 class="cursor-pointer transition-all duration-250 hover:text-black transform hover:scale-105"><i class="fas fa-envelope"></i> Gmail</h1>
      </router-link>
    </div>
    <router-link to="/">
      <div class="cursor-pointer transition-all duration-250 hover:text-black transform hover:scale-105">
        <h1>MICHAEL HE</h1>
        <h1>MECHANICAL</h1>
        <h1>ENGINEER</h1>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>