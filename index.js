const express = require('express')
const app = express()
const port = 9000;
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads

const jwt = require('./jwt')


app.get('/test', (req, res) => {
    // res.send('Hello World!')
    // res.send(md5("123456"))
})

app.post('/api/oauth/token', (req, res)=>{
    
})

app.post('/va/bills', (req, res)=>{
    
})

app.post('/va/payments', (req, res)=>{
    
})

 // conn.end()
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
 })