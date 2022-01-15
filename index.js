const express = require('express');
const res = require('express/lib/response');
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const apiKey = '6e681aceee32fa7ab7bae6fa531aff36'
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.get('/', (req, res) => {
    res.send('Hello Zak, You\'re on the right path')
})

// Get all products
app.get('/products', async (req, res)=>{
    try {
        const response = await request(`${baseUrl}&url=http://amazon.com`)
        res.send(JSON.parse(response))
    } catch (error) {
        console.log(error)
    }
})

// Get product by id
app.get('/products/:productId', async (req, res) =>{
    const { productId } = req.params
    try {
        const response = await request(`${baseUrl}&url=http://amazon.com/dp/${productId}`)
        res.send(JSON.parse(response))
    } catch (error) {
        console.log(error)
    }
})

// Get product Reviews
app.get('/products/:productId/reviews', async (req, res) =>{
    const { productId } = req.params
    try {
        const response = await request(`${baseUrl}&url=http://amazon.com/product-reviews/${productId}`)
        res.send(JSON.parse(response))
    } catch (error) {
        console.log(error)
    }
})

// Get product offers
app.get('/products/:productId/offers', async (req, res) =>{
    const { productId } = req.params
    try {
        const response = await request(`${baseUrl}&url=http://amazon.com/dp/offre-listing/${productId}`)
        res.send(JSON.parse(response))
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, ()=>{
    console.log(`The application started running on Port ${PORT}`)
})