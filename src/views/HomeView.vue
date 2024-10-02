<script setup>
import { useOrientation } from "@/composables/orientation.js"

const { isPortrait } = useOrientation()
</script>

<template>
  <div v-if="isPortrait">Portrait</div>
  <div v-else>Landscape</div>
</template>

<style scoped>
</style>