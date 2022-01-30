require('dotenv').config()
const cors = require('cors')
const express = require('express')
const translate = require('./utils/translate')
const app = express()


app.use(cors())
app.use(express.json())

app.get('/translate', async (req, res)=> {
    try {
        const resData = await translate()
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