<script setup>
import DefaultProductDesktop from '@/components/product/desktop/DefaultProductDesktop.vue';
import DefaultReviewDesktop from '@/components/product/desktop/DefaultReviewDesktop.vue';
import DefaultProductMobile from '@/components/product/mobile/DefaultProductMobile.vue';
import DefaultReviewMobile from '@/components/product/mobile/DefaultReviewMobile.vue';

import { useScreen } from '@/composables/screen';

const { isMobile } = useScreen();
</script>

<template>
    <div class="mobile" v-if="isMobile">
        <DefaultProductMobile />

        <div class="reviews">
            <h2>Avaliações</h2>
            <DefaultReviewMobile />
        </div>
    </div>

    <div class="desktop" v-else>
        <DefaultProductDesktop />

        <div class="reviews">
            <h1>Avaliações</h1>
            <DefaultReviewDesktop />
        </div>
    </div>
</template>

<style scoped>
.reviews {
    margin-top: 1.5%;
}

.mobile .reviews {
    margin-bottom: 25%;
}

.reviews h1 {
    padding-left: 11.5%;
}
</style>