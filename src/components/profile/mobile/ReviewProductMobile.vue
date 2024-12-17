<script setup>
import cadeira from '@/assets/cadeira.png';
import StarOutline from 'vue-material-design-icons/StarOutline.vue';

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
      <div class="product-details">
        <h3>Cadeira almofadada</h3>
        <div class="stars">
          <star-outline :size="20" /> 
          <star-outline :size="20" />
          <star-outline :size="20" />
          <star-outline :size="20" />
          <star-outline :size="20" />
        </div>
        <button class="product-button">Ver</button>
      </div>
    </div>
    <div class="review-product">
      <img :src="props.foto" alt="Foto da cadeira" class="foto-cadeira" />
      <div class="product-details">
        <h3>Cadeira almofadada</h3>
        <div class="stars">
          <star-outline :size="20" />
          <star-outline :size="20" />
          <star-outline :size="20" />
          <star-outline :size="20" />
          <star-outline :size="20" />
        </div>
        <button class="product-button">Ver</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-products-container {
  display: flex; 
  flex-direction: column;
  width: 90%;
  margin: 20px auto;
}

.review-product {
  display: flex; 
  align-items: flex-start;
  background-color: #f9f9f9; 
  padding: 5%; 
  border-radius: 10px; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
  margin-bottom: 20px; 
  flex: 1;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  margin-left: 10px; 
  height: 120px; 
}

.foto-cadeira {
  border-radius: 10%;
  width: 100px; 
  height: 100px; 
}

.product-details h3 {
  font-size: 16px; 
}

.stars {
  display: flex;
  align-items: center;
}

.product-button {
  background-color: #2f28b4; 
  color: white;
  border: none;
  padding: 8px 10px; 
  border-radius: 10px; 
  font-size: 12px; 
  cursor: pointer;
  width: 100px; 
  text-align: center;
}
</style>
