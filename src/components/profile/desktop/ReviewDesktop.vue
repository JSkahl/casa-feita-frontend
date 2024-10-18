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
