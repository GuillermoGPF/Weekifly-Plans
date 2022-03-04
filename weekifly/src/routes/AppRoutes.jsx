import { Routes, Route } from 'react-router-dom'
import Crear from '../pages/Crear'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import Plans from '../pages/Plans'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import SignupPage from '../pages/SignupPage'
import Users from '../pages/Users'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/registro' element={<SignupPage />} />
                <Route path='/inicio' element={<Home />} />
                <Route path='/planes' element={<Plans />} />
                <Route path='/crear' element={<Crear />}></Route>
                <Route path='/perfil' element={<Profile />} />
                <Route path='/ajustes' element={<Settings />} />
                <Route path='/usuarios' element={<Users />} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </>
    )
}

export default AppRoutes