const express= require('express');
const app= express();
const path=require('path');
// here /public is an alias which is shown to user instead of the real folder name
//__dirname static is the actual folder containing the file
app.use('/public',express.static(path.join(__dirname,'static')));
app.get('/',(res,req)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));//used to display the staic html file
});

app.listen(3000);