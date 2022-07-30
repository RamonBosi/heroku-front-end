export default function Form({formTitle, formInput, formBtn, formText }){

    const { width, height } = {
        width: document.defaultView.innerWidth,
        height: document.defaultView.innerHeight
    }

    return (
        <div style={{width,height}} className = 'form-background'>
            <h1>Informações de entregas</h1>
            <form>
                <div className = 'form-container'>
                    {formTitle || <></>}
                    <div className="form-input">
                        {formInput}
                    </div>
                    <div className="form-btn">
                        {formBtn}
                    </div>
                    {formText ? <div>{formText}</div> : <></>}
                </div>
            </form>
        </div>
    )
}