import { useState } from "react"

export default function Form({handleSubmit,formTitle, formInput, formBtn, formText }){

    const [widthHeight] = useState(() =>{
        return {
            width: document.defaultView.innerWidth,
            height: document.defaultView.innerHeight
        }
    })

    return (
        <div style={widthHeight} className = 'form-background'>
            <h1>Informações de entregas</h1>
            <form onSubmit={handleSubmit}>
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