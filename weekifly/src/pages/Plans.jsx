import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import MyModal from '../components/MyModal/MyModal'
import PlansList from '../components/PlansList/PlansList'
import SearchPlans from './../components/SearchPlans/SearchPlans'
import planService from '../services/plans.service'
// import { AuthContext } from './../context/auth.context'
import { useState, useEffect, useContext } from 'react'

const Plans = () => { 
    
    // const { isLoggedIn } = useContext(AuthContext)

    const [plans, setPlans] = useState([])
    const [plansCopy, setCopy] = useState([])

    useEffect(() => loadPlans(), [])

    const loadPlans = () => {
        planService
            .getAllPlans()
            .then(({ data }) => setPlans(data))
            .catch(err => console.log(err))
    }

    function filterPlans(str, filteredPlans) {
        str ? filteredPlans = plansCopy.filter(elm => elm.name.includes(str)) : filteredPlans = plansCopy
        setPlans(filteredPlans)
    }

    return (
        <>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        <h2>Planes</h2>
                    </Col>
                </Row>
                <SearchPlans filterPlans={filterPlans} />
                <PlansList plans={plans} />
            </Container>
            <MyModal />
            <Footer />
        </>
    )
}

export default Plans