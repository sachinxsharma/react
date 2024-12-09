// import React , {useState} from 'react';
import './App.css'

function App() {
  return <div>
  <cardWrapper innerComponent={<TextComponent/>} />
  <cardWrapper innerComponent={<TextComponent2/>} />
  </div>
}
function cardWrapper({innerComponent}){
  return <div style = {{border: "2px solid black", padding: 20}}>
    {innerComponent}
  </div>
}
function TextComponent(){
  return <div>
    hi there 
  </div>
}
function TextComponent2(){
  return <div>
    hi there , my name is sachin
  </div>
}
export default App
