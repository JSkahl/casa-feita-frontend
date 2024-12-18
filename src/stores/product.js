import { ref } from "vue";
import { defineStore } from "pinia";

import ProductService from "@/services/product";
const productService = new ProductService();

export const useProductStore = defineStore('produto', () => {
    const products = ref ([]);

    async function getProducts() {
        products.value = await productService.getProducts()
        console.log(products.value)
    };

    async function getProductsByCategory(category_id) {
        products.value = await productService.getProductByCategory(category_id)
    }

    return { products, getProducts, getProductsByCategory };
})