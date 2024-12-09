// import React , {useState} from 'react';
import './App.css'


// real wrapper component , 
// what do i mean by when i say wrapper - writing a single card struture {where all my styles div, etc etc }
//  in the main component i can call the wrapper and use it 
function App() {
  return <cardWrapper>
    hi there 
  </cardWrapper>
}
function cardWrapper({children}){
  return <div style = {{border: "2px solid black", padding: 20}}>
    {children}
  </div>
}


export default App
