<script setup>
</script>

<template>

  <section class="promo-banner">
    aaa
    <div class="image">
    </div>
  </section>

  <section class="grid">
    <div class="row">
      <div v-for="item in 4" :key="'top-' + item" class="card">
        aa
      </div>
    </div>
    <div class="row row-bottom">
      <div v-for="item in 4" :key="'bottom-' + item" class="card">
        aa
      </div>
    </div>
  </section>
</template>

<style scoped>

.promo-banner {
  background-color: #585274;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  margin: 20px auto;
  width: 1156px;
  height: 337px;
}

.promo-banner .image {
  width: 40%;
  float: right;
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px; 
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.row-bottom {
  margin-top: 10px; 
}

.card {
  background-color: #fff;
  border-radius: 8px;
  width: 237px;
  height: 393px;
}

@media (max-width: 768px) {
  .promo-banner {
    width: 90%;
    height: auto;
    padding: 15px;
    margin-top: 20px;
  }

  .promo-banner .image {
    display: none; 
  }

  .grid {
    gap: 20px;
    margin-top: 30px;
  }

  .row {
    flex-direction: column;
    gap: 15px;
  }

  .card {
    width: 90%;
    height: auto;
  }

  .row-bottom {
    margin-top: 20px;
  }
}
</style>
