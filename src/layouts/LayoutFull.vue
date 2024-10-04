<script setup>
import { useLayout } from '@/composables/layout';
const { layout } = useLayout();
</script>
<template>
   <component :is="layout" />
   <main>
    <router-view />
   </main>
</template>