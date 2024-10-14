<script setup>
const props = defineProps({
  name: String,
  image: String,
});
</script>

<template>
  <div class="product">
    <img :src="image" alt="Product Image" class="product-image" />
    <div class="product-info">
      <p>{{ name }}</p>
      <p>⭐⭐⭐⭐⭐</p>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.product-info {
  display: flex;
  flex-direction: column;
}
</style>
