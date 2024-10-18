<script setup>
import avatar from '@/assets/avatar.png';

const props = defineProps({
  foto: {
    type: String,
    default: () => avatar 
  },
});
</script>

<template>
    <div class="review-card">
    <h1>Avaliações</h1>
      <div class="review-info">
        <img :src="props.foto" alt="Foto de profile" class="foto-profile" />
        <div>
          <h3>Fábio Akita</h3>
          <p>Ótimo produto! Encaixou certinho no meu escritório. Pretendo comprar mais! Recomendo!!</p>
        </div>
      </div>
      <div class="review-info">
        <img :src="props.foto" alt="Foto de profile" class="foto-profile" />
        <div>
          <h3>Fábio Akita</h3>
          <p>Ótimo produto! Encaixou certinho no meu escritório. Pretendo comprar mais! Recomendo!!</p>
        </div>
      </div>     
    </div>    
  </template>

<style scoped>

.review-info {
  display: flex;
  align-items: center;
  background-color: #f9f9f9; 
  padding: 40px; 
  width: 30%;
  border-radius: 10px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px; 
}

.foto-profile {
  border-radius: 50%;
  width: 50px; 
  height: 50px; 
  margin-right: 15px; 
}
</style>
