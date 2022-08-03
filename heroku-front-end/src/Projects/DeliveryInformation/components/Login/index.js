import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import Form from '../Form'
import { loginValidation } from '../../validations'
import { server } from '../../server'
import { UserContext } from '../../contexts/userContext'

export default function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginValidation)
    })

    const { setIdUser, goToPage } = useContext(UserContext)

    const loginUser = (dataUser) => {

        const user = dataUser

        server.post('/usuario/login',{email: user.email, senha: user.password})
        .then((res) => {
            const data = res.data

            if(data.error){
                alert(data.response)
            }else{
                const id = data.response.idUsuario
                setIdUser(id)
                alert(data.response.message)
                goToPage(`user/${id}/userData`)
            }
        })
        .catch(() => console.log('Algo deu errado na requisição'))
    }

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