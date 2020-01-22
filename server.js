const hbs = require('hbs');
const express = require('express');
const app = express();

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

// Express HBS engine
hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Aaron Isaacs',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

// app.get('/', function(req, res) {
//   const salida = { nombre: 'Aaron', edad: 25, url: req.url };
//   res.send(salida);
// });

// app.get('/data', function(req, res) {
//   res.send('Hola data');
// });

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
