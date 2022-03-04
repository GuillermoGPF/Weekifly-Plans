import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faIcons, faPlus, faUsers, faUserAstronaut, faCog } from '@fortawesome/free-solid-svg-icons'
import './Menu.css'
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect, useContext } from 'react'
import plansService from '../../services/plans.service'

const Menu = () => {
    // const [plans, setPlans] = useState([])
    const [showModal, setShowModal] = useState(false)

    // const { isLoggedIn } = useContext(AuthContext)

    // useEffect(() => {
    //     loadPlans()
    // }, [])

    // const loadPlans = () => {
    //     plansService
    //                 .getAllPlans()
    //                 .then(({ data }) => setPlans(data))
    //                 .catch(err => console.log(err))
    // }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <div className='menu'>
            <Link to='/inicio'><FontAwesomeIcon icon={faHouse} /><p>Home</p></Link>
            <Link to='/planes'><FontAwesomeIcon icon={faIcons} /><p>Planes</p></Link>
            <Link to='/crear'><FontAwesomeIcon icon={faPlus} /><p>Planear</p></Link>
            <Link to='/usuarios'><FontAwesomeIcon icon={faUsers} /><p>Amigos</p></Link>
            <Link to='/perfil'><FontAwesomeIcon icon={faUserAstronaut} /><p>Perfil</p></Link>
            <Link to='/ajustes'><FontAwesomeIcon icon={faCog} /><p>Ajustes</p></Link>
        </div>
    )
}

export default Menu