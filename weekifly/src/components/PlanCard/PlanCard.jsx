import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './PlanCard.css'

const PlanCard = ({ name, image, description, _id }) => {
    return (
        <Card className='plan'>
            <Card.Img variant='top' src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {/* <Link to={`/detalles/${_id}`}>
                
                </Link> */}
            </Card.Body>
        </Card >
    )
}

export default PlanCard