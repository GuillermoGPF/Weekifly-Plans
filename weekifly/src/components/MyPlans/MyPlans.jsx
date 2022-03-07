import { Row, Col, Card } from 'react-bootstrap'
import PlanCard from '../PlanCard/PlanCard'
// import { Link } from 'react-router-dom'

const MyPlans = ({ plans }) => {

    return (
        <Row>
            {plans.map(elm => {
                return <Col sm={6} lg={6} xl={4} key={elm._id}> <PlanCard {...elm} /> </Col>
            })}
        </Row>
    )
}

export default MyPlans