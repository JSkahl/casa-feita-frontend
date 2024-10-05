import axios from 'axios'

export default class CategoriaService {
    async getCategories() {
        const response = async axios.get('/categorias/')
        return response.data.results
    }
}