import axios from 'axios'

class PlanService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/plans` })
    }

    getAllPlans = () => {
        return this.api.get('/getAllPlans')
    }

    getOnePlan = id => {
        return this.api.get(`/getOnePlan/${id}`)
    }

    createPlan = plan => {
        return this.api.post(`/createPlan`, plan)
    }

    putPlan = id => {
        return this.api.put(`/getOnePlan/${id}/edit`)
    }

    deletePlan = id => {
        return this.api.delete(`/getOnePlan/${id}/delete`)
    }
}

const planService = new PlanService()

export default planService