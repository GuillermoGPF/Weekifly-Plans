import axios from 'axios'

class PlanService {
    constructor() {
        this.api = axios.create({ baseURL: `http://localhost/server/plans` })
    }

    getAllplans = () => {
        return this.api.get('/getAllplans')
    }

    getOnePlan = id => {
        return this.api.get(`/getOnePlan/${id}`)
    }

    savePlan = plan => {
        return this.api.post(`/savePlan`, plan)
    }
}

const planService = new PlanService()

export default planService