const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/dbConn')
const dbtenant = require('./config/dbConnTenants')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres APIS' })
})

app.get('/users', db.getlandlord)
app.get('/users/:id', db.getlandlordById)
app.post('/users', db.createlandlord)
app.put('/users/:id', db.updatelandlord)
app.delete('/users/:id', db.deletelandlord)

app.get('/tenant', dbtenant.gettenant)
app.get('/tenant/:id', dbtenant.gettenantById)
app.post('/tenant', dbtenant.createtenant)
app.put('/tenant/:id', dbtenant.updatetenant)
app.delete('/tenant/:id', dbtenant.deletetenant)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


