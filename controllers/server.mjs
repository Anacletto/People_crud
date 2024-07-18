import express from 'express'
import {join} from 'path'
const app = express()
const port = 8080

app.get("/",(req,res)=>{
    res.sendFile(join("/home/anacletto/People_crud","view/index.html"))
})

app.listen(port,()=>{
    console.log(`Server running on localhost:${port}`)
})