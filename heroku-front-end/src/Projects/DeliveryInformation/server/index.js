import axios from 'axios'

export const server = axios.create({
    baseURL: 'https://heroku-ram.herokuapp.com'
})