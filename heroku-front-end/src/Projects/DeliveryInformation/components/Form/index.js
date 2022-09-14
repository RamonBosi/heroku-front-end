export default function Form({handleSubmit,formTitle, formInput, formBtn, formText }){
    return (
        <div className = 'form-background'>
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