import { Card, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './ResultPlans.css'

const ResultPlans = ({ plansList }) => {
    return (
        <>
            {plansList.map(elm => {
                return (
                    <Col key={elm.name}>
                        <Card>
                            <Card.Img variant="top" src={elm.image} />
                            <Card.Body>
                                <Card.Title>{elm.name}</Card.Title>
                                <Card.Text>
                                    {elm.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </>
    )
}

export default ResultPlans