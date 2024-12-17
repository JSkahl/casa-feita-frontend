<script setup>
import ProfileViewDesktop from '@/components/profile/desktop/ProfileViewDesktop.vue';
import ProfileViewMedium from '@/components/profile/desktop/ProfileViewMedium.vue';
import ProfileViewMobile from '@/components/profile/mobile/ProfileViewMobile.vue';
import ReviewDesktop from '@/components/profile/desktop/ReviewDesktop.vue';
import ReviewMedium from '@/components/profile/desktop/ReviewMedium.vue';
import ReviewMobile from '@/components/profile/mobile/ReviewMobile.vue';
import ReviewProductDesktop from '@/components/profile/desktop/ReviewProductDesktop.vue';
import ReviewProductMedium from '@/components/profile/desktop/ReviewProductMedium.vue';
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

      <div v-else-if="breakpoint === 'md'">
          <ProfileViewMedium />
          <div class="reviews-container">
              <h1 class="avaliacoes-title">Avaliações</h1>
              <div class="review-card">
                  <div class="review-pair">
                      <ReviewMedium />
                      <ReviewProductMedium />
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
}

.review-pair {
  display: flex; 
  gap: 20px; 
  align-items: stretch; 
  width: 100%;
}

.review-pair > * {
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}

.avaliacoes-title {
  margin: 40px 0 10px;
  font-size: 30px; 
  font-weight: bold; 
}
</style>
