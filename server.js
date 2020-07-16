//Importing external packages required for the project
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
};
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Setting up the app with express and set server settings
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({limit: '10mb', extended:false}));

//Setting up the mongo database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Mongoose'));

//Setting up the server to listen on port 8000 or the environment variable
app.listen(process.env.PORT || 8000, () => {
    console.log('Listening on port 8000.')
});

// Route Definitions imported from /routes folder
const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const mathRouter = require('./routes/math')

app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/math', mathRouter);
