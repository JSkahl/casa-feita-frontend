<script setup>
import DesktopSignUp from '@/components/auth';
import MobileSignUp from '@/components/auth';

import { useScreen } from '@/composables';

const { isMobile } = useScreen();
</script>

<template>
    <component :is="isMobile ? MobileSignUp : DesktopSignUp" />
</template>