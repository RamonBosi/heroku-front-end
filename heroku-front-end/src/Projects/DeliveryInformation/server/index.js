import axios from 'axios'

const serverDev = 'http://localhost:3100'
const serverPro = 'https://heroku-ram.herokuapp.com'

export const server = axios.create({
    baseURL: serverDev
})