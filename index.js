const express = require('express');
const app = express();
// website run on the port number 80, in production
const PORT = 8000;



// use express routes
app.use('/',require('./routes/index'));


// Start the server
app.listen(PORT,(err)=>{
    if(err){
        Console.log(`Error while Starting the Server:${err}`);
        return;
    }
    console.log(`Server is up on PORT:${PORT}`);
});