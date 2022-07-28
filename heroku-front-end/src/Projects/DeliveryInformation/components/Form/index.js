export default function Form({children}){
    return (
        <form>
            <div className = 'form-container'>
                {children}
            </div>
        </form>
    )
}