import axios from 'axios'

export default class ProductService {
    async getProducts() {
        const response = await axios.get('/produtos/')
        return response.data.results
    }

    async getProductByCategory(category_id) {
        const response = await axios.get(`/produtos/?categoria__id=${category_id}`)
        return response.data.results
      }
}