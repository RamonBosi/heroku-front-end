import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { server } from "../../server";
import Form from "../Form";

export default function PaymentMethodsForm(){
    const { register, handleSubmit, setValue } = useForm()
    
    const { goToPage, getIdUser } = useContext(UserContext)

    const { idPaymentMethods } = useParams()

    useEffect(() =>{

        if(idPaymentMethods){
            server.get(`formaPagamento/usuario/${getIdUser()}/pegarFormaPagamento/${idPaymentMethods}`)
            .then((res) =>{
                const data = res.data

                if(data.error){
                    alert(data.response)
                }else{

                    if(data.response){
                        setValue('tipoPagamento', data.response.tipo_pagamento)
                    }else{
                        alert('Forma de pagamento não existe')
                    }
                }
            })
            .catch(() => alert('Não foi possível atualizar, tente mais tarde'))
        }
    },[])

    const paymentMethodsSubmit = (paymentMethods) => {

        if(idPaymentMethods){
            server.put(`formaPagamento/usuario/${getIdUser()}/atualizarFormaPagamento/${idPaymentMethods}`,paymentMethods)
            .then((res) => {
                const data = res.data

                if(data.error){
                    alert(data.response)
                }else{
                    alert(data.response)
                    goToPage(`user/${getIdUser()}/userData`)
                }
            })
            .catch(() => alert('Não foi possível atualizar, tente mais tarde'))
        }else{
            server.post(`formaPagamento/usuario/${getIdUser()}/cadastrarFormaPagamento`, paymentMethods)
            .then((res) =>{
                const data = res.data

                if(data.error){
                    alert(data.response)
                }else{
                    alert(data.response)
                    goToPage(`user/${getIdUser()}/userData`)
                }
            })
            .catch(() => alert('Não foi possível cadastrar, tente mais tarde'))
        }
    }

    return(
        <Form
        handleSubmit={handleSubmit(paymentMethodsSubmit)}
        formTitle={
            <h2 className="title-payment-methods">{idPaymentMethods ? 'Atualizar' : 'Cadastrar'} Forma de pagamento</h2>
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
                <button type ='submit'>
                    {idPaymentMethods ? 'Atualizar' : 'Cadastrar'}
                </button>
                <button type='reset'>
                    <Link to = {`/deliveryInformation/user/${getIdUser()}/userData`}>Cancelar
                    </Link>
                </button>
            </>
        }
        />
    )
}