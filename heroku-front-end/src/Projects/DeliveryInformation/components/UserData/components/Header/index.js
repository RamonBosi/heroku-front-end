import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'
import { UserContext } from '../../../../contexts/userContext'
import { server } from '../../../../server'
import { RepositoryContext } from '../../../../../../ProjectsRoutes/RepositoryContext'

export default function Header(){

    const { goToPage, getIdUser, removeIdUser } = useContext(UserContext)

    const { repoDeliveryInformation } = useContext(RepositoryContext)

    const deleteUser = () =>{
        server.delete(`/usuario/${getIdUser()}/deletar`)
        .then((res)=>{
            const data = res.data

            if(data.error){
                alert(data.response)
            }else{
                alert(data.response)
                removeIdUser()
                goToPage(`${repoDeliveryInformation}`)
            }
        })
        .catch(() => alert('Não foi possível deletar, tente mais tarde'))
    }

    const logoutUser = () =>{

        server.put(`/usuario/${getIdUser()}/logout`)
        .then((res)=>{
            const data = res.data

            if(data.error){
                alert(data.response)
            }else{
                alert(data.response)
                removeIdUser()
                goToPage(`${repoDeliveryInformation}`)
            }
        })
        .catch(() => alert('Não foi possível deletar, tente mais tarde'))
    }

    return(
        <header className='userData-header'>
            <div className='userData-container'>
                <h1>Informações de entregas</h1>
                <div>
                    <div className='userData-header-btn'>
                        <button className = 'btn-update-user'>
                            <Link to = {`${repoDeliveryInformation}/user/${getIdUser()}/update`}>
                                Atualizar conta
                            </Link>
                        </button>
                        <button 
                            className = 'btn-delete-user' 
                            onClick = {deleteUser}>
                            Deletar conta
                        </button>
                    </div>
                    <div 
                        className='userData-header-logout' 
                        title='Sair'
                        onClick={logoutUser}>
                        <MdLogout/>
                    </div>
                </div>
            </div>
        </header>
    )
}