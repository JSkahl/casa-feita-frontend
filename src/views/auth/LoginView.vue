<script setup>
import { useScreen } from '@/composables/screen';

const { isMobile } = useScreen()

import DefaultLoginMobile from '@/components/auth/Mobile/DefaultLoginMobile.vue';
import DefaultLoginDesktop from '@/components/auth/Desktop/DefaultLoginDesktop.vue';
</script>

<template>
    <div v-if="isMobile" class="mobile">
        <DefaultLoginMobile />
    </div>

    <div v-else class="desktop">
        <DefaultLoginDesktop />
    </div>

    <RouterView />
</template>