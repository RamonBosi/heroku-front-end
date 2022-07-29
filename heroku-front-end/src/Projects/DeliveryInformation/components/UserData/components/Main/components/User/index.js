export default function User({ userName }){
    return(
        <article className = 'user-name'>
            <h2>Olá <span>{userName}</span> !</h2>
        </article>
    )
}