const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require("path");
const port = process.env.PORT || 3000;

//public static path
// console.log(path.join(__dirname,"../public"));
const staticPath =path.join(__dirname,"../public");
const tamplate_path =path.join(__dirname,"../templates/views");
const partial_path =path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',tamplate_path)
hbs.registerPartials(partial_path)
app.use(express.static(staticPath));


//routing
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('*',(req,res)=>{
    res.render('404error',{
        errormsg : 'Opps! Page Not Found'
    });
})

app.listen(port,(req,res)=>{
    console.log(`listening on ${port}`);
})