<script setup>
import avatar from '@/assets/avatar.png';
const props = defineProps({
  usuario: Object, 
  foto: {
    type: String,
    default: avatar,
  },
});
</script>

<template>
  <div class="perfil">
    <img :src="foto" alt="Foto de perfil" class="foto-perfil" />
    <div class="info">
    </div>
    <h1>{{ usuario.nome }}</h1>


    <p> 2 avaliacoes </p>
  
  </div>
</template>

<style scoped>
div{
  margin-bottom: 150px;
}

.perfil {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.foto-perfil {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.info {
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .perfil {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
