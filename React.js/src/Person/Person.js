import React from 'react';


const Person = (props) => { // Please pass something as an argument here as this component here will 
                            //Become dynamic for certain attributes that would be added
    return (
        <div>
            <p onClick = {props.click} > {/* Passing a Property Which references a Function When Clicked Upon. The Function's name can be anything */}
             I am  {props.name} and my age is {props.age}!
            </p >
            <p>{props.children}</p>
            <input type = "text" onChange = {props.changed} value= {props.name}/>
        </div>
    );
}

export default Person;