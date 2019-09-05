import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer FU5oqgUmGjbmCWGvjFqhbvlRXKgtDtI4hri93XqvmoD3UZYXQsfPzgxFTRl_8NexcE1EB0bNzfGP6LYo0zr8vSRkmsSDjXFLavVoBPKRtotSVySnTa7Aic6Wt8puXXYx'
    }
})