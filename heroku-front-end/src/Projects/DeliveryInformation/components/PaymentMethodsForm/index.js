import Form from "../Form";

export default function PaymentMethodsForm(){
    return(
        <Form
        formTitle={
            <h2 className="title-payment-methods">Cadastrar Forma de pagamento</h2>
        }
        formInput={
            <select>
                <option>Cartão de crédito</option>
                <option>Cartão de débito</option>
                <option>Pix</option>
                <option>Boleto</option>
            </select>
        }
        formBtn={
            <>
                <button>Cadastrar</button>
                <button>Cancelar</button>
            </>
        }
        />
    )
}