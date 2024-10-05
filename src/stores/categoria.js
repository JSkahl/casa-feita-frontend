import { ref } from 'vue'
import { defineStore } from 'pinia'

import CategoriaService from '@/services/categoria'
const categoriaService = new CategoriaService()

export const useCategoriaService = defineStore('categoria', () => {
    const categorias = ref ([]);
    
    async function getCategories() {
        categorias.value = await categoriaService.getCategories()
    };

    return { categorias, getCategories }
})