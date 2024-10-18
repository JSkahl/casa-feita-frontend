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
    <div class="review-products-container">
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
    </div>
  </template>
  
  <style scoped>
  .review-products-container {
    display: flex; 
    flex-direction: column; 
  }
  
  .review-product {
    background-color: #f9f9f9; 
    padding: 40px; 
    width: 100%; 
    max-width: 400px; 
    border-radius: 10px; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
    margin-bottom: 15px; 
    text-align: center; 
  }
  
  .foto-cadeira {
    width: 100px; 
    height: auto; 
  }
  </style>
  