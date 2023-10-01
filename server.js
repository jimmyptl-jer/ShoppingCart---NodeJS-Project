const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const PORT = 4001;
const Url = 'mongodb+srv://Anshumi:anshumi@cluster0.w5wfjgh.mongodb.net/Products?retryWrites=true&w=majority'


// Configure the view engine as EJS and set the views directory
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory

app.use(bodyParser.urlencoded({ extended: false }));


// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

const routes = require('./routes');
app.use('/', routes);

mongoose.connect(Url).then(()=>{
  console.log("Connected to MongoDB");
  app.listen(PORT)
}).catch(err =>{
  console.log("Error while connecting to the database",err)
})

