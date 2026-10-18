import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [id, setId] = useState('');
  let [name, setName] = useState('');
  let [cgpa, setCgpa] = useState('');
  let [batch, setBatch] = useState('');

  let handle = async()=>{
    // console.log(id);
    // console.log(name);
    // console.log(cgpa);
    // console.log(batch);
    await axios.post('http://localhost:5000/students', {
      id: id,
      name: name,
      cgpa: cgpa,
      batch: batch,
    });
    
  }
  return (
    <>
      <div className="form-container">
        <input onChange={(e)=>setId(e.target.value)} type="number" placeholder="id" />
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" />
        <input onChange={(e)=>setCgpa(e.target.value)} type="number" placeholder="cgpa" />
        <input onChange={(e)=>setBatch(e.target.value)} type="number" placeholder="batch" />
        <button onClick={handle} >Send</button>
      </div>
    </>
  );
}

export default App;
