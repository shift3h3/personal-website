<template>
  <li class="hex el-bot-right">
    <div class="hexIn">
      <div 
        class="hexLink relative cursor-pointer transition-all duration-250"
        @mouseover="hoverSync=true"
        @mouseleave="hoverSync=false"
        :class="{'bg-red-500 bg-opacity-20':hoverSync}"
      >
        <div class="absolute background3 bg-no-repeat bg-center bg-cover w-full h-full opacity-70">
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {

}
</script>

<style>

</style>