import { Button, Form } from 'react-bootstrap'

const PlanForm = () => {
    return (
        <>
            <h2>Crea y añade tu plan</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Escribe el nombre del Plan</Form.Label>
                    <Form.Control type='text' name='name' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Pon una descripción</Form.Label>
                    <Form.Control type='text' name='description' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Elige una imagen para el plan</Form.Label>
                    <Form.Control type='file' name='image' />
                </Form.Group>
                
                <Button type='submit'>Añadir plan</Button>
            </Form>
        </>
    )
}

export default PlanForm