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
          <img :src="props.foto" alt="Foto de profile" class="foto-profile" />
          <div class="review-content">
              <div class="header">
                  <h3>Fábio Akita</h3>
              </div>
              <p>Ótimo produto! Encaixou certinho no meu escritório. <br> Pretendo comprar mais! <br> Recomendo!!</p>
          </div>
      </div>
      <div class="review-info">
          <img :src="props.foto" alt="Foto de profile" class="foto-profile" />
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
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  box-sizing: border-box; 
  flex: 1;
}

.review-info {
  background-color: #f9f9f9; 
  padding: 35px; 
  border-radius: 10px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex; 
  align-items: center; 
}

.foto-profile {
  border-radius: 50%;
  width: 100px;
  height: 100px; 
  margin-right: 15px;
}

.review-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}

h3 {
  font-size: 24px;
}

.header {
  margin-bottom: 10px;
}
</style>
