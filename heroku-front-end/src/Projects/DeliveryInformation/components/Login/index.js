import Form from '../Form'
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <Form>
            <div className = 'form-input'>
                <input type = 'email' placeholder='Email'/>
                <input type = 'password' placeholder='Senha'/>
            </div>
            <div className = 'form-btn'>
                <button className = 'form-btn-activate'>Login</button>
            </div>
            <div>
                <p>Não tem uma conta ? <Link to = 'registerUser'>Clique aqui</Link></p>
            </div>
        </Form>
    )
}