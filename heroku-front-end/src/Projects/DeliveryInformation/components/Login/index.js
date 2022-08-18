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
        .catch(() => alert('Algo deu errado no processo de login, tente mais tarde'))
    }

    return(
        <Form
            handleSubmit={handleSubmit(loginUser)}
            formInput={
                <>
                    <div>
                        <label>Email</label>
                        <input 
                            type = 'text'  
                            {...register('email')}/>
                        <p>{errors.email?.message}</p> 
                    </div>
                    <div>
                        <label>Senha</label>   
                        <input 
                            type = 'password'  
                            {...register('password')}/>
                        <p>{errors.password?.message}</p>
                    </div>     
                </>
            }
            formBtn ={<button type='submit'>Login</button>}
            formText = {
                <p>Não tem uma conta ? <Link to = 'user/create'>Clique aqui</Link></p>
            }
        />
    )
}