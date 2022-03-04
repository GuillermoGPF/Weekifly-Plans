import { Navbar as NavigationBar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import Menu from '../Menu/Menu'

const Navbar = () => {
    return (
        <NavigationBar>
            <Nav className='nav'>
                <Link to='/inicio'>
                    <Brand />
                </Link>
                <div className='buttons'>
                    <Link to='/perfil' className='contact'>
                        <img src='./../img/avatar-1.svg'></img>
                        <span className='user-name'>Weekifly</span>
                    </Link>
                    <Button className='button'>
                        <FontAwesomeIcon icon={faTh} />
                        <p>Menú</p>
                    </Button>
                </div>
                <Menu />
            </Nav>
        </NavigationBar>
    )
}

export default Navbar