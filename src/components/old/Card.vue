<template>
<!-- Card -->
<div class="bg-cusblue-700 my-10 mx-5 p-4 rounded-3xl">
    <!-- card title -->
    <div class=" flex justify-center items-center text-7xl text-white pt-5 pb-10">
        <h1>{{dataCard.mainHeading}}</h1>
    </div>
    <!-- END card title -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4 bg-white rounded-3xl shadow-md">
        <!-- card picture -->
        <div class="bg-red-500 p-2 rounded-3xl h-96 uofa bg-no-repeat bg-center bg-cover">
        </div>
        <!-- END card picture -->
        <!-- card text -->
        <div class="bg-cusblue-700 p-2 rounded-3xl text-white font-bold shadow-lg">
        <h1 class="text-xl text-center">{{dataCard.subHeading}}</h1>
        <div class="text-center" v-for="text in dataCard.texts" :key="text">
            <br>
            <h1 class="text-xl text-center">{{text.textHeading}}</h1>
            <p>{{text.textContent}}</p>
        </div>
        </div>
        <!-- END card text -->
    </div>
</div>
</template>

<script>
export default {
    props:['dataCard'],
}
</script>

<style>

</style>