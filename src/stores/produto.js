import { ref } from "vue";
import { defineStore } from "pinia";

import ProdutoService from "@/services/produto";
const produtoService = new ProdutoService();

export const useProdutoService = defineStore('produto', () => {
    const produtos = ref ([]);

    async function getProducts() {
        produtos.value = await produtoService.getProducts()
    };

    return { produtos, getProducts };
})