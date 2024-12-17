<script setup>
import StarOutline from 'vue-material-design-icons/StarOutline.vue';
</script>

<template>
    <main>
        <div class="image">
            <img src="../../../assets/cadeira.png">
        </div>

        <div class="infos">
            <h2>Cadeira Amarela</h2>
            <div class="price-rating">
                <p>R$27,00</p>
                <div class="rating">
                    <star-outline />
                    <p>4,7</p>
                </div>
            </div>
            <hr>

            <div class="description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, illo eius fugiat rerum magnam accusantium iusto numquam? Aliquam eveniet quaerat, consequuntur hic vel possimus neque. Quis odio ut possimus quisquam!</p>
            </div>

            <div class="colors">
                <h3>Cores</h3>
                <div class="color-palette">
                    <div class="color">

                    </div>
                    <div class="color">
                        
                    </div>
                    <div class="color">

                    </div>
                    <div class="color">

                    </div>
                </div>
            </div>

            <div class="quantity">
                <h3>Quantidade</h3>
                <div class="counter">
                    <button>—</button>
                        <p>X</p>
                    <button>+</button>
                </div>
            </div>

            <div class="buy">
                <button>Comprar</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background-color: #DEDEDE;
        padding: 4% 0 0 0;
    }

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 40%;
        background-color: #FEFFD0;
        border-radius: 20px;
    }

    .image img {
        width: 70%;
    }

    .infos {
        width: 80%;
        height: 70%;
    }

    .price-rating {
        display: flex;
        width: 50%;
        font-size: medium;
        font-weight: 500;
        justify-content: space-between;
    }

    .rating {
        display: flex;
    }

    .description {
        margin-bottom: 3%;
        text-align: justify;
        text-justify: auto;
        font-size: small;
    }

    .colors {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 15%;
    }

    .color-palette {
        background-color: #F1F1F1;
        width: 70%;
        height: 50%;
        border-radius: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .color {
        width: 15%;
        height: 75%;
        background-color: #BD9479;
        border-radius: 30px;
    }

    .quantity {
        height: 15%;
        margin: 3% 0 10% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .counter {
        background-color: #F1F1F1;
        width: 70%;
        height: 50%;
        border-radius: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1%;
    }

    .counter button {
        width: 18%;
        height: 92%;
        border: none;
        border-radius: 20px;
        background-color: #BEBEBE;
        font-size: x-large;
        font-weight: bold;
        color: white;
    }

    .counter p {
        font-size: xx-large;
        font-weight: bold;
    }

    .counter button:hover {
        background-color: #9a9a9a;
    }

    .buy {
        width: 100%;
        height: 35%;
        display: flex;
        justify-content: center;
    }

    .buy button {
        width: 70%;
        height: 30%;
        border: none;
        border-radius: 15px;
        font-size: x-large;
        font-weight: bolder;
        color: white;
        background-color: #585274;
    }

   .buy button:active {
        background-color: #4a4560;
    }
</style>