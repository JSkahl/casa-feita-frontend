import { ref } from 'vue';
import { defineStore } from 'pinia';

import CorService from '@/services/cor';
const corService = new CorService();

export const useCorService = defineStore('cor', () => {
    const cores = ref ([]);

    async function getColors() {
        cores.value = await corService.getColors()
    };

    return { cores, getColors };
})