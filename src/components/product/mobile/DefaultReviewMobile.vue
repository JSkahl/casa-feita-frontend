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
                <h3>Fabio Akita</h3>
            </div>
            <div class="rating">
                <star-outline :size="27"/>
                <p>4,7</p>
            </div>
        </div>
        <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt autem facilis, aperiam, natus tempore eum veritatis magnam doloremque eligendi, dolores harum asperiores incidunt itaque placeat voluptatibus quis deleniti in.</p>
        </div>
    </main>
</template>

<style scoped>
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

.user-info img {
    width: 80%;
}

.infos {
    width: 100%;
    justify-content: space-between;
}

.rating {
    display: flex;
    align-items: center;
    font-size: large;
    font-weight: bold;
}

.description {
    padding: 1%;
    text-align: justify;
    text-justify: inter-word;
    font-size: small;
}
</style>