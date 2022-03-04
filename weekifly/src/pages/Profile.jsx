import { Card, Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Profile = () => {
    return (
        <div className='bg'>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title><h2>Perfil</h2></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Profile