<script setup>
</script>

<template>
    <main>
        <div class="form">
            <img src="/public/logo.png" alt="">
        <h1>Bem-vindo de volta!</h1>
        <h3>Por favor, insira suas informações</h3>

        <form>
            <input class="input" type="email" placeholder="Email">
            <input class="input" type="password" placeholder="Senha">
            <input class="checkbox" type="checkbox" name="forget">
            <label for="forget">Lembrar conta</label>
            <p>Esqueceu a senha?</p>
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
    width: 35vw;
    height: 96vh;
    box-shadow: 0px 0px 10px black;
    border-radius: 20px;
}

.form {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2vw;
}

.form > img {
    margin: auto;
    width: 6vw;
}

</style>