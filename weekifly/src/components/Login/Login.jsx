import { Button, Form } from 'react-bootstrap'
// import { AuthContext } from './../../context/auth.context'
// import authService from '../../services/auth.service'
// import { useNavigate } from 'react-router-dom'
// import { useState, useContext } from 'react'

const Login = () => {

    // const [loginForm, setLoginForm] = useState({
    //     password: '',
    //     email: ''
    // })

    // const navigate = useNavigate()

    // const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    // const { storeToken, authenticateUser } = useContext(AuthContext)


    // const handleInputChange = e => {
    //     const { name, value } = e.target
    //     setLoginForm({
    //         ...loginForm,
    //         [name]: value
    //     })
    // }

    // function handleSubmit(e) {

    //     e.preventDefault()

    //     authService
    //                .login(loginForm)
    //                .then(({ data }) => {
    //                     //console.log('JWT token', data.authToken)
    //                     storeToken(data.authToken)
    //                     authenticateUser()
    //                     setShowMessage(true)
    //                     setMessageInfo({ title: 'Éxito', desc: 'Sesión iniciada correctamente' })
    //                     navigate('/')
    //                })
    //                .catch(err => console.log(err))
    // }

    return (
        <Form>
            <p>Para iniciar sesión</p>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' name='password' />
            </Form.Group>
            
            <Button type='submit'>Entrar</Button>
        </Form>
    )
}

export default Login