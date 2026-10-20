import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import axios from 'axios';

function App() {
  let [id, setId] = useState('');
  let [name, setName] = useState('');
  let [cgpa, setCgpa] = useState('');
  let [batch, setBatch] = useState('');
  let [alldata, setAlldata] = useState([]);

  let handle = async()=>{

    let beta =  await axios.post('http://localhost:5000/students', {
      id: id,
      name: name,
      cgpa: cgpa,
      batch: batch,
    });
   console.log(beta.data);

   if(beta.data === "id is required"){
    toast.error("ID is required"); 
  }
  else if(beta.data === "name is required"){
    toast.error("Name is required"); 
  }
  else if(beta.data === "cgpa is required"){
    toast.error("CGPA is required");
  }
  else if(beta.data === "batch is required"){
    toast.error("Batch is required");
  }
  else{
    toast.success("Data is added successfully");
  }
  }
  useEffect(() => {
    async function alldata() {
      let data = await axios.get('http://localhost:5000/students');
      setAlldata(data.data);
    }
    alldata();
  }, [alldata]);


  return (
    <>
      <div className="form-container">
        <Toaster />
        <div className="Head">
          <h3>Input Student Data</h3>
        </div>
        <input
          onChange={e => setId(e.target.value)}
          type="number"
          placeholder="ID"
        />
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={e => setCgpa(e.target.value)}
          type="number"
          placeholder="CGPA"
        />
        <input
          onChange={e => setBatch(e.target.value)}
          type="number"
          placeholder="Batch"
        />
        <button onClick={handle}>Send</button>
        <br />
        <div className="Heading">
          <span>No.</span>
          <span>Name</span>
          <span>Batch</span>
          <span>Cgpa</span>
        </div>
        {alldata.map(item => (
          <div key={item.id} className="student-box">
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.batch}</span>
            <span>{item.cgpa}</span>
          </div>
        ))}
        <div className="end">
          <p>This all data are stored in database</p>
        </div>
      </div>
    </>
  );
}

export default App;
