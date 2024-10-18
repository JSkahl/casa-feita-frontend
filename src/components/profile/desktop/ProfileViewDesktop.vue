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
  <div class="profile-container">
    <img :src="props.foto" alt="Foto de profile" class="foto-profile" />
    <div class="profile-info">
      <h2>Fábio Akita</h2>
      <p>2 Avaliações</p>
    </div>
  </div>    
</template>

<style scoped>



</style>
