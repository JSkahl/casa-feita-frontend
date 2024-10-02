<script setup>
import isPortrait from "@/composables/orientation.js"
</script>

<template>
  <div v-if="isPortrait">Portrait</div>
  <div v-else>Landscape</div>
</template>

<style scoped>
</style>