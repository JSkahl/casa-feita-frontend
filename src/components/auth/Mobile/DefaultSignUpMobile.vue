<script setup>
</script>

<template>
    <main>
        <div class="form">
            <div class="cabecalho">
                <img src="../../../assets/logo.png" alt="">
                <h1>Bem-vindo a sua casa!</h1>
                <p>Por-favor, insira suas informações para registrar-se.</p>
            </div>

            <form>
                <div class="inputs">
                    <input type="text" placeholder="Nome">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Senha">
                    <input type="password" placeholder="Confirmar Senha">
                </div>
                <div class="login">
                    <button>Registre-se</button>
                </div>
            </form>

            <div class="registrar">
                <p>Já tem uma conta? <span><router-link to="/login">Entre</router-link></span>!</p>
            </div>
        </div>
    </main>
</template>
  
<style scoped>

main {
    display: flex;
    width: 100vw;
    height: 100vh;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(249, 248, 248);
}

.form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 2vw;
}

.cabecalho > img {
    margin: auto;
    width: 25vw;
    margin-bottom: 2vh;
}

.inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.inputs input {
    margin-bottom: 3vh;
    height: 6vh;
    width: 80vw;
    padding: 0 0 0 1vw;
    border: 0;
    border-bottom: 2px rgb(52, 52, 52) solid;
    background-color: rgb(249, 248, 248);
}

.additionals {
    display: flex;
    justify-content: space-between;
    padding: 1vh 0 0 0;
}

.login {
    display: flex;
    justify-content: center;
    margin-top: 8vh;
}

.login button {
    width: 60vw;
    height: 7vh;
    background-color: #585274;
    color: azure;
    font-size: x-large;
    font-weight: bolder;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

.login button:hover {
    background-color: #4a4560;
}

.cabecalho {
    display: flex;
    flex-direction: column;
    margin-bottom: 7vh;
}

p, h1 {
    font-family: "Judson", sans-serif;
    margin: 2vh 0 0 0;
    text-align: center;
    color: #18161e;
}

.registrar {
    margin-top: 20vh;
}

.registrar span {
    font-size: medium;
    font-weight: bold;
    color: #585274;
}
</style>