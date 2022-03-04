import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useState } from "react"
import friends from './../data/friends.json'
import ResultFriends from '../components/ResultFriends/ResultFriends'
import SearchFriends from './../components/SearchFriends/SearchFriends'

const Users = () => {

    const data = []
    friends.map(elm => {
        data.push(...elm.username)
    })

    const [friendsList, setFriendList] = useState(data);
    const [friendsCopy, setCopy] = useState(data)

    function filterFriends(str) {
        let filteredFriends

        str ? filteredFriends = friendsCopy.filter(elm => elm.name.includes(str))
            : filteredFriends = friendsCopy

        setFriendList(filteredFriends)
    }

    return (
        <div className='bg'>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        <h2>Amigos</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SearchFriends filterFriends={filterFriends} />
                    </Col>
                </Row>
                <Row>
                    <ResultFriends friendsList={friendsList} />
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Users