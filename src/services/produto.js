import axios from 'axios'

export default class ProdutoService {
    async getProducts() {
        const response = await axios.get('/produtos/')
        return response.data.results
    }
}