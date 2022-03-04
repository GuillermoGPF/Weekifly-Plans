import axios from 'axios'

class UserService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/users` })
    }

    getAllusers = () => {
        return this.api.get('/getAllusers')
    }

    getOneUser = id => {
        return this.api.get(`/getOneUser/${id}`)
    }

    saveUser = user => {
        return this.api.post(`/saveUser`, user)
    }
}

const userService = new UserService()

export default userService