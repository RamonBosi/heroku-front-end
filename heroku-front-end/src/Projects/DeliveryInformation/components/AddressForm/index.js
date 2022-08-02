import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationAddress } from "../../validations";
import Form from "../Form";

export default function AddressForm(){

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationAddress)
    })

    const dataSubmit = (data) => console.log(data)

    return(
        <Form 
        handleSubmit={handleSubmit(dataSubmit)}
        formTitle={<h2>Cadastrar Endereço</h2>}
        formInput = {
            <>
                <input 
                    type = 'text' 
                    placeholder="UF" 
                    {...register('uf')}/>
                <p>{errors.uf?.message}</p>
                <input 
                    type = 'text' 
                    placeholder="Cidade" 
                    {...register('cidade')}/>
                <p>{errors.cidade?.message}</p>
                <input 
                    type = 'text' 
                    placeholder="Rua" 
                    {...register('rua')}/>
                <p>{errors.rua?.message}</p>
                <input 
                    type = 'text' 
                    placeholder="Bairro" 
                    {...register('bairro')}/>
                <p>{errors.bairro?.message}</p>
            </>
        }
        formBtn = {
            <>
                <button type = 'submit'>Cadastrar</button>
                <button>Cancelar</button>
            </>
        }
        />
    )
}