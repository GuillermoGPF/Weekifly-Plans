import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import './ResultFriends.css'

const ResultFriends = ({ friendsList }) => {
    return (
        <>
            {friendsList.map(elm => {
                return (
                    <Col>
                        <Card key={elm.name}>
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

export default ResultFriends