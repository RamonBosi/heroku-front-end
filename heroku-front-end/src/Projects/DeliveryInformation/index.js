import Form from "./components/Form"
import './styles/index.scss'

export default function DeliveryInformation(){
    return (
        <>
            <Form>
                <input type = 'text'/>
                <input type = 'text'/>
                <input type = 'text'/>

                <div className = 'form-btn'>
                    <button className = 'form-btn-activate'>Tfdsfsdfd</button>
                    <button  className = 'form-btn-cancel'>Tfdsfsdfd</button>

                </div>
                <p>Testando <a>dsfdfsdfsd</a></p>
            </Form>
        </>
    )
}