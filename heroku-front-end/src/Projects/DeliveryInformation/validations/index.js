import * as yup from 'yup'
import { 
    maxCharacters, 
    minCharacters,
    dataRequired,
    validEmail,
    integerNumber,
    positiveNumber 
} from './messages'

export const loginValidation = yup.object({
    email: yup.string().max(100,maxCharacters(100,'email')).email(validEmail).required(dataRequired('Email')),
    password: yup.string().max(200,maxCharacters(200,'senha')).required(dataRequired('Senha'))
}).required()

export const validationUser = yup.object({
    nome: yup.string().max(100,maxCharacters(100,'nome')).required(dataRequired('Nome')),
    cpf: yup.number().typeError(dataRequired('CPF')).integer(integerNumber).positive(positiveNumber).min(10000000000,minCharacters(11,'CPF')).max(99999999999,maxCharacters(11,'CPF')).required(dataRequired('CPF')),
    email: yup.string().max(100,maxCharacters(100,'email')).email(validEmail).required(dataRequired('Email')),
    password: yup.string().max(200,maxCharacters(200,'senha')).required(dataRequired('Senha'))
}).required()

export const validationAddress = yup.object({
    uf: yup.string().min(2, minCharacters(2,'UF')).max(2,maxCharacters(2,'UF')).required(dataRequired('UF')),
    cidade: yup.string().max(100,maxCharacters(100,'cidade')).required(dataRequired('Cidade')),
    rua: yup.string().max(100,maxCharacters(100,'rua')).required(dataRequired('Rua')),
    bairro: yup.string().max(100,maxCharacters(100,'bairro')).required(dataRequired('Bairro'))
}).required()