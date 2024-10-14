<script setup>
import avatar from '@/assets/avatar.png';

const props = defineProps({
  usuario: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="avaliacoes">
    <h1>Avaliações de {{ usuario.nome }}</h1>
    <div v-for="(avaliacao, index) in usuario.avaliacoes" :key="index" class="avaliacao">
      <p>{{ avaliacao.texto }}</p>
      <h2>{{ avaliacao.produtoNome }}</h2>
      <img :src="avaliacao.produtoImagem" alt="Imagem do produto" />
    </div>
  </div>
</template>

<style scoped>
.avaliacoes {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.avaliacao {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
