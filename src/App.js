
// import './App.css';
import CustomRouter from './CustomRouter';
import { auth } from "./firebase";
import React,{useEffect} from 'react';
import {useStateValue} from './StateProvider'

function App() {





  const [{},dispatch]=useStateValue()
useEffect(() => {
  // will only run once when app component loads
  auth.onAuthStateChanged( authUser =>{
console.log("The User is >>>>",authUser)
if (authUser){
// The User just logged in / was logged in
dispatch({
type:'SET_USER',
user:authUser})
}
else{
  // the User Logged Out
  dispatch({
    type:'SET_USER',
    user:null})
}
  } )
},
[])





  return (
    <div className="App">
      <CustomRouter/>


    </div>
  );
}

export default App;
