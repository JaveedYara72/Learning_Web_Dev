import React,{useState} from 'react'; //useState is a hook
import './App.css';
import Person from './Person/Person';


const App = props => {  //Function doesn't use state property
    const [personal, setPersonState]  = useState({
      persons:[
        {name:"Javeed",age:  28},
        {name:"Maya",age:18},
        {name:"Jaya",age: 38}
      ]
    });
    
  // We can use set state here but not with this.state thats it.
  const switchNameHandler = () =>{
    setPersonState(
      { 
        persons:[
          {name:"Javeed",age: 30},
          {name:"Maya",age: 18},
          {name:"Jaya",age: 45}
        ],
        OtherState : personal.OtherState
      }
    )
  }

  const NameInputChanged = (event) =>{
    setPersonState(
      { 
        persons:[
          {name: "Javeed",age: 30},
          {name:  event.target.value ,age: 18},
          {name:"Jaya",age: 45}
        ],
        OtherState : personal.OtherState
      }
    )
  }
    


//Or This would also work
                                                                                                                                               
/* class App extends Component{
    state = {
      persons:[
        {name:"Javeed",age:  28},
        {name:"Maya",age:18},
        {name:"Jaya",age: 38}
      ]
    }

    // Prior to using Class based Component use render(){return()} Prior to return

    switchNameHandler = () =>{
      this.setState(
        {
          persons:[
            {name:"Javeed",age: 30},
            {name:"Maya",age: 18},
            {name:"Jaya",age: 45}
          ]
        }
      )
    } */

    return(
      <div className = "App">
        <h1>
          Hi I am a React App!
        </h1>
        <p> Hello Hi </p>
        <button onClick = {switchNameHandler}>Switch Me</button>
        <Person 
        name = {personal.persons[0].name} 
        age= {personal.persons[0].age}/>
        <Person 
        name = {personal.persons[1].name} 
        age = {personal.persons[2].age}
        click ={switchNameHandler}
        changed = {NameInputChanged}> I Love Football! </Person> {/* Click is a property not an inbuilt method. CLick can be named anything */}
        <Person 
        name = {personal.persons[2].name} 
        age = {personal.persons[1].age}/>
      </div>
      
      
      ) 
  }

export default App;

