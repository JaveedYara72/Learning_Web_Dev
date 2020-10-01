//Verify data using joi
const express= require('express');
const app= express();
const Joi=require('joi');
const path=require('path');
const bodyParser=require('body-parser');
app.use('/public',express.static(path.join(__dirname,'/')));// for root directory use "/" instead of static
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/','form.html'));//used to display the staic html file
});
app.post('/',(req,res)=>{
    console.log(req.body);
    //Database work
    //We create a schema ie a set of rules to check data
    const schema=Joi.object().keys({
        email : Joi.string().trim().email().required(),
        pwd : Joi.string().min(5).max(17).required()
    });
    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            res.send('Error');
        }
        else{
            res.send('Sucess');
        }
    });
});

app.listen(3000);