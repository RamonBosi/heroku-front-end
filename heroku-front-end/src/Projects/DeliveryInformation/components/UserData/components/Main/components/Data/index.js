import { useContext } from 'react'
import { MdAddCircleOutline, MdDelete, MdUpdate } from 'react-icons/md'
import { UserContext } from '../../../../../../contexts/userContext'

export const LoadData = ({userData, updateData,deleteData}) =>{
    return(
        <div className='show-user-data-db'>
            {userData}
            <div className='update-delete-user-data'>
                <span className = 'update-data'>
                    <MdUpdate onClick = {updateData}/>
                </span>
                <span className='delete-data'>
                    <MdDelete onClick={deleteData}/>
                </span>
            </div>
        </div>
    )
}

export default function Data({titleData,createData,titleCreate, data}){

    const { goToPage } = useContext(UserContext)

    return(
        <article className = 'user-data-db'>
            <div className = 'user-data-db-container'>
                <h2>{titleData}</h2>
                <section>
                    <div className='create-user-data-db'>
                        <button onClick = {() => goToPage(createData)}>
                            <MdAddCircleOutline/>
                            {titleCreate}
                        </button>
                    </div>
                    <div className='show-user-data-db-container'>
                        {data}
                    </div>
                </section>
            </div>
        </article>
    )
}