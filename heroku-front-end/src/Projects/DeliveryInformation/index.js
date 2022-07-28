import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import RegisterUser from './components/RegisterUser'
import './styles/index.scss'

export default function DeliveryInformation(){
    return (
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = 'registerUser' element = {<RegisterUser/>}/>
        </Routes>
    )
}