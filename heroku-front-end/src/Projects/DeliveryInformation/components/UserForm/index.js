import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationUser } from '../../validations';
import { useContext, useEffect } from 'react';
import Form from "../Form";
import { server } from '../../server';
import { UserContext } from '../../contexts/userContext';

export default function UserForm(){
    
    const { goToPage, setIdUser, getIdUser } = useContext(UserContext)
    
    const { idUser } = useParams()
    
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
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
                
                    setValue('nome',data.response.nome)
                    setValue('cpf',data.response.cpf)
                    setValue('email',data.response.email)
                    setValue('password',data.response.senha)
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
            server.put(`/usuario/${getIdUser()}/atualizar`,user)
            .then((res) =>{
                const message = res.data

                if(message.error){
                    alert(message.response)
                }else{
                    alert(message.response)
                    goToPage(`user/${getIdUser()}/userData`)
                }
            })
            .catch(() => alert('Não foi possível atualizar, tente novamente'))

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
                        type = 'text' 
                        placeholder="Nome" 
                        {...register('nome')}/>
                    <p>{errors.nome?.message}</p>
                    <input 
                        type = "number" 
                        placeholder="CPF" 
                        {...register('cpf')}/>
                    <p>{errors.cpf?.message}</p>
                    <input 
                        type = 'text' 
                        placeholder="Email" 
                        {...register('email')}/>
                    <p>{errors.email?.message}</p>
                    <input 
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