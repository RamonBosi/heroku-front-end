import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import UserForm from './components/UserForm'
import './styles/index.scss'

export default function DeliveryInformation(){
    return (
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = 'user/:action/:idUser' element = {<UserForm/>}/>
            <Route path = '*' element = {<h1 style={{color: 'rgba(255,255,255,1)'}}>Página não encontrada</h1>}/>
        </Routes>
    )
}