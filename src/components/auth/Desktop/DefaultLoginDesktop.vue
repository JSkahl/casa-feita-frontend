<script setup>
</script>

<template>
    <main>
        <div class="form">
            <div class="cabecalho">
                <img src="../../../assets/logo.png" alt="">
                <h1>Bem-vindo de volta!</h1>
                <p>Por favor, insira suas informações</p>
            </div>

            <form>
                <div class="inputs">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Senha">
                </div>
                <div class="additionals">
                    <div class="checkbox-wrapper-23">
                        <input type="checkbox" id="check-23"/>
                        <label for="check-23" style="--size: 30px">
                        <svg viewBox="0,0,50,50">
                            <path d="M5 30 L 20 45 L 45 5"></path>
                        </svg>
                        </label>
                        <p>Lembrar conta</p>
                    </div>
                    <p>Esqueceu a senha?</p>
                </div>
                <div class="login">
                    <button>Login</button>
                </div>
            </form>

            <div class="registrar">
                <p>Não tem uma conta? <span>Registre-se</span>!</p>
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
    display: flex;
    justify-content: space-between;
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
    width: 6vw;
    margin-bottom: 2vh;
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

.checkbox-wrapper-23 {
    display: flex;
    align-items: center;
    width: 8vw;
    justify-content: space-between;
}

.checkbox-wrapper-23 *, .checkbox-wrapper-23 *:after, .checkbox-wrapper-23 *:before {
  box-sizing: border-box;
}

.checkbox-wrapper-23 input {
  position: absolute;
  opacity: 0;
}
  
.checkbox-wrapper-23 input:checked + label svg path {
  stroke-dashoffset: 0;
}
  
.checkbox-wrapper-23 input:focus + label {
  transform: scale(1.03);
}

.checkbox-wrapper-23 input + label {
  display: block;
  border: 2px solid rgb(52, 52, 52);
  width: 1.2vw;
  height: 2.3vh;
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s ease;
}
  
.checkbox-wrapper-23 input + label:active {
  transform: scale(1.05);
  border-radius: 8px;
}
  
.checkbox-wrapper-23 input + label svg {
  pointer-events: none;
  padding: 5%;
}

.checkbox-wrapper-23 input + label svg path {      
  fill: none;     
  stroke: #333;
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 101;
  transition: all 250ms cubic-bezier(1,0,.37,.91);
}

.additionals p {
    margin: 0;
    font-size: small;
}


.login {
    display: flex;
    justify-content: center;
    margin-top: 8vh;
}

.login button {
    width: 14vw;
    height: 6vh;
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
}

.registrar {
    margin-top: 22vh;
}

.registrar span {
    font-weight: bold;
    color: #585274;
}
</style>