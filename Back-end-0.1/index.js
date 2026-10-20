const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const students = [
  // {
  //   id: 1,
  //   name: 'Mahadi Hassan',
  //   cgpa: 3.74,
  //   batch: 68,
  // },
  // {
  //   id: 2,
  //   name: 'Sakib Khan',
  //   cgpa: 3.5,
  //   batch: 68,
  // },
  // {
  //   id: 3,
  //   name: 'Rakib Hasan',
  //   cgpa: 3.25,
  //   batch: 69,
  // },
  // {
  //   id: 4,
  //   name: 'Mridul Sarker',
  //   cgpa: 3.8,
  //   batch: 67,
  // },
  // {
  //   id: 5,
  //   name: 'Tanvir Ahmed',
  //   cgpa: 3.6,
  //   batch: 69,
  // },
];

app.get('/',(req,res)=>{
  res.send("hello  this is backend server");
  
})
app.get('/students',(req,res)=>{
  res.send(students)
  
})

app.post('/students',(req,res)=>{
  
 let {id, name, cgpa, batch} = req.body;
  if (!id){
    res.send("id is required");
  }
  else if (!name ){
    res.send("name is required");
  }
  else if (!cgpa){
    res.send("cgpa is required");
  }
  else if (!batch){
    res.send("batch is required");
  }
  else{
    students.push(req.body);
    res.send("Data added successfully");
  }
})


app.listen(port,()=>{
  console.log("sarver is running");
  
})