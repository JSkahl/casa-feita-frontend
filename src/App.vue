<script setup>
import DefaultHeaderDesktop from './components/global/desktop/DefaultHeaderDesktop.vue';
</script>

<template>
  <DefaultHeaderDesktop v-if="$route.name != 'login' &&  $route.name != 'register'"/>
  <RouterView />
</template>

<style scoped>
</style>
