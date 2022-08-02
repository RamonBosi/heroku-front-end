import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationUser } from '../../validations';
import Form from "../Form";

export default function UserForm(){
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationUser)
    })
    
    const dataSubmit = (data) => console.log(data) 

    return(
        <Form
            handleSubmit={handleSubmit(dataSubmit)}
            formTitle={<h2>Cadastrar Usuário</h2>}
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
                        type = 'password' 
                        placeholder="Senha" 
                        {...register('password')}/>
                    <p>{errors.password?.message}</p>
                </>
            }
            formBtn={
                <>
                    <button type = 'submit'>Cadastrar</button>
                    <button>
                        <Link to = '/deliveryInformation'>Cancelar</Link>
                    </button>
                </>
            }
        />
    )
}