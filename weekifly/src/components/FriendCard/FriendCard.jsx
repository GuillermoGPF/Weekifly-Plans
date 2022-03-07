import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './FriendCard.css'

const FriendCard = ({ username, avatar, _id }) => {
    return (
        <Card className='friend'>
            <Card.Img variant='top' src={avatar} />
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                {/* <Link to={`/detalles/${_id}`}>

                </Link> */}
            </Card.Body>
        </Card >
    )
}

export default FriendCard