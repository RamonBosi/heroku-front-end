import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>
        <h1>Front-end de projetos com servidor hospedado na Heroku</h1>
            <h2>Projetos</h2>
            <ul>
                <li>
                    <Link to = '/deliveryInformation'>Informações de entregas</Link>
                </li>
            </ul>
        </>
    )
}