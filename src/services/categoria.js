import axios from 'axios'

export default class CategoriaService {
    async getCategories() {
        const response = await axios.get('/categorias/')
        return response.data.results
    }
}