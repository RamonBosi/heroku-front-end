import { Link } from 'react-router-dom'
import Form from "../Form";

export default function UserForm(){
    return(
        <Form
            formTitle={<h2>Cadastrar Usuário</h2>}
            formInput={
                <>
                    <input type = 'text' placeholder="Nome"/>
                    <input type = "number" placeholder="CPF"/>
                    <input type = 'email' placeholder="Email"/>
                    <input type = 'password' placeholder="Senha"/>
                </>
            }
            formBtn={
                <>
                    <button>Cadastrar</button>
                    <button>
                        <Link to = '/deliveryInformation'>Cancelar</Link>
                    </button>
                </>
            }
        />
    )
}