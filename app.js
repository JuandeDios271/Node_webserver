require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use( express.static('public') ); 

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'JUAN',
        titulo: 'Curso Node'
    });
  });

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre: 'JUAN',
        titulo: 'Curso Node'
    });
  });

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre: 'JUAN',
        titulo: 'Curso Node'
    });
  });

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
  });


app.listen(port, () =>{
    console.log(`Example app listening at http//:localhost:${port}`)
})