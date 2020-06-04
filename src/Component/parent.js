import React,{useEffect,useState, Component} from 'react';
import View from './All-reimbursement'



function Parent(props) {
  // get id and Role passed from Log-in component using var role= props.match.params.id 
  // var role= props.match.params.name
  //izan
  useEffect(() => {
    if(role=="Manager"){
      // make a call to back end get all employees and thier information along with 
      // the request they made
    }
      
  },[]);
  useEffect(() => {
  if(role=="Employee"){
    // make a call to back end get all employee by id and thier information along with 
    // the request they made
  }
    
},[]);
     var role= props.match.params.id
     console.log(props)
      var data=[
      {
          Personid: 2,
          LastName: "Cherfaoui5",
          FirstName: "Hamid",
          type:"other",
          
          Status     :"Pending"
      },
      {
        Personid: 4,
        LastName: "Cherfaoui4",
        FirstName: "Hamid",
        type:"other",
        Status     :"Pending"
    },
    {
      Personid: 5,
      LastName: "Cherfaoui3",
      FirstName: "Hamid",
      type:"other",
      Status     :"Pending"
  },

  ]; 
  // the data u get from the use effect pass it as an arguement to [posts, setPosts] = useState(data);
  var [posts, setPosts] = useState(data);
  var [type, setType] =useState("")
  // chilData1 is the data we passed in the add function refrence coming from All-riembursemnt component
  // it includes Type and File
  var add= (chilData1)=>{
    setType(chilData1[0])
    console.log(chilData1[0])
    console.log(chilData1[1])
   var data1={
    Personid: 6,
    LastName: "Cherfaoui",
    FirstName: "Hamid",
    type:"other",
    Status     :"Pending"
}
  data1.type=chilData1[0]
   posts:posts.push(data1)
  setPosts([...posts]);
    }
  // id is passed in deny and aprove function refrence from  coming from All-riembursemnt component
  // this id will be diffrent from the id passed from log-in Component
  var Approve= (id) => {
    let testData = [...posts];
    let index = testData.findIndex(Person => Person.Personid == id );
    testData[index].Status = "Approved";
    setPosts(testData);
     }
   
  var deny= (id)=>{
    let testData = [...posts];
    let index = testData.findIndex(Person => Person.Personid == id );
    testData[index].Status = "Denied";
    setPosts(testData);
      }
   
    var person=null
    if(role==="Manager"){
      person=(
        <View pass={role}    denied={deny} Approved={Approve}  obj={posts}/> )
    }
    if(role==="Employee"){
      person=(
        <View pass={role} click={add}   obj={posts}/>)
    }
  return (
   
    <div className="App">
      {person}
    </div>
  );
}
export default Parent;