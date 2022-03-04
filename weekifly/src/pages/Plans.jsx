import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useState } from "react"
import planes from './../data/plans.json'
import SearchPlans from './../components/SearchPlans/SearchPlans'
import ResultPlans from './../components/ResultPlans/ResultPlans'

const Plans = () => {

    const data = []
    planes.map(elm => {
        data.push(...elm.name)
    })

    const [plansList, setPlanList] = useState(data);
    const [plansCopy, setCopy] = useState(data)

    function filterPlans(str) {
        let filteredPlans

        str ? filteredPlans = plansCopy.filter(elm => elm.name.includes(str))
            : filteredPlans = plansCopy

        setPlanList(filteredPlans)
    }

    return (
        <div className='bg'>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        <h2>Planes</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SearchPlans filterPlans={filterPlans} />
                    </Col>
                </Row>
                <Row>
                    <ResultPlans plansList={plansList} />
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Plans