const express = require('express')
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require('./public/src/routes.js')
const navigation = require('./public/src/navigation.js')
const app = express()
const navi = navigation()
const route = routes(navi)



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', route.home);
app.get('/services', route.services);
app.get('/projects', route.projects)
// app.get('/gallery', route.gallery);
app.get('/aboutUs', route.aboutUs);
app.get('/contactUs', route.contactUs);

let PORT = process.env.PORT || 3003

app.listen(PORT, function () {
    console.log('App starting on port', PORT)
})