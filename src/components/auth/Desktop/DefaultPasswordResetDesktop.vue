<script setup></script>

<template>
    <div class="conteudo">

      <div class="container">
        <div class="form">
          <div class="cabecalho">
          <img src="../../../assets/logo.png" alt="" />
          <h1>Esqueceu sua senha?</h1>
          <p>
            Por-favor, insira seu email no campo abaixo para que possamos enviar um token de
            recuperação
          </p>
        </div>
        
        <form>
          <div class="inputs">
            <input type="email" placeholder="Email" />
          </div>
          <div class="submit">
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </template>

<style scoped>
.conteudo{
  position: absolute; 
  left: 50%; 
  top: 50%;
  transform: translate(-50%, -50%);
}
.container {
  width: 40vw;
  height: 60vh;
  box-shadow: 0px 0px 10px black;
  border-radius: 20px;
  background-color: rgb(249, 248, 248);
  display: flex;
  justify-content: center;
  align-items: center;
}


.form {
  display: flex;
  justify-content: center;
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
  background-color: rgb(249, 248, 248);
}

.submit {
  display: flex;
  justify-content: center;
  margin-top: 8vh;
}

.submit button {
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

.submit button:hover {
  background-color: #4a4560;
}

.cabecalho {
  display: flex;
  flex-direction: column;
  margin-bottom: 7vh;
}

p,
h1 {
  font-family: 'Judson', sans-serif;
  margin: 2vh 0 0 0;
  text-align: center;
}

.registrar span {
  font-weight: bold;
  color: #585274;
}
</style>
