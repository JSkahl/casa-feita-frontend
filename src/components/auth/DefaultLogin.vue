<script setup>
import DesktopLogin from '@/components/auth';
import MobileLogin from '@/components/auth';

import { useScreen } from '@/composables';

const { isMobile } = useScreen();
</script>

<template>
    <component :is="isMobile ? MobileLogin : DesktopLogin" />
</template>