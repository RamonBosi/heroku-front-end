import Form from "../Form";

export default function AddressForm(){
    return(
        <Form>
            <h2>Cadastrar Endereço</h2>
            <div className="form-input">
                <input type = 'text' placeholder="UF"/>
                <input type = 'text' placeholder="Rua"/>
                <input type = 'text' placeholder="Cidade"/>
                <input type = 'text' placeholder="Bairro"/>
            </div>
            <div className="form-btn">
                <button className="form-btn-activate">Cadastrar</button>
                <button className="form-btn-cancel">Cancelar</button>
            </div>
        </Form>
    )
}