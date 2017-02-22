const express = require('express')
const app = express()

app.set('view engine', 'html')
app.engine('html', require('hbs').__express)
var listEngine = require('./app/list')
// const { PORT } = process.env

app.use('/views', express.static('views'))

app.get('/', function (req, res) {
  const title = 'List'
  const entries = listEngine.getListEntries()
  res.render('index', { title, entries })
})
app.get('/list/:id', function (req, res) {
  const idList = req.params.id
  const list = listEngine.getListEntry(idList)
  res.render('listAdd', { list })
})
app.listen(8080, () => console.log('Listening on PORT 3000...'))
