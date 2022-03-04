import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useState } from "react"

const Home = () => {
    return (
        <div className='bg'>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        <h2>Bienvenido Guillermo</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title><h3>Amigos</h3></Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title><h3>Planes</h3></Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Home