<script setup>
import { useScreen } from '@/composables/screen';

const { isMobile } = useScreen()

import DefaultPasswordResetMobile from '@/components/auth/Mobile/DefaultPasswordResetMobile.vue';
import DefaultPasswordReset from '@/components/auth/Desktop/DefaultPasswordResetDesktop.vue';
</script>

<template>
    <div v-if="isMobile" class="mobile">
        <DefaultPasswordResetMobile />
    </div>

    <div v-else class="desktop">
        <DefaultPasswordReset />
    </div>

    <RouterView />
</template>