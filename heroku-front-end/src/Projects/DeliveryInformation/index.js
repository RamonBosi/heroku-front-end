import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import UserForm from './components/UserForm'
import AddressForm from './components/AddressForm'
import PaymentMethodsForm from './components/PaymentMethodsForm'
import UserData from './components/UserData'
import './styles/index.scss'
import UserContextProvider from './contexts/userContext'

export default function DeliveryInformation(){
    return (
        <UserContextProvider>
            <Routes>
                <Route path = '/' element = {<Login/>}/>
                <Route path = 'user/create' element = {<UserForm/>}/>

                <Route path = 'user/:idUser/userData' element = {<UserData/>}/>

                <Route path = 'user/:idUser/update' element = {<UserForm/>}/>

                <Route path = 'address/user/:idUser/create' element = {<AddressForm/>}/>
                <Route path = 'address/user/:idUser/update/:idAddress' element = {<AddressForm/>}/>

                <Route path = 'paymentMethods/user/:idUser/create' element = {<PaymentMethodsForm/>}/>
                <Route path = 'paymentMethods/user/:idUser/update/:idPaymentMethods' element = {<PaymentMethodsForm/>}/>
                
                <Route path = '*' element = {<h1 style={{color: 'rgba(255,255,255,1)'}}>Página não encontrada</h1>}/>
            </Routes>
        </UserContextProvider>
    )
}