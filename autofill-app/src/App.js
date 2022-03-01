import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [Userinfo,setUserinfo] = useState([]);
  const [Suggests,setSuggests] = useState([]);
  const [Show,setShow] = useState(false);
  const [Users,setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>{
      if(resp.ok)
      return resp.json();
      throw resp;
    })
    .then(resp => {
      setUserinfo(...Userinfo,resp);
    })
    .catch(err=> {
      console.log(err);
    })
  },[]);
  Userinfo.forEach(element => {
    setUsers(...Users,element);
  }) 
  const Change = (e) => {
    let temp = [];
    let type = e.target.value;
    if(type)
    {
      temp = users.filter(element => {
        return element.toLowerCase().indexOf(type.toLowerCase()) === 0;
      })
      setShow(true);
      setSuggests(temp);
    }
  }
  const KeyDown = (e) => {
    setShow(false);
    setSuggests([]);
  }
  return (
    <div>
      <input type="text" id="autofiller" placeholder="input username" onChange= {Change} onKeyDown= {KeyDown}/>
      <button>Submit</button>
      <datalist className="Suggestions" style= {{display: show ? 'block' : 'none'}}> 
          {Suggests.map((element,i) => {
            return <option key= {i}> {element} </option>
          })}
      </datalist>
    </div>
  );
}

export default App;
