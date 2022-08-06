import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RepositoryContext } from '../../RepositoryContext'
import './styles.scss'

export default function Home(){

    const { repoDeliveryInformation } = useContext(RepositoryContext)

    return(
        <div className='home'>
            <div className='home-container'>
                <h1>
                    Front-end de projetos com servidor hospedado na 
                    <span className='heroku-logo'> Heroku</span>
                </h1>
                <ul>
                    <li>
                        <Link to = {`${repoDeliveryInformation}`}>Informações de entregas</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}