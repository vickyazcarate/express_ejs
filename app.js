const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/productos', productRoutes);

app.use('/', mainRoutes);

app.use('/usuarios', userRoutes);



