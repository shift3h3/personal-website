<template>
  <div
    class="fixed w-full top-0"
    style="max-width:1600px; left:50%; transform:translateX(-50%);"
  >
    <!-- main navbar -->
    <nav
      class="transition-all duration-500 text-white px-12 pt-3 pb-3 text-2xl rounded-3xl"
      :class="{
        'opacity-100 bg-transparent bg-none pt-7 pb-3': scrollPosition === 0,
        'bg-black mx-9 mt-2 rounded-3xl': scrollPosition != 0,
      }"
      style="max-width:1600px;"
    >
      <router-link
        @click="scrollToTop"
        to="/"
        class="Home mx-7 inline-block font-extrabold text-4xl transition-all duration-250 transform hover:scale-105"
      >
        MH
      </router-link>
      <div class="float-right">
        <router-link
          v-for="(item, index) in allLinks"
          v-show="index != 0"
          :key="item.to"
          :to="item.to"
          class="text-lg tracking-widest mx-7 my-1 inline-block hover:text-bondi-blue-400 hover:font-bold transition-all duration-250 transform hover:scale-110"
          :class="{ 'text-bondi-blue-500 text-2xl': $route.path === item.to }"
        >
          {{ item.title }}
        </router-link>
      </div>
    </nav>
    <!-- END main navbar -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["allLinks", "scrollPosition", "windowWidth"]),
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    ...mapActions(["updateScroll"]),
  },
  mounted() {
    // listen for scroll and update scrollPosition
    window.addEventListener("scroll", this.updateScroll);
    window.addEventListener("resize", this.updateScroll);
  },
};
</script>
<style></style>
