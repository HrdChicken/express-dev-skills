const express = require('express');
const path = require('path');

const app = express();

//set the defualt view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//tell the app to listen to port 3000
app.listen(3000, function(){
    console.log('listening on port 3000')
})