import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faIcons, faPlus, faUsers, faUserAstronaut, faCog } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useContext } from 'react'
import './Menu.css'

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
            <Link to='#' data-bs-toggle='modal' data-bs-target='#modal'>
                <FontAwesomeIcon icon={faPlus} /><p>Planear</p>
            </Link>
            <Link to='/amigos'><FontAwesomeIcon icon={faUsers} /><p>Amigos</p></Link>
            <Link to='/perfil'><FontAwesomeIcon icon={faUserAstronaut} /><p>Perfil</p></Link>
            <Link to='/ajustes'><FontAwesomeIcon icon={faCog} /><p>Ajustes</p></Link>
        </div>
    )
}

export default Menu