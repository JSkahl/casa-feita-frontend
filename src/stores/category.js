import { ref } from 'vue'
import { defineStore } from 'pinia'

import CategoryService from '@/services/category'
const categoryService = new CategoryService()

export const useCategoryService = defineStore('categoria', () => {
    const category = ref ([]);
    
    async function getCategories() {
        category.value = await categoryService.getCategories()
    };

    return { category, getCategories }
})