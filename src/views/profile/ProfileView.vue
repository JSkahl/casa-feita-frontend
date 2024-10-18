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
      <ReviewDesktop />
      <ReviewProductDesktop />
    </div>

    <div v-else-if="breakpoint === 'sm' || breakpoint === 'xs'">
      <ProfileViewMobile />
      <ReviewMobile />
      <ReviewProductMobile />
    </div>
  </div>
</template>

<style scoped>

    .profile{
        display: flex;
    }

</style>