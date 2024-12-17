<template>
  <section class="promo-banner">
    aaa
    <div class="image"></div>
  </section>

  <section class="grid">
    <div class="row">
      <div v-for="item in 4" :key="'top-' + item" class="card">
        aa
      </div>
    </div>
    <div class="row">
      <div v-for="item in 4" :key="'bottom-' + item" class="card">
        aa
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePageLayout",
};
</script>

<style scoped>
.promo-banner {
  background-color: #585274;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  margin: 20px auto; 
  width: 90%;
  max-width: 1156px;
  height: 300px;
  box-sizing: border-box;
}

.promo-banner .image {
  width: 40%;
  float: right;
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
  background-color: #fff;
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
