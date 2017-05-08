const express = require('express')
const app = express()
const port = 3002
const allEvents = [
  {
    name: 'QConSP',
    data: ['24/04/2017', '25/04/2017', '26/04/2017'],
    link: 'http://qconsp.com'
  },
  {
    name: 'FrontInSampa',
    data: ['01/07/2017'],
    link: 'http://www.frontinsampa.com.br'
  },
  {
    name: 'FrontInVale',
    data: ['16/07/2017'],
    link: 'https://www.eventick.com.br/frontinvale2017'
  }
]

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.get('/allevents', (req, res) => res.json(allEvents))


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log('To down the server: ctrl + c')
})
