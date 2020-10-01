// Verify nested objects and arrays
const Joi = require('joi');
const arrayString = ['banana','apple','cheese'];
const arrayObjects= [{
    example:'example1',
    example:'example2'
}];

const userInput={
    personalInfo: {
        streetAddress: '3864',
        city:'cassa',
        state:'fl'
    } ,
    preferences: arrayString // chnge to arrayObjects to verift objects
};

const personalInfoSchema = Joi.object().keys({
    streetAddress:Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
});

const preferencesSchema = Joi.array().items(Joi.string());//Items takes any schema. Here the schema is array of strings
// to create schema for objects
/* const preferenceSchema = Joi.array().items(Joi.object().keys({
    example: Joi.string().required()
}));*/
const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

Joi.validate(userInput,schema,(err,result)=>{
    if(err)
        console.log(err);
    else
    console.log(result);
});

