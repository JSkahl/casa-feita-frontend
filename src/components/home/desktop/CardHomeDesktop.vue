<script>
import { ref } from 'vue';
import banner from '@/assets/banner.png'; 
import DefaultProductCardDesktop from "../../product/desktop/DefaultProductCardDesktop.vue"; 

export default {
  name: "HomePageLayout",
  components: {
    DefaultProductCardDesktop, 
  },
  setup() { 
    const bannerImage = ref(banner); 

    return {
      bannerImage,
    };
  },
};
</script>

<template>
  <section class="promo-banner">
    <div class="image">

      <img :src="bannerImage" alt="Banner" class="banner-image" />
    </div>
  </section>

  <section class="grid">
    <div class="row">
      <div v-for="item in [1, 2, 3, 4]" :key="'top-' + item" class="card">
        <DefaultProductCardDesktop />
      </div>
    </div>
    <div class="row">
      <div v-for="item in [1, 2, 3, 4]" :key="'bottom-' + item" class="card">
        <DefaultProductCardDesktop />
      </div>
    </div>
  </section>
</template>

<style scoped>
.promo-banner {
  background-color: #585274;
  border-radius: 20px;
  padding: 0;
  margin: 20px auto;
  width: 90%;
  max-width: 1156px;
  height: 400px;
  box-sizing: border-box;
}

.promo-banner .image {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.promo-banner .image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 0 20px;
}

.row {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background-color: #FEFFD0;
  border-radius: 8px;
  width: 237px;
  height: 313px;
}

@media (max-width: 1200px) {
  .promo-banner {
    width: 90%;
    padding: 20px;
  }

  .card {
    width: 237px;
    height: 313px;
  }
}

@media (max-width: 900px) {
  .promo-banner {
    width: 90%;
    padding: 20px;
  }

  .row {
    justify-content: space-between;
  }

  .card {
    width: 45%;
    height: 313px;
  }
}

@media (max-width: 600px) {
  .promo-banner {
    width: 90%;
    padding: 15px;
  }

  .row {
    justify-content: center;
  }

  .card {
    width: 90%;
    height: 250px;
  }
}
</style>
