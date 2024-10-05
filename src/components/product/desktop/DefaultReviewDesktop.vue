<script setup>
import StarOutline from 'vue-material-design-icons/StarOutline.vue';
</script>

<template>
    <main>
        <div class="infos">
            <div class="user-info">
                <div class="avatar">
                    <img src="../../../assets/avatar.png">
                </div>
                <h1>Fabio Akita</h1>
            </div>
            <div class="rating">
                <star-outline :size="30"/>
                <p>4,7</p>
            </div>
        </div>
        <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt autem facilis, aperiam, natus tempore eum veritatis magnam doloremque eligendi, dolores harum asperiores incidunt itaque placeat voluptatibus quis deleniti in.</p>
        </div>
    </main>
</template>

<style>
main {
    margin: auto;
    padding: 1%;
    width: 75vw;
    background-color: #DEDEDE;
    border-radius: 20px;
}


.infos, .user-info {
    display: flex;
    align-items: center;
}

.infos {
    width: 28%;
    justify-content: space-between;
}

.rating {
    display: flex;
    align-items: center;
    font-size: x-large;
    font-weight: bold;
}

.description {
    padding-left: 4%;
}
</style>