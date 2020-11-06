const express = require('express')
const app = express()
const server = require('http').createServer(app)
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

const PORT = process.env.PORT || 9000
server.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)
})