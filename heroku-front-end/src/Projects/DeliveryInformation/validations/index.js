import * as yup from 'yup'

const maxCharacters = (max, data) => `Maxímo de ${max} caracteres para ${data}`
const minCharacters = (min, data) => `Minímo de ${min} caracteres para ${data}`
const dataRequired = (data) => `${data} é obrigatório`
const validEmail = 'Digite um email válido: exemplo@email.com'
const positiveNumber = 'Digite um número positivo'
const integerNumber = 'Digite um número inteiro'

export const loginValidation = yup.object({
    email: yup.string().max(100,maxCharacters(100,'Email')).email(validEmail).required(dataRequired('Email')),
    password: yup.string().max(200,maxCharacters(200,'senha')).required(dataRequired('Senha'))
}).required()

export const validationCreateUser = yup.object({
    nome: yup.string().max(100,maxCharacters(100,'nome')).required(dataRequired('Nome')),
    cpf: yup.number().typeError(dataRequired('CPF')).integer(integerNumber).positive(positiveNumber).min(10000000000,minCharacters(11,'CPF')).max(99999999999,maxCharacters(11,'CPF')).required(dataRequired('CPF')),
    email: yup.string().max(100,maxCharacters(100,'email')).email(validEmail).required(dataRequired('Email')),
    password: yup.string().max(200,maxCharacters(200,'senha')).required(dataRequired('Senha'))
}).required()