<template>
<div 
    class="menu-btn mt-1" 
    :class="{'open':!dataBurgar}"
    @click="menuOpen"
>
    <div class="menu-btn__burger"></div>
</div>
</template>

<script>
export default {
    props: ['dataBurgar'],
    data(){
        return{
            isOpen: false,
        }
        
    },
    methods: {
        menuOpen() {
            if (this.isOpen === false){
                this.isOpen = true
            } else {
                this.isOpen = false
            }
        }
    },
}
</script>
<style>
.menu-btn {
    margin-left:90%;
    overflow: hidden;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 50px;
    cursor: pointer;
    transition: all .5s ease-in-out;
}
.menu-btn__burger {
    width: 40px;
    height:6px;
    background: white;
    border-radius: 5px;
    transition: all .5s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 6px;
    background: white;
    border-radius: 5px;
    transition: all .5s ease-in-out;
}
.menu-btn__burger::before {
    transform: translateY(-10px);
}
.menu-btn__burger::after {
    transform: translateY(10px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
    transform: translateX(-30px);
    background: transparent;
    box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(25px, -25px);
    background:black;
}
.menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(25px, 25px);
    background:black;
}
</style>