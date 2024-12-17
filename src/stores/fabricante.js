import { ref } from 'vue';
import { defineStore } from 'pinia';

import FabricanteService from '@/services/fabricante';
const fabricanteService = new FabricanteService();

export const useFabricanteService = defineStore('fabricante', () => {
    const fabricantes = ref ([]);

    async function getProducers() {
        fabricantes.value = await fabricanteService.getProducers()
    };

    return { fabricantes, getProducers }
})