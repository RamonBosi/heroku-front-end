import Form from "../Form";

export default function AddressForm(){
    return(
        <Form 
        formTitle={<h2>Cadastrar Endereço</h2>}
        formInput = {
            <>
                <input type = 'text' placeholder="UF"/>
                <input type = 'text' placeholder="Rua"/>
                <input type = 'text' placeholder="Cidade"/>
                <input type = 'text' placeholder="Bairro"/>
            </>
        }
        formBtn = {
            <>
                <button>Cadastrar</button>
                <button>Cancelar</button>
            </>
        }
        />
    )
}