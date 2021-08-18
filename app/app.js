const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//creating app
const app = express();

//database
mongoose.connect('mongodb://localhost/app',{
    useNewUrlParser: true ,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open',()=>{
    console.log("Connected to mongodb");
});


//middleware
app.use(bodyParser.json());


//routes
app.get('/',(req,res)=>{
    res.send("Hello, World!");
});

// app.get('/about',(req,res)=>{
//     res.send("Hello, about");
// });

const QuotesRoute = require('./routes/Quotes');

app.use('/quotes',QuotesRoute);



//start server
app.listen(3000,console.log("running on localhost:3000"));