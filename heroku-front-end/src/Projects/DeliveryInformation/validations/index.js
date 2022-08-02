import * as yup from 'yup'

export const loginValidation = yup.object({
    email: yup.string().email('Digite um email válido: exemplo@email.com').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatório')
}).required()