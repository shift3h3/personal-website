<template>
    <div 
        class="bg-no-repeat bg-center bg-cover sm:mx-8 mx-5"
        :class="dataCardInfo.picture"
        style="border-radius:75px;"
    >
        <!-- three line heading -->
        <div class="text-center pt-10 pb-10 text-white">
            <h1 class="sm:text-7xl text-5xl font-bold px-2">{{dataCardInfo.mainHeading}}</h1>
            <h1 class="sm:text-4xl text-2xl">{{dataCardInfo.subHeading}}</h1>
            <h1 class="px-3">{{dataCardInfo.subSubHeading}}</h1>
        </div>
        <!-- END three line heading -->
        <!-- three buttons -->
        <div class= "text-center py-2 mx-16 rounded-3xl ">
            <h1 
                class="text-5xl font-extrabold cursor-pointer text-gray-100 transition-all duration-250 hover:text-gray-700 transform hover:scale-125"
                @click="switchText(dataCardInfo.mainText)"
                :class="{'hidden':!windowWidth}"
            >
                MH
            </h1>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-1 mb-2">
            <div class=" text-center sm:py-4 py-1">
                <div 
                    class="py-2 w-36 h-12 mx-auto text-xl rounded-3xl cursor-pointer text-gray-500 bg-gray-100 transition-all duration-250 hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-2xl"
                    @click="switchText(dataCardInfo.buttonOneText)"
                >
                    <h1 class="">{{dataCardInfo.buttonOne}}</h1>
                </div>
            </div>
            <div class= "text-center sm:py-2 mx-16 rounded-3xl ">
                <h1 
                    class="text-5xl font-extrabold cursor-pointer text-gray-100 transition-all duration-250 hover:text-gray-700 transform hover:scale-125"
                    @click="switchText(dataCardInfo.mainText)"
                    :class="{'hidden':windowWidth}"
                >
                    MH
                </h1>
            </div>
            <div class=" text-center sm:py-4 py-1">
                <div 
                    class="py-2 w-36 h-12 mx-auto text-xl rounded-3xl cursor-pointer text-gray-500 bg-gray-100 transition-all duration-250 hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-2xl"
                    @click="switchText(dataCardInfo.buttonTwoText)"
                >
                    <h1 class="">{{dataCardInfo.buttonTwo}}</h1>
                </div>
            </div>
        </div>
        <!-- END three buttons -->
        <!-- text -->
        <div class="text-center text-white md:text-2xl sm:text-xl text-lg sm:mx-20 mx-5 sm:py-10 py-5 h-96">
            <p id="content" class="transition-all duration-250 opacity-100">{{dataCardInfo.mainText}}</p>
        </div>
        <!-- END text -->
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    props: ['dataCardInfo'],
    data(){
        return{
            show: false,
            textDesign: "Design text im goin to add some more words so that i can see if things are changign in a weird way when i click on  goin to add some more words so that i can see if things are changign in a weird way when i click on the btton hopefully i can figure out how to do the annimations maybe i might have to look at the old ones",
            textMain: "MAIN text Design text im goin to add some more words so that i can see if things are changign in a weird way when i click on the btton hopefully i can figure out how to do the annimations maybe i might have to look at the old ones i made Design text im goin to add some more words so that i can see if things are changign in a weird way when i click on the btton hopefully i can figure out how to do the annimations maybe i might have to look at the old ones",
            textProgram: "Program text Design text im goin to add some more words so that i can see if things are changign in a weird way when io look at the old ones",
        }
    },
    computed: {
        ...mapGetters(['windowWidth'])
    },
    methods: {
        switchText(text){
            let content = document.getElementById("content")
            content.classList.toggle("opacity-100")
            content.classList.toggle("opacity-0")
            setTimeout(function () {
                content.classList.toggle("opacity-0")
                content.classList.toggle("opacity-100");
                content.innerHTML = text
            }, 250);
        },
        ...mapActions(['handleView'])
    },
    created(){
        this.handleView()
        window.addEventListener('resize',this.handleView);
    },
}
</script>

<style>

</style>