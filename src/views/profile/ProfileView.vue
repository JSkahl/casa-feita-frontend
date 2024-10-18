<script setup>
import ProfileViewDesktop from '@/components/profile/desktop/ProfileViewDesktop.vue';
import ProfileViewMobile from '@/components/profile/mobile/ProfileViewMobile.vue';
import ReviewDesktop from '@/components/profile/desktop/ReviewDesktop.vue';
import ReviewMobile from '@/components/profile/mobile/ReviewMobile.vue';
import ReviewProductDesktop from '@/components/profile/desktop/ReviewProductDesktop.vue';
import ReviewProductMobile from '@/components/profile/mobile/ReviewProductMobile.vue';

import { useMonitor } from '@/composables/monitor';

const { breakpoint } = useMonitor();
</script>

<template>
    <div class="profile">
      <div v-if="breakpoint === 'lg' || breakpoint === 'xl'">
        <ProfileViewDesktop />
        <div class="reviews-container">
          <h1 class="avaliacoes-title">Avaliações</h1>
          <div class="review-card">
            <div class="review-pair">
              <ReviewDesktop />
              <ReviewProductDesktop />
            </div>
          </div>
        </div>
      </div>
  
      <div v-else-if="breakpoint === 'sm' || breakpoint === 'xs'">
        <ProfileViewMobile />
        <ReviewMobile />
        <ReviewProductMobile />
      </div>
    </div>
</template>

<style scoped>
.reviews-container {
  padding: 30px 20px; 
}

.review-card {
  display: flex;
  flex-direction: column; 
  gap: 20px; 
  width: 100%;
  max-width: 1200px; 
}

.review-pair {
  display: flex; 
  gap: 20px; 
}

.avaliacoes-title {
  margin: 40px 0 10px;
  font-size: 30px; 
  font-weight: bold; 
}
</style>
