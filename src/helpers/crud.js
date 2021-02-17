import axios from 'axios'
import { OPTIONS, QUOTES } from './api'

export const getQuotes = async () => {
    const res = await axios.get(QUOTES)
    return res.data
}

export const getOptions = async () => {
    const res = await axios.get(OPTIONS)
    return res.data
}

export const postQuote = async (data) => {
    console.log(data)
    await axios.post(`${QUOTES}`, data)
    getQuotes()
}

export const deleteQuote = async (id) => {
    await axios.delete(`${QUOTES}/${id}`)
    getQuotes()
}



