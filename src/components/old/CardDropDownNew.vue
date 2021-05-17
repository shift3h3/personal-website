<template>
    <div 
        class="bg-no-repeat bg-center bg-cover sm:mx-8 mx-1"
        :class="dataCardInfo.picture"
        style="border-radius:75px; height:800px"
    >
        <!-- three line heading -->
        <div class="text-center pt-10 pb-10 text-white">
            <h1 class="sm:text-7xl text-5xl font-bold pb-4 px-2">{{dataCardInfo.mainHeading}}</h1>
            <h1 class="sm:text-4xl text-2xl">{{dataCardInfo.subHeading}}</h1>
            <h1 class="px-3">{{dataCardInfo.subSubHeading}}</h1>
        </div>
        <!-- END three line heading -->
        <!-- three buttons -->
        <div class= "text-center py-2 mx-16 rounded-3xl ">
            <h1 
                class="text-5xl font-extrabold cursor-pointer text-gray-100 transition-all duration-250 hover:text-gray-700 transform hover:scale-125"
                @click="showMain()"
                :class="{'hidden':!windowWidth}"
            >
                MH
            </h1>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-1 mb-2">
            <div class=" text-center sm:py-4 py-1">
                <div 
                    class="py-2 w-36 h-12 mx-auto text-xl rounded-3xl cursor-pointer text-gray-500 bg-gray-100 transition-all duration-250 hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-2xl"
                    @click="showDesign()"
                >
                    <h1 class="">{{dataCardInfo.buttonOne}}</h1>
                </div>
            </div>
            <div class= "text-center sm:py-2 mx-16 rounded-3xl ">
                <h1 
                    class="text-5xl font-extrabold cursor-pointer text-gray-100 transition-all duration-250 hover:text-gray-700 transform hover:scale-125"
                    @click="showMain()"
                    :class="{'hidden':windowWidth}"
                >
                    MH
                </h1>
            </div>
            <div class=" text-center sm:py-4 py-1">
                <div 
                    class="py-2 w-36 h-12 mx-auto text-xl rounded-3xl cursor-pointer text-gray-500 bg-gray-100 transition-all duration-250 hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-2xl"
                    @click="showCode()"
                >
                    <h1 class="">{{dataCardInfo.buttonTwo}}</h1>
                </div>
            </div>
        </div>
        <!-- END three buttons -->
        <!-- text -->
        <transition name="fade" mode="out-in">
            <div 
                class="relative text-center text-white md:text-2xl sm:text-xl text-lg sm:mx-20 mx-5 sm:py-10 py-5 "
                v-if="designText"
            >
                <p id="content" class="absolute ">{{dataCardInfo.buttonOneText}}</p>
            </div>
        </transition>
        <transition name="fade" mode="out-in">
            <div 
                class="relative text-center text-white md:text-2xl sm:text-xl text-lg sm:mx-20 mx-5 sm:py-10 py-5 "
                v-if="mainText"
            >
                <p id="content" class="absolute ">{{dataCardInfo.mainText}}</p>
            </div>
        </transition>
        <transition name="fade" mode="out-in">
            <div 
                class="relative text-center text-white md:text-2xl sm:text-xl text-lg sm:mx-20 mx-5 sm:py-10 py-5 "
                v-if="codeText"
            >
                <p id="content" class="absolute  ">{{dataCardInfo.buttonTwoText}}</p>
            </div>
        </transition>
        <!-- END text -->
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    props: ['dataCardInfo'],
    data(){
        return{
            designText: false,
            mainText: true,
            codeText: false,
        }
    },
    computed: {
        ...mapGetters(['windowWidth'])
    },
    methods: {
        showDesign(){
            if(!this.designText){
                this.designText = !this.designText
                this.mainText= false
                this.codeText= false
            }
        },
        showMain(){
            if(!this.mainText){
                this.mainText = !this.mainText
                this.designText = false
                this.codeText = false
            }
        },
        showCode(){
            if(!this.codeText){
                this.codeText = !this.codeText
                this.mainText= false
                this.designText= false
            }
        },
        // switchText(text){
        //     let content = document.getElementById("content")
        //     content.classList.toggle("opacity-100")
        //     content.classList.toggle("opacity-0")
        //     setTimeout(function () {
        //         content.classList.toggle("opacity-0")
        //         content.classList.toggle("opacity-100");
        //         content.innerHTML = text
        //     }, 250);
        // },
        ...mapActions(['handleView'])
    },
    created(){
        this.handleView()
        window.addEventListener('resize',this.handleView);
    },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>