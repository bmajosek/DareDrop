import React, { useEffect, useState } from 'react'
import './Input.css'
function InputSuggest() {
  const [Suggests,setSuggests] = useState([]);
  const [Show,setShow] = useState(false);
  const [Userinfo,setUserinfo] = useState([]);
  let Users = [];
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
      if(resp.ok)
      return resp.json();
      throw resp;
    })
    .then(resp => {
       setUserinfo(resp);
    })
    .catch(err => {
      console.log(err);
    })
    });
    Userinfo.forEach(element => {
        Users.push(element.username);
    })
    const Change = (e) => {
        let temp = [];
        let type = e.target.value;
        if(type)
        {
        temp = Users.filter(element => {
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
    const Changeactive = (e) => {
        document.getElementById("autofiller").value = e.target.value;
        setShow(false);
    }
    return (
    <div>
      <input type="text" id="autofiller" placeholder="input username" autoComplete="off" onChange={Change} onKeyDown={KeyDown} onFocus={Change}/>
      <button>Submit</button>
      <datalist className="Suggestions" style= {{display: Show ? 'block' : 'none'}}> 
          {Suggests.map((element,i) => {
            return <option key = {i} id ="options" onClick={Changeactive}> {element} </option>
          })}
      </datalist>
    </div>
    );
}

export default InputSuggest;
