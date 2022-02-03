require('dotenv').config()
const cors = require('cors')
const { text } = require('express')
const express = require('express')
const translate = require('./utils/translate')
const app = express()


app.use(cors())
app.use(express.json())

const multiLang = ['en', 'zh-tw', 'ko', 'ja']

app.post('/translate', async (req, res)=> {
    const {text, options} = req.body
    try {
        const resData = await translate(text, options)
        res.send(resData)
    }catch (err) {
        console.log(err)
        res.statusCode(403).send(err)
    }
})

app.post('/translate/multi', async (req, res)=> {
    const {text} = req.body
    const data = {}
    for (var lang of multiLang) {
        try {
            const resData = await translate(text, {to: lang})
            data[lang] = resData
        }catch (err) {
            data[lang] = {errCode: 403, msg: err.message}
        }
    }
    res.send(data)
})

const PORT = process.env.PORT

app.listen(PORT, (err)=> {
    if (err) return console.log(err.message)
    console.log(`server listening at port: ${PORT}`)
})