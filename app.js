// Importing required modules
const express = require('express');
const app = express();
 // Importing route modules
const productRoutes = require('./routes/productRoutes');
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

 // Setting the view engine to ejs
app.set('view engine', 'ejs');

 // Serving static files from the public directory
app.use(express.static('./public'));

 // Starting the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

 // Routing for products
app.use('/productos', productRoutes);

 // Routing for main
app.use('/main', mainRoutes);

 // Routing for users
app.use('/usuarios', userRoutes);



