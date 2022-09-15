import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../../contexts/userContext";
import { server } from "../../../../../../server";
import Data, { LoadData } from "../Data";

export default function UserAddress({ address }){

    const { goToPage, getIdUser, setGetUserData, getUserData } = useContext(UserContext)

    const [loadAddress, setLoadAddress] = useState(<></>)

    useEffect(() =>{
        if(address){

            const loadUserAddress = address.map((adr) =>{
                const { id, uf, cidade, rua, bairro } = adr

                const updateAddress = () =>{ 
                    goToPage(`address/user/${getIdUser()}/update/${id}`)
                }

                const deleteAddress = () =>{

                    server.delete(`endereco/usuario/${getIdUser()}/deletarEndereco/${id}`)
                    .then((res) =>{
                        const data = res.data

                        if(data.error){
                            alert(data.response)
                        }else{
                            alert(data.response)
                            setGetUserData(!getUserData)
                        }
                    })
                    .catch(() => alert('Não foi possível deletar'))
                }

                return (
                    <LoadData 
                        userData={
                        <>
                            <p><span>UF: </span>{uf}</p>
                            <p><span>Cidade: </span>{cidade}</p>
                            <p><span>Rua: </span>{rua}</p>
                            <p><span>Bairro: </span>{bairro}</p>
                        </>
                    }
                        updateData={updateAddress}
                        deleteData={deleteAddress}
                    />
                )
            })

            setLoadAddress(loadUserAddress)
        }
    },[address])

    return(
        <Data 
            titleData={'Endereços'}
            createData={`address/user/${getIdUser()}/create`}
            titleCreate = {'Cadastrar endereço'}
            data={address ? loadAddress : <></>}
        />
    )
}