const express = require('express')
const app = express()
const port = 3000
const health = require('./database/health.json')
const incidents = require('./database/incidents.json')

app.get('/incidents', (req, res) => {
  res.send(incidents);
})

app.get('/health', (req, res) => {
  const data = req.body;

  res.send(health);
})

app.get('/', (req, res) => {
  res.send('Welcome to API Health Microservice');
})

app.listen(port, () => {
  console.log(`API Health Microservice executando na porta: ${port}`)
})