const express = require('express');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const productRoutes = require('./routes/product');
const mainRoutes = require('./routes');
const userRoutes = require('./routes/users');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/productos', productRoutes);

app.use('/', mainRoutes);

app.use('/usuarios', userRoutes);

app.use(express.urlencoded({extended: false}));
app.use(express.json());


