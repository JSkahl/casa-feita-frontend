<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  usuario: Object,
});
</script>

<template>
  <div class="profile-view-mobile">
    <div class="profile-header">
      <img :src="usuario.foto" alt="Avatar" />
      <h1>{{ usuario.nome }}</h1>
    </div>  
    <div class="lista-avaliacoes">
      <div class="avaliacao" v-for="(avaliacao, index) in usuario.avaliacoes" :key="index">
        <h2>{{ avaliacao.produtoNome }}</h2>
        <p>{{ avaliacao.texto }}</p>
        <img :src="avaliacao.produtoImagem" alt="Imagem do Produto" />
      </div>  
    </div>  
  </div>    
</template>

<style scoped>
.profile-view-mobile {
  /* Adicione seu estilo específico para a versão mobile aqui */
}  
</style>


