<script setup>
import StarOutline from 'vue-material-design-icons/StarOutline.vue';
</script>

<template>
    <main>
        <div class="image">
            <img src="../../../assets/cadeira.png">
        </div>

        <div class="infos">
            <h1>Cadeira Amarela</h1>
            <div class="price-rating">
                <p>R$27,00</p>
                <div class="rating">
                    <star-outline />
                    <p>4,7</p>
                </div>
            </div>
            <hr>

            <div class="description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, illo eius fugiat rerum magnam accusantium iusto numquam? Aliquam eveniet quaerat, consequuntur hic vel possimus neque. Quis odio ut possimus quisquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, impedit voluptate porro quos repudiandae modi voluptatum atque deserunt adipisci nesciunt rerum hic dolore itaque cum quidem cupiditate ab? Qui, consequuntur!</p>
            </div>

            <div class="colors">
                <h2>Cores</h2>
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
                <h2>Quantidade</h2>
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
        justify-content: center;
        align-items: center;
        margin: auto;
        padding: 3%;
        width: 75vw;
        height: 75vh;
        background-color: #DEDEDE;
        border-radius: 20px;

    }

    .image {
        display: flex;
        justify-content: center;
        align-items: self-start;
        width: 45%;
        height: 80%;
        background-color: #FEFFD0;
        border-radius: 20px;
    }

    .image img {
        width: 60%;
    }

    .infos {
        padding: 1%;
        width: 50%;
        height: 85%;
    }

    .price-rating {
        display: flex;
        width: 25%;
        font-size: larger;
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
    }

    .colors {
        height: 15%;
    }

    .color-palette {
        background-color: #F1F1F1;
        width: 30%;
        height: 50%;
        border-radius: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .color {
        width: 18%;
        height: 75%;
        background-color: #BD9479;
        border-radius: 30px;    margin: 0;

    }

    .quantity {
        height: 15%;
        margin: 3% 0 10% 0;
    }

    .counter {
        background-color: #F1F1F1;
        width: 30%;
        height: 40%;
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
    }

    .buy button {
        width: 35%;
        height: 25%;
        border: none;
        border-radius: 15px;
        font-size: x-large;
        font-weight: bolder;
        color: white;
        background-color: #585274;
    }
    
</style>