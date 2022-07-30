import Form from '../Form'
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <Form
            formInput={
                <>
                    <input type = 'email' placeholder='Email'/>
                    <input type = 'password' placeholder='Senha'/>
                </>
            }
            formBtn ={<button>Login</button>}
            formText = {
                <p>Não tem uma conta ? <Link to = 'user/create'>Clique aqui</Link></p>
            }
        />
    )
}