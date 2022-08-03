import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationUser } from '../../validations';
import { useContext, useEffect, useState } from 'react';
import Form from "../Form";
import { server } from '../../server';
import { UserContext } from '../../contexts/userContext';

export default function UserForm(){
    
    const { goToPage, setIdUser, getIdUser } = useContext(UserContext)
    
    const { idUser } = useParams()
    
    const [updateUser, setUpdateUser] = useState()
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationUser)
    })

    useEffect(() =>{
        if(idUser){

            server.get(`/usuario/${getIdUser()}/dadosUsuario`)
            .then((res) => {
                const data = res.data

                if(data.error){
                    alert('Não foi possível recuperar os dados')
                }else{

                    const userData = {
                        nome: data.response.nome,
                        cpf: data.response.cpf,
                        email: data.response.email,
                        senha: data.response.senha
                    }
                    setUpdateUser(userData)
                }
            })
            .catch(() => alert('Não foi possível recuperar os dados'))
        }
    },[])

    const dataSubmit = async (data) => {

        const user = {
            nome: data.nome,
            cpf:data.cpf,
            email:data.email,
            senha: data.password
        }

        if(idUser){
            //Atualizar
            console.log(`Usuario de id ${getIdUser()} atualizado`)
        }else{
            //Cadastrar
            const createdUser = await server.post('/usuario/cadastrar',user)
            .then((res) =>{
                if(res.data.error){
                    return res.data
                }else{
                    return res.data
                }
            })
            .catch(() => {return {error: true, response: 'Não foi possível cadastrar o usuário, tente mais tarde'}})
           
            if(createdUser.error){
                alert(createdUser.response)
            }else{
                server.post('/usuario/login',{email: user.email, senha: user.senha})
                .then((res) => {
                    const data = res.data

                    if(data.error){
                        alert(data.response)
                    }else{
                        const id = data.response.idUsuario
                        setIdUser(id)
                        alert('Usuário criado com sucesso!')
                        goToPage(`user/${id}/userData`)
                    }
                })
                .catch(() => {
                    alert('Usuário criado, tente fazer login dentro de alguns minutos')
                    goToPage(`/deliveryInformation`)
                })
            }
        }
    }

    return(
        <Form
            handleSubmit={handleSubmit(dataSubmit)}
            formTitle={<h2>{idUser ? 'Atualizar' : 'Cadastrar'} usuário</h2>}
            formInput={
                <>
                    <input 
                        defaultValue={updateUser?.nome}
                        type = 'text' 
                        placeholder="Nome" 
                        {...register('nome')}/>
                    <p>{errors.nome?.message}</p>
                    <input 
                        defaultValue={updateUser?.cpf}
                        type = "number" 
                        placeholder="CPF" 
                        {...register('cpf')}/>
                    <p>{errors.cpf?.message}</p>
                    <input 
                        defaultValue={updateUser?.email}
                        type = 'text' 
                        placeholder="Email" 
                        {...register('email')}/>
                    <p>{errors.email?.message}</p>
                    <input 
                        defaultValue={updateUser?.senha}
                        type = {idUser ? 'text' : 'password'} 
                        placeholder="Senha" 
                        {...register('password')}/>
                    <p>{errors.password?.message}</p>
                </>
            }
            formBtn={
                <>
                    <button type = 'submit'>
                        {idUser ? 'Atualizar' : 'Cadastrar'} usuário
                    </button>
                    <button>
                        <Link to = '/deliveryInformation'>Cancelar</Link>
                    </button>
                </>
            }
        />
    )
}