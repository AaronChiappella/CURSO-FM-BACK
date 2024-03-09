const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('node:path'); //nativo

dotenv.config();
const PORT = 3000;
const app = express();
  


//uso de hbs
var hbs = require('hbs');

//uso de motor de plantillas 
app.set('view engine','hbs');

//set ruta a views
app.set('views', path.join(__dirname, 'views'));


//seteo archivos parciales
// seteo archivos parciales
hbs.registerPartials(path.join(__dirname, './views/partials'));



app.use(express.json()); //leer json
app.use(express.urlencoded({ extended: true })); //para formularios
app.use(cors());
app.use(morgan('dev'));


//render de hbs productos
app.get('/productos', (req, res) => {
  res.render('productos');
});


app.get("/clientes", (req, res) => {
  res.render('clientes');
});

app.get("/home", (req, res) => {
  res.render('home');
});


//router productos
const productosRoutes = require('./routes/productosRoutes');
const clientesRoutes = require('./routes/clientesRoutes');

//uso de routers
app.use('/api/productos',productosRoutes);
app.use('/api/clientes',clientesRoutes);





app.get("/", (req, res) => {
  res.send('Home running');
});


app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server listening on http://localhost:${PORT}`);

});

