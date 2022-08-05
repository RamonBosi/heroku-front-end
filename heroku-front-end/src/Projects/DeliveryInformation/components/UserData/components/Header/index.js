import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'
import { UserContext } from '../../../../contexts/userContext'
import { server } from '../../../../server'

export default function Header(){

    const { goToPage, getIdUser, removeIdUser } = useContext(UserContext)

    const deleteUser = () =>{
        server.delete(`/usuario/${getIdUser()}/deletar`)
        .then((res)=>{
            const data = res.data

            if(data.error){
                alert(data.response)
            }else{
                alert(data.response)
                removeIdUser()
                goToPage(`/deliveryInformation`)
            }
        })
        .catch(() => alert('Não foi possível deletar, tente mais tarde'))
    }

    const logoutUser = () =>{
        removeIdUser()
        goToPage(`/deliveryInformation`)
    }

    return(
        <header className='userData-header'>
            <div className='userData-container'>
                <h1>Informações de entregas</h1>
                <div>
                    <div className='userData-header-btn'>
                        <button className = 'btn-update-user'>
                            <Link to = {`/deliveryInformation/user/${getIdUser()}/update`}>
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