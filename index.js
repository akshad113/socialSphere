const express = require('express');
const port = 8000;
const Router = require('./routes/index');
const app = express();


app.use('/',Router);

//set up the view engine
app.set('view engine','ejs')
app.set('views','./views')

app.listen(port,function(error){
    if(error){
        console.log(`Error while running the expess server ${error}`)
    }
    console.log(`Server is up and running on port ${port}`);
})