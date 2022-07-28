import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import UserForm from './components/UserForm'
import AddressForm from './components/AddressForm'
import './styles/index.scss'

export default function DeliveryInformation(){
    return (
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = 'user/create' element = {<UserForm/>}/>
            <Route path = 'user/:idUser/update' element = {<UserForm/>}/>
            <Route path = 'address/user/:idUser/create' element = {<AddressForm/>}/>
            <Route path = 'address/user/:idUser/update/:idAddress' element = {<AddressForm/>}/>
            
            <Route path = '*' element = {<h1 style={{color: 'rgba(255,255,255,1)'}}>Página não encontrada</h1>}/>
        </Routes>
    )
}