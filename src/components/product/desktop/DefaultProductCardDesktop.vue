<script setup>
import { onMounted, watch } from 'vue';

import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import StarOutline from 'vue-material-design-icons/StarOutline.vue';

import { useProductStore } from '@/stores/product';

const props = defineProps(['category_id']);
const productStore = useProductStore();

async function getProducts() {
    if (props.category_id) {
        await productStore.getProductsByCategory(props.category_id);
    } else {
        await productStore.getProducts();
    }
}

watch(() => props.category_id, async () => {
    await getProducts();
});


onMounted(async () => {
    await getProducts();
});

</script>

<template>
    {{ productStore.nome }}
    <div class="card">
        <div class="card-content">
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
                <h3>{{productStore.nome}}</h3>

                <div class="rating">
                    <star-outline :size="25"/>

                    <p>4,6</p>
                </div>

                <p>R$27,00</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
.card {
    width: 14%;
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FEFFD0;
    width: 14vw;
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
    width: 35%;
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
    width: 3vw;
    height: 5.7vh;
    margin: 0 0 0 50%;
    border-radius: 50%;
    border: none;
    background-color: #EE7F5A;
    font-size: x-large;
    font-weight: bolder;
    color: #FEFFD0;
    box-shadow: 0px 5px 6px #d77453;
    cursor: pointer;
}

.add button:hover {
    background-color: #d06e4e;
}
</style>