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
    <div class="review-info">
      <img :src="props.foto" alt="Foto de perfil" class="foto-profile" />
      <div class="review-content">
        <div class="header">
          <h3>Fábio Akita</h3>
        </div>
        <p>Ótimo produto! Encaixou certinho no meu escritório. <br> Pretendo comprar mais! <br> Recomendo!!</p>
      </div>
    </div>
    <div class="review-info">
      <img :src="props.foto" alt="Foto de perfil" class="foto-profile" />
      <div class="review-content">
        <div class="header">
          <h3>Fábio Akita</h3>
        </div>
        <p>Ótimo produto! Encaixou certinho no meu escritório. <br> Pretendo comprar mais! <br> Recomendo!!</p>
      </div>
    </div>    
  </div>    
</template>

<style scoped>
.review-card {
  width: 90%;
  margin: 20px auto;
  box-sizing: border-box; 
}

.review-info {
  display: flex;
  align-items: flex-start;
  background-color: #f9f9f9; 
  padding: 5%; 
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
  margin-bottom: 10px; 
  flex: 1; 
}

.foto-profile {
  border-radius: 50%;
  width: 10%; 
  height: auto; 
  margin-right: 10px; 
}

.review-content {
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  flex-grow: 1; 
}

h3 {
    font-size: 20px; 
}

.header {
  display: flex;
  align-items: center; 
  margin-bottom: 8px;
}
</style>
