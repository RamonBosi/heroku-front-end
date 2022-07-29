import { MdLogout } from 'react-icons/md'

export default function Header(){
    return(
        <header className='userData-header'>
            <div className='userData-container'>
                <h1>Informações de entregas</h1>
                <div>
                    <div className='userData-header-btn'>
                        <button className = 'btn-update-user'>Atualizar conta</button>
                        <button className = 'btn-delete-user'>Deletar conta</button>
                    </div>
                    <div className='userData-header-logo' title='Sair'>
                        <MdLogout/>
                    </div>
                </div>
            </div>
        </header>
    )
}