import { Link } from 'react-router-dom'
import Form from "../Form";

export default function RegisterUser(){
    return(
        <Form>
            <h2>Cadastrar Usuário</h2>
            <div className="form-input">
                <input type = 'text' placeholder="Nome"/>
                <input type = "number" placeholder="CPF"/>
                <input type = 'email' placeholder="Email"/>
                <input type = 'password' placeholder="Senha"/>
            </div>
            <div className="form-btn">
                <button className="form-btn-activate">Cadastrar</button>
                <button className="form-btn-cancel"><Link to = '/deliveryInformation'>Cancelar</Link></button>
            </div>
        </Form>
    )
}