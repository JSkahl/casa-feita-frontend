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
  <div class="container">
    <div class="profile">
      <img :src="props.foto" alt="Foto de perfil" class="foto-profile" />
      <div class="info">
        <h2>Fábio Akita</h2>
        <h3 class="avaliacao">2 Avaliações</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20px auto;
}

.profile {
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 10px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  width: 100%; 
  padding: 10px; 
}

.foto-profile {
  border-radius: 50%;
  width: 25%; 
  height: auto; 
  max-width: 100px; 
  margin-right: 10px; 
}

.info {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  flex-grow: 1; 
}

.info h2 {
  margin: 0;
  font-size: 1.5rem;
  text-align: left; 
}

.avaliacao {
  margin: 0;
  font-size: 1rem;
  text-align: right; 
}

@media (max-width: 600px) {
  .info {
    flex-direction: column;
    align-items: center; 
    text-align: center; 
  }
  .avaliacao {
    margin-top: 5px; 
  }
}
</style>
