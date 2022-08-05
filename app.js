const express = require('express')
const app =express()
const port = 3030

app.listen(3030, ()=> console.log('Server runnung in http://localhost:' + port))
app.use (express.static('public'))

const mainRouter = require('./routers/main')

app.use('/', mainRouter)