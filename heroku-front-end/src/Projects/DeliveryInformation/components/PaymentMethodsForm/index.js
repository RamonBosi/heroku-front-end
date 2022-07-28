import Form from "../Form";

export default function PaymentMethodsForm(){
    return(
        <Form>
            <h2 className="title-payment-methods">Cadastrar Forma de pagamento</h2>
            <div className="form-input">
                <select>
                    <option>Cartão de crédito</option>
                    <option>Cartão de débito</option>
                    <option>Pix</option>
                    <option>Boleto</option>
                </select>
            </div>
            <div className="form-btn">
                <button className="form-btn-activate">Cadastrar</button>
                <button className="form-btn-cancel">Cancelar</button>
            </div>
        </Form>
    )
}