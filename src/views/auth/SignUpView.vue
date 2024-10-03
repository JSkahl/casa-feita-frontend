<script setup>
import DefaultSignUpMobile from '@/components/auth/Mobile/DefaultSignUpMobile.vue';
import DefaultSignUpDesktop from '@/components/auth/Desktop/DefaultSignUpDesktop.vue';

import { useScreen } from '@/composables/screen';

const { isMobile } = useScreen();
</script>

<template>
    <div v-if="isMobile" class="mobile">
        <DefaultSignUpMobile />
    </div>

    <div v-else class="desktop">
        <DefaultSignUpDesktop />
    </div>
</template>

<style scoped>
</style>