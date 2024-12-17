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
      <div class="header">
        <img :src="props.foto" alt="Foto de perfil" class="foto-profile" />
        <div class="info">
          <h2>Fábio Akita</h2>
          <h3>2 Avaliações</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile {
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  padding: 3%;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%; 
  max-width: 1200px; 
}

.header {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
}

.foto-profile {
  border-radius: 50%;
  width: 8vw;
  height: 8vw; 
  min-width: 80px; 
  min-height: 80px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.info h2 {
  margin: 0;
  font-size: 2rem;
}

.info h3 {
  margin: 0;
  font-size: 1.4rem;
}

@media (max-width: 768px) {
  .profile {
    padding: 5%;
    width: 95%; 
  }

  .foto-profile {
    width: 10vw; 
    height: 10vw;
  }

  .info h2 {
    font-size: 1.6rem;
  }

  .info h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .profile {
    padding: 5%;
    width: 100%;
  }

  .foto-profile {
    width: 15vw;
    height: 15vw;
  }

  .info h2 {
    font-size: 1.4rem;
  }

  .info h3 {
    font-size: 1rem;
  }
}
</style>
