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
  <div class="profile">
    <img :src="foto" alt="Foto de profile" class="foto-profile" />
  </div>    
</template>

<style scoped>



</style>
