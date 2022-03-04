import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'


const Crear = () => {
    return (
        <div className='bg'>
            <Navbar />
            <Container>
                <Row md={2}>
                    <Col>
                        <h2>Crea y añade tu plan</h2>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nombre del Plan</Form.Label>
                                <Form.Control type='text' name='name' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type='text' name='description' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Imágen</Form.Label>
                                <Form.Control type='file' name='image' />
                            </Form.Group>
                            
                            <Button type='submit'>Añadir plan</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Crear