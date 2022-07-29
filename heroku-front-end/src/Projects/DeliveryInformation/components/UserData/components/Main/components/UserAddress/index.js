import { MdAddCircleOutline, MdUpdate, MdDelete } from 'react-icons/md'

export default function UserAddress(){
    return(
        <article className = 'user-data-db'>
            <h2>Endereços</h2>
            <section>
                <div className='create-user-data-db'>
                    <button>
                        <MdAddCircleOutline/>
                        Cadastrar endereço
                    </button>
                </div>
                <div className='show-user-data-db-container'>
                    <div className='show-user-data-db'>
                        <p><span>UF:</span>ES</p>
                        <p><span>Rua:</span>Rua qualquer</p>
                        <p><span>Cidade:</span>Cidade qualquer</p>
                        <p><span>Bairro:</span>Bairro qualquer</p>
                    </div>
                    <div className='update-delete-user-data'>
                        <MdUpdate className='update-data'/>
                        <MdDelete className='delete-data'/>
                    </div>
                </div>
            </section>
        </article>
    )
}