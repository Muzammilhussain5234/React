import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Spidermon")
  const [form, setform] = useState({email:"",phone:""})
  const handle=() => {
    alert("Button clicked!");
  }
  const handlechange=(e)=>{
    // setname(e.target.value);
    setform({...form,[e.target.name]:e.target.value});
    console.log(form);

  }
  const mousehandle=() => {
    alert("stop it!");}
  return (
    <><div className="button"><button onClick={handle}>Click Me</button></div>
    <div className="red" onMouseOver={mousehandle}>I m red</div>
    <input type="text" name="email" value={form.email}onChange={handlechange}/>
    <input type="text" name="phone" value={form.phone}onChange={handlechange}/>

    
  
    

    </>
    
  )
}

export default App
