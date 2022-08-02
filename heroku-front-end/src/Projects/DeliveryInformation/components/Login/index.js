import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Form from '../Form'
import { loginValidation } from '../../validations'

export default function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginValidation)
    })

    const loginUser = (data) => console.log(data)

    return(
        <Form
            handleSubmit={handleSubmit(loginUser)}
            formInput={
                <>
                    <input 
                        type = 'text' 
                        placeholder='Email' 
                        {...register('email')}/>
                    <p>{errors.email?.message}</p>    
                    <input 
                        type = 'password' 
                        placeholder='Senha' 
                        {...register('password')}/>
                    <p>{errors.password?.message}</p>     
                </>
            }
            formBtn ={<button type='submit'>Login</button>}
            formText = {
                <p>Não tem uma conta ? <Link to = 'user/create'>Clique aqui</Link></p>
            }
        />
    )
}