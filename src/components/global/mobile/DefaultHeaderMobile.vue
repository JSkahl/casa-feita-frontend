<script setup>
import CartOutline from 'vue-material-design-icons/CartOutline.vue';
import CogOutline from 'vue-material-design-icons/CogOutline.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue'
</script>

<template>
    <header>
        <div class="icons">
            <div class="left">
                <heart-outline :size="40"/>
                <cart-outline :size="40"/>
            </div>
                <div class="center">
                    <img src="/public/logo.png" alt="">
                </div>
            <div class="right">
                <magnify :size="40"/>
                <cog-outline :size="40"/>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 95%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 2.5%;
    bottom: 1%;
    align-items: center;
    height: 8vh;
    border-radius: 10px;
    box-shadow: 0 0 7px black;
    background-color: #F1F1F1;
}

.icons {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.left, .right {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.center {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

img {
    width: 12vw;
}
</style>