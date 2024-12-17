<script setup>
import CardHomeMobile from './mobile/CardHomeMobile.vue';
import CardHomeDesktop from './desktop/CardHomeDesktop.vue';

import { useScreen } from '@/composables/screen';

const { isMobile } = useScreen();

</script>

<template>
    <CardHomeMobile v-if="isMobile"/>
    <CardHomeDesktop v-else />
</template>