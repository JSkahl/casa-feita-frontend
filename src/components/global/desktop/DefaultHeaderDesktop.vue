<script setup>
import CartOutline from 'vue-material-design-icons/CartOutline.vue';
import CogOutline from 'vue-material-design-icons/CogOutline.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';
</script>

<template>
    <header>
        <div class="logo">
            <img src="/src/assets/logo-header.png" alt="Logo">
        </div>

        <div class="pesquisa">
            <input type="text" placeholder="Pesquise...">
            <button><magnify class="search-icon" /></button> 
        </div>

        <div class="opcoes">
            <div class="icons">
                <heart-outline :size="35"/>
                <cart-outline :size="35"/>
                <cog-outline :size="35"/>
            </div>

            <router-link class="unlogged" to="/login">
                <account-circle-outline :size="40" />
                <p>Login</p>
            </router-link>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-around;
    align-items: center;
    padding: 0 2vw; 
    background-color: #F1F1F1;
    height: 8vh;
    width: 100%;
    box-shadow: 0 0 7px black;
}

.logo img {
    max-width: 65%;
    max-height: 80%; 
    height: auto; 
}

.opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto; 
    gap: 2vh;
    
}

.pesquisa {
    display: flex;
    justify-content: space-between; 
    align-self: center;
    width: 40vw; 
    max-width: 300px; 
    height: 55%;
}

.pesquisa input {
    width: 80%;
    background-color: #D7D7D7;
    padding: 0 2%;
    border: 0;
    border-radius: 20px 0 0 20px;
    max-width: 100%; 
}

.pesquisa button {
    display: flex;
    justify-content: center; 
    border-radius: 0 20px 20px 0;
    border: none;
    background-color: #EE7F5A;
    color: white;
    width: 25%; 
    cursor: pointer;
    height: 100%; 
}

.pesquisa button:hover {
    background-color: #c4694b;
}

.search-icon {
    max-width: 50%; 
    max-height: 50%;
}

.unlogged {
    display: flex;
    align-items: center;
    text-decoration: none; 
    color: black; 
}

.unlogged:hover {
    color: #e42e2e; 
}

.unlogged p {
    padding: 0 0 0 10px;
    font-size: larger;
    font-weight: bold;
}

.icons {
    width: auto; 
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    gap: 2vh;

}

@media (max-width: 768px) {
    header {
        flex-direction: column; 
        align-items: flex-start; 
    }

    .pesquisa {
        width: 90vw; 
    }

    .opcoes {
        width: 100%; 
        justify-content: space-between;
    }

    .unlogged p {
        font-size: medium; 
    }
}

@media (max-width: 480px) {
    .pesquisa {
        flex-direction: column; 
        width: 100%; 
    }

    .pesquisa input {
        width: 100%;
    }

    .pesquisa button {
        width: 100%; 
        margin-top: 10px; 
    }

    .icons {
        flex-direction: column; 
    }
}
</style>
