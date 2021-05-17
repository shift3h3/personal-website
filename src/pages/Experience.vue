<template>
<Timeline v-if="!mobileView" />
<TimelineMobile v-if="mobileView" />
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import Timeline from "../components/Timeline";
import TimelineMobile from "../components/TimelineMobile";
export default {
  data(){
    return{
    }
  },
  mounted(){
    window.scrollTo(0,0)
  },
  methods: {
    ...mapActions(['handleView'])
  },
  computed:{
    ...mapGetters(['mobileView','reveal'])
  },
  created(){
    this.handleView()
    window.addEventListener('resize',this.handleView);
  },
  components: {Timeline, TimelineMobile}
}
</script>

<style scoped>
</style>