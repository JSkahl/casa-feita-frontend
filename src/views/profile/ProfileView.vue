<script setup>
import { useDeviceType } from '@/composables/useDeviceType';
import avatar from '@/assets/avatar.png';
import ProfileViewDesktop from '@/components/profile/Desktop/ProfileViewDesktop.vue';
import ProfileViewMobile from '@/components/profile/Mobile/ProfileViewMobile.vue';
import ReviewedProductDesktop from '@/components/reviewedProduct/Desktop/ReviewedProductDesktop.vue';
import ReviewedProductMobile from '@/components/reviewedProduct/Mobile/ReviewedProductMobile.vue';
import ReviewDesktop from '@/components/review/Desktop/ReviewDesktop.vue';
import ReviewMobile from '@/components/review/Mobile/ReviewMobile.vue';

const { isMobile } = useDeviceType();

const usuario = {
  nome: "Fábio Akita",
  foto: avatar,
  produtosRevisados: [
    {
      nome: "Cadeira almofadada",
      imagem: "link-para-imagem.jpg",
    },
    {
      nome: "Mesa de escritório",
      imagem: "link-para-imagem2.jpg",
    }
  ]
};
</script>

<template>
  <div class="profile-view">
    <ProfileViewMobile v-if="isMobile" :usuario="usuario" />
    <ProfileViewDesktop v-else :usuario="usuario" />

    
    <div class="review-section">
      <ReviewMobile v-if="isMobile" :usuario="usuario" />
      <ReviewDesktop v-else :usuario="usuario" />
    </div>

    <div class="reviewed-product-section">
      <ReviewedProductMobile 
        v-if="isMobile" 
        v-for="(produto, index) in usuario.produtosRevisados" 
        :key="`${index}-${produto.nome}`"
        
      />
      <ReviewedProductDesktop 
        v-else 
        v-for="(produto, index) in usuario.produtosRevisados" 
        :key="`${index}-${produto.nome}`"
        
      />
    </div>
    
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .profile-header {
    flex-direction: column; 
    align-items: flex-start; 
  }

  .profile-header img {
    margin-bottom: 1rem; 
  }
}
</style>
