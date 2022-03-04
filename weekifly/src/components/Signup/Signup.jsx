import { Button, Form } from 'react-bootstrap'

const Signup = () => {
    return (
        <Form>
            <p>Para crearte una cuenta</p>
            <Form.Group>
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control type='text' name='username' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' name='password' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Cumpleaños (Opcional)</Form.Label>
                <Form.Control type='date' name='birthday' />
            </Form.Group>
            
            <Button type='submit'>Empezar</Button>
        </Form>
    )
}

export default Signup