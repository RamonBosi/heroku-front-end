import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RepositoryContext } from '../../RepositoryContext'

export default function Home(){

    const { repoDeliveryInformation } = useContext(RepositoryContext)

    return(
        <>
        <h1>Front-end de projetos com servidor hospedado na Heroku</h1>
            <h2>Projetos</h2>
            <ul>
                <li>
                    <Link to = {`${repoDeliveryInformation}`}>Informações de entregas</Link>
                </li>
            </ul>
        </>
    )
}