<script setup>
import cadeira from '@/assets/cadeira.png';

const props = defineProps({
  foto: {
    type: String,
    default: () => cadeira 
  },
});
</script>

<template>  
  <div class="review-product">
    <img :src="props.foto" alt="Foto da cadeira" class="foto-cadeira" />
      <p>Cadeira almofadada</p>
      <button>Ver</button>
  </div>
  <div class="review-product">
    <img :src="props.foto" alt="Foto da cadeira" class="foto-cadeira" />
      <p>Cadeira almofadada</p>
      <button>Ver</button>
  </div>
</template>

<style scoped>



</style>
