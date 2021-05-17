<template>
  <li class="hex">
    <div class="hexIn">
      <div 
      class="hexLink cursor-pointer transition-all duration-250"
      :class="{'bg-red-500 bg-opacity-20':dataHover}"
    >
        <h1 
          class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md left-1/2 top-1/2 text-white"
          style="transform:translate(-50%,-50%);"
        >
          {{dataTitle}}
        </h1>
      </div>
    </div>
  </li>
</template>

<script>
export default {
    props : ["dataHover","dataTitle"]
}
</script>

<style>

</style>