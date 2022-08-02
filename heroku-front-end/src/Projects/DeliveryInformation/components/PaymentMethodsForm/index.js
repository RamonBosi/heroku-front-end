import { useForm } from "react-hook-form";
import Form from "../Form";

export default function PaymentMethodsForm(){
    const { register, handleSubmit } = useForm()
    
    const dataSubmit = (data) => console.log(data)

    return(
        <Form
        handleSubmit={handleSubmit(dataSubmit)}
        formTitle={
            <h2 className="title-payment-methods">Cadastrar Forma de pagamento</h2>
        }
        formInput={
            <select {...register('tipoPagamento')}>
                <option>Cartão de crédito</option>
                <option>Cartão de débito</option>
                <option>Pix</option>
                <option>Boleto</option>
            </select>
        }
        formBtn={
            <>
                <button type ='submit'>Cadastrar</button>
                <button>Cancelar</button>
            </>
        }
        />
    )
}