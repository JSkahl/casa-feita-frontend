<script setup>
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import StarOutline from 'vue-material-design-icons/StarOutline.vue'
</script>

<template>
        <div class="card">
            <div class="fav-promo">
                <div class="promo-card">
                    <p>10% off</p>
                </div>
            </div>
        
            <div class="image">
                <img src="/src/assets/cadeira.png" alt="">
            </div>
        
            <div class="infos">
                <h4>Titulo</h4>

                <div class="rating">
                    <star-outline :size="25"/>

                    <p>4,6</p>
                </div>

                <p>R$27,00</p>
            </div>

        </div>
</template>

<style scoped>
.card {
    width: 14%;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FEFFD0;
    width: 40vw;
    height: 30vh;
    border-radius: 15px;
    padding: 2%;
}

.fav-promo {
    display: flex;
    justify-content: flex-start;
}

.promo-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EE7F5A;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    width: 45%;
    font-size: small;
}

.image {
    display: flex;
    justify-content: center;
}

.image img {
    width: 80%;
}

.infos {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 25%;
}

.rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.infos p {
    font-size: medium;
    font-weight: 400;
}
</style>