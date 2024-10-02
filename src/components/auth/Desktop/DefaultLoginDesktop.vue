<script setup>
</script>

<template>
    <main>
        <div class="form">
            <img src="/public/logo.png" alt="">
            <h1>Bem-vindo de volta!</h1>
            <p>Por favor, insira suas informações</p>

            <form>
                <div class="inputs">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Senha">
                </div>
                <div class="additionals">
                    <span>
                    <div class="checkbox">
                        <input type="checkbox">
                    </div>
                    <label>Lembrar conta</label>
                    </span>
                    <p>Esqueceu a senha?</p>
                </div>
                <button>Login</button>
            </form>

            <div class="registrar">
                <p>Não tem uma conta? Registre-se</p>
            </div>
        </div>
    </main>
</template>

<style scoped>

main {
    width: 30vw;
    height: 96vh;
    box-shadow: 0px 0px 10px black;
    border-radius: 20px;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    padding: 2vw;
}

.form > img {
    margin: auto;
    width: 6vw;
}

.inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.inputs input {
    margin-bottom: 2vh;
    height: 4vh;
    width: 20vw;
    padding: 0 0 0 1vw;
    border: 0;
    border-bottom: 2px rgb(52, 52, 52) solid;
}

.additionals {
    display: flex;
    justify-content: space-between;
    padding: 1vh 0 0 0;
}

.checkbox {
    height: 2.2vh;
    width: 1vw;
    padding: 0;
    margin: 0;
    border: 2px rgb(52, 52, 52) solid;
    border-radius: 5px;
    cursor: pointer;
}

.checkbox input {
    margin: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
}

.checkbox:checked .checkbox {
    background-color: aqua;
}


.additionals p {
    margin: 0;
}

</style>