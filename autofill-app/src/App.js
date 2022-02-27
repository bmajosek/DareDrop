import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [tab,settab] = useState([]);
  const [suggest,setsuggest] = useState([]);
  const [show,setshow] = useState(false);
  let type;
  let users = [];
  let temp = [];
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>{
      if(resp.ok)
      return resp.json();
      throw resp;
    })
    .then(resp => {
      settab(resp);
    })
    .catch(err=> {
      console.log(err);
    })
  },[]);
  tab.forEach(element => {
    users.push(element.username);
  }) 
  const Change = (e) => {
    type = e.target.value;
    if(type)
    {
      temp = users.filter(element => {
        return element.toLowerCase().indexOf(type.toLowerCase()) === 0;
      })
      setshow(true);
      setsuggest(temp);
    }
  }
  const KeyDown = (e) => {
    setshow(false);
    setsuggest([]);
  }
  return (
    <div>
      <input type="text" id="autofiller" placeholder="input username" onChange= {Change} onKeyDown= {KeyDown}/>
      <button>Submit</button>
      <datalist className="Suggestions" style= {{display: show ? 'block' : 'none'}}> 
          {suggest.map((element,i) => {
            return <option key= {i}> {element} </option>
          })}
      </datalist>
    </div>
  );
}

export default App;
