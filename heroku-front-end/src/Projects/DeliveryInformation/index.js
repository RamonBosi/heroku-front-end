import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import './styles/index.scss'

export default function DeliveryInformation(){
    return (
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = 'registerUser' element = {<h1>Registrar usuário</h1>}/>
        </Routes>
    )
}