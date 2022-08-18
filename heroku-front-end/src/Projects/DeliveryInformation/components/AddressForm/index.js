import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import { RepositoryContext } from "../../../../ProjectsRoutes/RepositoryContext";
import { UserContext } from "../../contexts/userContext";
import { server } from "../../server";
import { validationAddress } from "../../validations";
import Form from "../Form";

export default function AddressForm(){

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationAddress)
    })

    const { goToPage, getIdUser } = useContext(UserContext)

    const { repoDeliveryInformation } = useContext(RepositoryContext)

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
                goToPage(`${repoDeliveryInformation}/user/${getIdUser()}/userData`)
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
                goToPage(`${repoDeliveryInformation}/user/${getIdUser()}/userData`)
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
                <div>
                    <label>UF</label>
                    <input 
                        type = 'text'
                        {...register('uf')}/>
                    <p>{errors.uf?.message}</p>
                </div>
                <div>
                    <label>Cidade</label>
                    <input 
                        type = 'text' 
                        {...register('cidade')}/>
                    <p>{errors.cidade?.message}</p>
                </div>
                <div>
                    <label>Rua</label>
                    <input 
                        type = 'text'  
                        {...register('rua')}/>
                    <p>{errors.rua?.message}</p>
                </div>
                <div>
                    <label>Bairro</label>
                    <input 
                        type = 'text' 
                        {...register('bairro')}/>
                    <p>{errors.bairro?.message}</p>
                </div>
            </>
        }
        formBtn = {
            <>
                <button type = 'submit'>
                    {idAddress ? 'Atualizar' : 'Cadastrar'}
                </button>
                <button type ='reset'>
                    <Link to = {`${repoDeliveryInformation}/user/${getIdUser()}/userData`}>Cancelar
                    </Link>
                </button>
            </>
        }
        />
    )
}