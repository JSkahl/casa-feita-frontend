import axios from 'axios'

export default class FabricanteService {
    async getProducers() {
        const response = await axios.get('/fabricantes/')
        return response.data.results
    }
}