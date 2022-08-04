import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { server } from "../../server";
import { validationAddress } from "../../validations";
import Form from "../Form";

export default function AddressForm(){

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationAddress)
    })

    const { goToPage, getIdUser } = useContext(UserContext)

    const { idAddress } = useParams()

    useEffect(() =>{

        if(idAddress){

            server.get(`/endereco/usuario/${getIdUser()}/pegarEndereco/${idAddress}`)
            .then((res) =>{
                const data = res.data

                if(data.error){
                    alert(data.response)
                }else{

                    if(data.response){
                        setValue('uf', data.response.uf)
                        setValue('cidade',data.response.cidade)
                        setValue('rua', data.response.rua)
                        setValue('bairro',data.response.bairro)
                    }else{
                        alert('Endereço não existe')
                    }
                }
            })
            .catch(() => alert('Não foi possível atualizar, tente mais tarde'))
        }
    },[])

    const addressSubmit = (address) => {

      if(idAddress){

        server.put(`/endereco/usuario/${getIdUser()}/atualizarEndereco/${idAddress}`, address)
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

        server.post(`/endereco/usuario/${getIdUser()}/cadastrarEndereco`, address)
        .then((res) => {
            const data = res.data

            if(data.error){
                alert(data.response)
            }else{
                alert(data.response)
                goToPage(`user/${getIdUser()}/userData`)
            }
        })
        .catch(() => alert('Não foi possível cadastrar o endereço, tente mais tarde'))
      }
    }

    return(
        <Form 
        handleSubmit={handleSubmit(addressSubmit)}
        formTitle={<h2>{idAddress ? 'Atualizar' : 'Cadastrar'} Endereço</h2>}
        formInput = {
            <>
                <input 
                    type = 'text' 
                    placeholder="UF" 
                    {...register('uf')}/>
                <p>{errors.uf?.message}</p>
                <input 
                    type = 'text' 
                    placeholder="Cidade" 
                    {...register('cidade')}/>
                <p>{errors.cidade?.message}</p>
                <input 
                    type = 'text' 
                    placeholder="Rua" 
                    {...register('rua')}/>
                <p>{errors.rua?.message}</p>
                <input 
                    type = 'text' 
                    placeholder="Bairro" 
                    {...register('bairro')}/>
                <p>{errors.bairro?.message}</p>
            </>
        }
        formBtn = {
            <>
                <button type = 'submit'>
                    {idAddress ? 'Atualizar' : 'Cadastrar'}
                </button>
                <button type ='reset'>
                    <Link to = {`/deliveryInformation/user/${getIdUser()}/userData`}>Cancelar
                    </Link>
                </button>
            </>
        }
        />
    )
}