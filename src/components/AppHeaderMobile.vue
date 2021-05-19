<template>

<div class="fixed w-full top-0">
    <!-- full width navbar -->
    <nav 
        class=" text-white text-2xl sm:px-5 px-2 rounded-3xl" 
        :class="{
                'transition-color duration-500 ':revealNavbar,
                'transition-color duration-500 bg-transparent':!revealNavbar,
                'opacity-100 bg-transparent bg-none pt-4 pb-3': scrollPosition === 0,
                'bg-black sm:mx-10 mx-2 mt-2': scrollPosition!=0 && revealNavbar,
                }"
    >
        <router-link 
            to="/" 
            class="relative mx-7 inline-block  sm:px-4 pt-3 pb-3 font-extrabold text-4xl"
            :class="{
                    'transition-opacity duration-1000 opacity-100':revealNavbar,
                    'transition-opacity duration-1000 opacity-0':!revealNavbar,
                    }"
        >
            MH
        </router-link>
        <div @click="reveal" class="relative float-right mr-24 my-1">
            <Burger :data-burgar="revealNavbar"/>
        </div>
    </nav>
    <!-- END full width navbar -->
    <!-- drop down  -->
    <div 
        class="absolute top-0 w-full go-back"
        :class="{'bg-red-500 h-0': revealNavbar}"
    >
        <div 
            id="navbarSmall" 
            class="bg-white text-lg pt-12 pb-5 rounded-3xl my-2 shadow-2xl overflow-hidden sm:mx-14 mx-12 top-0 border"
            :class="{
                    'transition-all duration-500 transform translate-x-full -translate-y-60 scale-0 pointer-events-none': revealNavbar, 
                    'transition-all duration-500 opacity-100': !revealNavbar, 
                    'mt-6':scrollPosition === 0
                    }"
        >
            <div class="text-center text-2xl" @click="reveal">
                <router-link 
                    v-for="item in allLinks" 
                    :key="item.to" 
                    :to="item.to"
                    class="block text-black font-bold hover:text-cusblue-400 py-2 mx-10 rounded-3xl transition-transform duration-200 transform hover:scale-110"
                    :class="{'text-cusblue-500': $route.path === item.to}"
                >
                    {{ item.title }}
                </router-link>
            </div>
        </div> 
    </div> 
    <!-- END drop down -->
</div>
</template>

<script>
import Burger from "./Burger";
import {mapGetters, mapActions} from "vuex";
export default {
    data(){
        return {
            revealNavbar: true,
        }
    },
    computed:{
        ...mapGetters(['allLinks','scrollPosition'])
    },
    methods : {
        // reveal drop down
        reveal(){
            this.revealNavbar = !this.revealNavbar
        },
        // closeNavbar(){
        //     this.revealNavbar = false
        // },
        ...mapActions(['updateScroll'])
    },
    mounted() {
        // listen for scroll and update scrollPosition
        window.addEventListener('scroll',this.updateScroll)
    },
    components: {Burger}
}
</script>

<style>
.go-back{
    z-index:-10 !important;
}
</style>