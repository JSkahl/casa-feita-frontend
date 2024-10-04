<script setup>
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import StarOutline from 'vue-material-design-icons/StarOutline.vue'
</script>

<template>
    <div class="card">
        <div class="fav-promo">
            <div class="promo">
                <p>10% off</p>
            </div>

            <heart-outline />
        </div>
        
        <div class="image">
            <img src="/src/assets/cadeira.png" alt="">
        </div>
        
        <div class="infos">
            <h3>Titulo</h3>

            <div class="rating">
                <star-outline :size="25"/>

                <p>4,6</p>
            </div>

            <p>R$27,00</p>
        </div>

        <div class="add">
            <button>+</button>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FEFFD0;
    width: 14%;
    height: 40vh;
    border-radius: 15px;
    padding: 1%;
}

.fav-promo {
    display: flex;
    justify-content: space-between;
}

.promo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EE7F5A;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    width: 30%;
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
    width:20%;
    font-weight: bold;
}

.infos p {
    font-weight: bold;
}

.add button {
    width: 20%;
    height: 100%;
}
</style>