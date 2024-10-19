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
  gap: 30px; 
  width: 100%; 
}

.review-product {
  display: flex;
  align-items: center;
  background-color: #f9f9f9; 
  padding: 40px; 
  border-radius: 10px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  flex: 1; 
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  flex-grow: 1; 
}

.foto-cadeira {
  border-radius: 10%;
  width: 100px; 
  height: 100px; 
}

.product-details h3 {
  font-size: 17px;
}

.stars {
  display: flex;
  align-items: center;
}

.product-button {
  background-color: #2f28b4; 
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  width: 150px;
  text-align: center;
}
</style>

