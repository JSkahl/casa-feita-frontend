import axios from 'axios'

export default class CorService {
    async getColors() {
        const response =  await axios.get('/cores/')
        return response.data.results
    }
}