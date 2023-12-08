const express = require('express');
const path = require('path');
const app = express();
const database = require('./util/database');
const PORT = 3000;
const { sequelize } = require('./util/database'); // Import sequelize from your database module

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', './views'); // Specify the absolute path to your views directory

// Configure the static file middleware to serve files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes')
app.use('/',routes());

// database.execute('SELECT * FROM node_server.products')
// .then((results)=>{
//   console.log(results);
// })
// .catch((err)=>{
//   console.log(err)
// })

// app.use((res,req,next)=>{
//   res.status(404).send('Page Not Found')
// })


sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Express server listening on port ${PORT}!`);
    });
  })
  .catch(err => {
    console.error('Error in syncing the database:', err);
  });
