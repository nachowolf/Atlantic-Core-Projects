const express = require('express')
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require('./src/routes.js');
const navigation = require('./src/navigation.js');
const pdfDocs = require('./src/pdf-routes.js');
const pdfs = pdfDocs()
const app = express()
const navi = navigation()
const route = routes(navi, pdfs)
const fs = require('fs')


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
app.get('/aboutUs/:file', route.aboutUs)

app.get('/certs/BEE.pdf', function(request, response){
    let tempFile1="certs/BEE.pdf";
    fs.readFile(tempFile1, function (err,data){
       response.contentType("application/pdf");
       response.send(data);
    });
  });

  app.get('/certs/COR14.3-RegCert.pdf', function(request, response){
    let tempFile2="certs/COR14.3 - Reg Cert.pdf";
    fs.readFile(tempFile2, function (err,data){
       response.contentType("application/pdf");
       response.send(data);
    });
  });

  app.get('/certs/LOGS-AtlanticCoreProjects.pdf', function(request, response){
    let tempFile3="certs/LOGS - Atlantic Core Projects.pdf";
    fs.readFile(tempFile3, function (err,data){
       response.contentType("application/pdf");
       response.send(data);
    });
  });

  app.get('/certs/CIDB-Registration.pdf', function(request, response){
    let tempFile4="certs/CIDB Registration.pdf";
    fs.readFile(tempFile4, function (err,data){
       response.contentType("application/pdf");
       response.send(data);
    });
  });

let PORT = process.env.PORT || 3003

app.listen(PORT, function () {
    console.log('App starting on port', PORT)
})