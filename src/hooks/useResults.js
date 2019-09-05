import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async search => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: search,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (e) {
            console.warn(e)
            setErrorMessage('!A ocurrido un problema.!')
        }
    }
    useEffect(() => {
        searchApi('pasta')
    }, [])
    return [searchApi, results, errorMessage]
}