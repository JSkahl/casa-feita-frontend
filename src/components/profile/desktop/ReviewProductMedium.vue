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
            <star-outline :size="24" />
            <star-outline :size="24" />
            <star-outline :size="24" />
            <star-outline :size="24" />
            <star-outline :size="24" />
          </div>
          <button class="product-button">Ver</button>
        </div>
      </div>
      <div class="review-product">
        <img :src="props.foto" alt="Foto da cadeira" class="foto-cadeira" />
        <div class="product-details">
          <h3>Cadeira almofadada</h3>
          <div class="stars">
            <star-outline :size="24" />
            <star-outline :size="24" />
            <star-outline :size="24" />
            <star-outline :size="24" />
            <star-outline :size="24" />
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
  width: 100%;
}

.review-product {
  display: flex; 
  align-items: flex-start;
  background-color: #f9f9f9; 
  padding: 4%; 
  border-radius: 10px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  margin-bottom: 20px; 
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  margin-left: 15px;
  height: 150px; 
}

.foto-cadeira {
  border-radius: 10%;
  width: 130px; 
  height: 130px; 
}

.product-details h3 {
  font-size: 18px; 
}

.stars {
  display: flex;
  align-items: center;
}

.product-button {
  background-color: #2f28b4; 
  color: white;
  border: none;
  padding: 8px 16px; 
  border-radius: 10px; 
  font-size: 14px;
  cursor: pointer;
  width: 130px; 
  text-align: center;
}
</style>
