export default function Form({children}){

    const { width, height } = {
        width: document.defaultView.innerWidth,
        height: document.defaultView.innerHeight
    }

    return (
        <div style={{width,height}} className = 'form-background'>
            <h1>Informações de entregas</h1>
            <form>
                <div className = 'form-container'>
                    {children}
                </div>
            </form>
        </div>
    )
}