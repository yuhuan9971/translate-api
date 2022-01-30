require('dotenv').config()
const cors = require('cors')
const { text } = require('express')
const express = require('express')
const translate = require('./utils/translate')
const app = express()


app.use(cors())
app.use(express.json())

app.post('/translate', async (req, res)=> {
    const {text, options} = req.body
    try {
        const resData = await translate(text, options)
        res.send(resData)
    }catch (err) {
        console.log(err)
        res.send(err)
    }
})

const PORT = process.env.PORT

app.listen(PORT, (err)=> {
    if (err) return console.log(err.message)
    console.log(`server listening at port: ${PORT}`)
})