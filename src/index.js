const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const { dirname } = require('path') 
const formidable = require('formidable')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')))


const route = require('./routes')
const db = require('./config/db')


//connect DB
db.connect()


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(morgan('combined'))

//template engine handlebars
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a+b,
    
  }
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'resources','views'))                                                  
app.set('view options', { layout: 'admin' });

//route init
route(app)


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})