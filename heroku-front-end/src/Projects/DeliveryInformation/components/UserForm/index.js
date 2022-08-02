import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationCreateUser } from '../../validations';
import Form from "../Form";

export default function UserForm(){
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationCreateUser)
    })
    
    const createUser = (data) => console.log(data) 

    return(
        <Form
            handleSubmit={handleSubmit(createUser)}
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