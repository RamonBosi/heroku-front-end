import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../../contexts/userContext";
import { server } from "../../../../../../server";
import Data, { LoadData } from "../Data";

export default function UserPaymentMethods({ paymentMethods }){

    const { goToPage, getIdUser } = useContext(UserContext)

    const [loadPaymentMethods, setLoadPaymentMethods] = useState()

    useEffect(() =>{
        if(paymentMethods){

            const loadUserPaymentMethods = paymentMethods.map((pm) =>{
                const { id, tipo_pagamento } = pm

                const updatePaymentMethods = () =>{ 
                    goToPage(`paymentMethods/user/${getIdUser()}/update/${id}`)
                }

                const deletePaymentMethods = () =>{

                    server.delete(`formaPagamento/usuario/${getIdUser()}/deletarFormaPagamento/${id}`)
                    .then((res) =>{
                        const data = res.data

                        if(data.error){
                            alert(data.response)
                        }else{
                            alert(data.response)
                            window.location.reload()
                        }
                    })
                    .catch(() => alert('Não foi possível deletar'))
                }

                return (
                    <LoadData 
                        userData={
                        <>
                            <p><span>Forma de pagamento: </span>{tipo_pagamento}</p>
                        </>
                    }
                        updateData={updatePaymentMethods}
                        deleteData={deletePaymentMethods}
                    />
                )
            })

            setLoadPaymentMethods(loadUserPaymentMethods)
        }
    },[paymentMethods])

    return(
        <Data 
            titleData={'Formas de pagamento'}
            createData={`paymentMethods/user/${getIdUser()}/create`}
            titleCreate = {'Cadastrar Forma de pagamento'}
            data={loadPaymentMethods || <></>}
        />
    )
}