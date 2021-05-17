<template>
    <div class="content bg-gray-100 mt-5 rounded-3xl p-5 justify-center overflow-hidden shadow-xl transition-all duration-250 hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-2xl">
        <!-- card picture -->
        <div 
            class="relative w-full rounded-3xl bg-no-repeat bg-center bg-cover lg:h-48 md:h-72 h-48 shadow-xl"
            :class="dataCardInfo.picture"
        >
            <div class="absolute w-full lg:bottom-5 md:bottom-10 bottom-4">
                <div class="justify-center items-center text-white lg:text-3xl md:text-7xl sm:text-5xl text-4xl font-bold text-center">
                <h1>{{dataCardInfo.company}}</h1>
                </div>
            </div>
        </div>
        <!-- END card picture -->
        <!-- card text -->
        <div class="card w-full text-gray-700">
            <div class="rounded-3xl">
            </div>
            <div class="">
                <h1 class="text-2xl text-center pt-8 pb-4 lg:h-28">{{dataCardInfo.department}}</h1>
                <p class="text-md text-center pb-2">
                    {{dataCardInfo.title}}
                </p>
            </div>
        </div>
        <!-- END card text -->
    </div>
</template>

<script>
export default {
    props: ['dataCardInfo'],
    data(){
        return {
        }
    }
}
</script>

<style>
.content:hover .card{
    color:black;
}
</style>