import axios from 'axios'

class UserService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/user` })
    }

    getAllUsers = () => {
        return this.api.get('/getAllUsers')
    }

    getOneUser = id => {
        return this.api.get(`/getOneUser/${id}`)
    }

    createUser = user => {
        return this.api.post(`/createUser`, user)
    }

    putUser = id => {
        return this.api.put(`/getOneUser/${id}/edit`)
    }

    deleteUser = id => {
        return this.api.delete(`/getOneUser/${id}/delete`)
    }
}

const userService = new UserService()

export default userService