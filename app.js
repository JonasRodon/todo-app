const express = require('express')
const app = express()

app.set('view engine', 'html')
app.engine('html', require('hbs').__express)
var listEngine = require('./app/list')
const { PORT } = process.env

app.use(express.static('public'))

app.get('/', function (req, res) {
  const title = 'List'
  const entries = listEngine.getListEntries()
  res.render('index', { title, entries })
})

app.get('/about', function (req, res) {
  const title = 'About Me'
  res.render('about', { title })
})

app.get('/list/:id', function (req, res) {
  const idList = req.params.id
  const list = listEngine.getListEntry(idList)
  res.render('list', { list })
})

app.listen(3000, () => console.log('Listening on PORT 3000...'))
