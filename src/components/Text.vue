<template>
  <div class="grid md:grid-cols-2 grid-cols-1">
    <div class="mx-9 md:text-right sm:text-4xl text-3xl font-medium mb-3">
      <h1 v-for="heading in dataTextInfo.headings" :key="heading">
        {{heading}}
      </h1>
    </div>
    <div class="mx-9 xl:pr-32 lg:pr-16 md:pr-5 text-xl">
      <div v-for="text in dataTextInfo.texts" :key="text">
        <p>
          {{text}}
        </p>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataTextInfo"],
  components: {},
}
</script>

<style>

</style>